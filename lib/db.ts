import { neon } from "@neondatabase/serverless";

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }
  return neon(connectionString);
}

export async function insertLeadToNeon(lead: {
  id: string;
  submittedAt: string;
  companyName: string;
  website?: string;
  country: string;
  contactPerson: string;
  jobTitle?: string;
  email: string;
  whatsapp: string;
  industry: string;
  isExhibiting: string;
  hasDistributor: string;
  supportNeeds: string[];
  timeline: string[];
  additionalNotes?: string;
  sourceUrl?: string;
}) {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      INSERT INTO leads (
        id, submitted_at, company_name, website, country, contact_person,
        job_title, email, whatsapp, industry, is_exhibiting, has_distributor,
        support_needs, timeline, additional_notes, source_url
      ) VALUES (
        ${lead.id}, ${lead.submittedAt}, ${lead.companyName}, ${lead.website || null},
        ${lead.country}, ${lead.contactPerson}, ${lead.jobTitle || null}, ${lead.email},
        ${lead.whatsapp}, ${lead.industry}, ${lead.isExhibiting}, ${lead.hasDistributor},
        ${lead.supportNeeds}, ${lead.timeline}, ${lead.additionalNotes || null}, ${lead.sourceUrl || null}
      )
    `;
    console.log(`[Neon DB] Successfully stored lead ${lead.id}`);
    return true;
  } catch (err) {
    console.error("[Neon DB Insert Error]:", err);
    return false;
  }
}
