import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getLeadsFromNeon } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // 1. Try Neon PostgreSQL first
    const neonLeads = await getLeadsFromNeon();

    if (neonLeads && Array.isArray(neonLeads) && neonLeads.length > 0) {
      return NextResponse.json({
        success: true,
        source: "neon_postgresql",
        count: neonLeads.length,
        leads: neonLeads,
      });
    }

    // 2. Fallback to local JSON storage
    const dataFile = path.join(process.cwd(), "data", "leads.json");
    if (fs.existsSync(dataFile)) {
      const content = fs.readFileSync(dataFile, "utf-8");
      const localLeads = JSON.parse(content);
      return NextResponse.json({
        success: true,
        source: "local_storage",
        count: localLeads.length,
        leads: localLeads,
      });
    }

    return NextResponse.json({
      success: true,
      source: "empty",
      count: 0,
      leads: [],
    });
  } catch (error) {
    console.error("[Admin Leads API Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
