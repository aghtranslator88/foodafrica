import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface LeadSubmissionPayload {
  companyName: string;
  website?: string;
  country: string;
  contactPerson: string;
  jobTitle?: string;
  email: string;
  whatsapp: string;
  industry: string;
  isExhibiting: "YES" | "NO" | "NOT SURE";
  hasDistributor: "YES" | "NO" | "NOT SURE";
  supportNeeds: string[];
  timeline: string[];
  additionalNotes?: string;
  sourceUrl?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

// Helper to save lead to persistent storage
function persistLead(record: Record<string, unknown>) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let leads: Array<Record<string, unknown>> = [];
    if (fs.existsSync(LEADS_FILE)) {
      try {
        const fileContent = fs.readFileSync(LEADS_FILE, "utf-8");
        leads = JSON.parse(fileContent);
      } catch {
        leads = [];
      }
    }

    leads.unshift(record); // newest first
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("[Persistence Warning] Could not write to local leads.json:", err);
  }
}

export async function POST(request: Request) {
  try {
    const data: LeadSubmissionPayload = await request.json();

    // Validation
    const errors: Record<string, string> = {};
    if (!data.companyName?.trim()) errors.companyName = "Company name is required";
    if (!data.country?.trim()) errors.country = "Country is required";
    if (!data.contactPerson?.trim()) errors.contactPerson = "Contact person name is required";
    if (!data.email?.trim() || !data.email.includes("@")) errors.email = "Valid work email is required";
    if (!data.whatsapp?.trim()) errors.whatsapp = "WhatsApp or phone number is required";
    if (!data.industry?.trim()) errors.industry = "Product / industry is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please correct the highlighted fields." },
        { status: 400 }
      );
    }

    const submissionRecord = {
      id: `lead_${Date.now()}`,
      submittedAt: new Date().toISOString(),
      ...data,
    };

    // 1. Persistent local storage
    persistLead(submissionRecord);

    // 2. Insert into Neon PostgreSQL if DATABASE_URL is set
    try {
      const { insertLeadToNeon } = await import("@/lib/db");
      await insertLeadToNeon(submissionRecord);
    } catch (neonErr) {
      console.error("[Neon Integration Error]", neonErr);
    }

    console.log("[Lead Received - Food Africa 2026]", JSON.stringify(submissionRecord, null, 2));

    // 2. Webhook forwarder (if configured e.g. Zapier, Make, Telegram, Slack, or CRM)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionRecord),
        });
      } catch (webhookErr) {
        console.error("[Webhook Forwarding Error]", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      leadId: submissionRecord.id,
      message: "Your requirements have been successfully registered with our Cairo team.",
    });
  } catch (error) {
    console.error("[Lead Submission Error]", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request. Please try again or contact us via WhatsApp." },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve or export leads (for admin inspection or download)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("key");

  // Optional simple protection key via env (or allowed in development)
  if (process.env.ADMIN_SECRET && secret !== process.env.ADMIN_SECRET && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (fs.existsSync(LEADS_FILE)) {
      const content = fs.readFileSync(LEADS_FILE, "utf-8");
      const leads = JSON.parse(content);
      return NextResponse.json({ total: leads.length, leads });
    }
    return NextResponse.json({ total: 0, leads: [] });
  } catch (err) {
    return NextResponse.json({ error: "Could not read leads" }, { status: 500 });
  }
}
