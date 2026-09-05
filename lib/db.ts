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
    const query = `
      INSERT INTO leads (
        id, submitted_at, company_name, website, country, contact_person,
        job_title, email, whatsapp, industry, is_exhibiting, has_distributor,
        support_needs, timeline, additional_notes, source_url
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    `;
    const params = [
      lead.id,
      lead.submittedAt,
      lead.companyName,
      lead.website || null,
      lead.country,
      lead.contactPerson,
      lead.jobTitle || null,
      lead.email,
      lead.whatsapp,
      lead.industry,
      lead.isExhibiting,
      lead.hasDistributor,
      lead.supportNeeds,
      lead.timeline,
      lead.additionalNotes || null,
      lead.sourceUrl || null,
    ];

    await sql.query(query, params);
    console.log(`[Neon DB] Successfully stored lead ${lead.id}`);
    return true;
  } catch (err) {
    console.error("[Neon DB Insert Error]:", err);
    return false;
  }
}

export async function getLeadsFromNeon() {
  const sql = getDb();
  if (!sql) return null;

  try {
    const rows = await sql.query(`
      SELECT 
        id, 
        submitted_at as "submittedAt", 
        company_name as "companyName", 
        website, 
        country, 
        contact_person as "contactPerson", 
        job_title as "jobTitle", 
        email, 
        whatsapp, 
        industry, 
        is_exhibiting as "isExhibiting", 
        has_distributor as "hasDistributor", 
        support_needs as "supportNeeds", 
        timeline, 
        additional_notes as "additionalNotes", 
        source_url as "sourceUrl"
      FROM leads 
      ORDER BY submitted_at DESC
    `);
    return rows;
  } catch (err) {
    console.error("[Neon DB Fetch Error]:", err);
    return null;
  }
}
