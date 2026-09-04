import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Exhibition Staffing & Booth Teams in Egypt | Food Africa 2026",
  description:
    "Professional booth assistants, coordinators, brand ambassadors, and sales staff for international exhibitors at Food Africa 2026 in Cairo.",
};

export default function ExhibitionStaffingPage() {
  const staffRoles = [
    { title: "Booth Assistants", desc: "Friendly, polished bilingual assistants to welcome visitors, hand out product samples, and manage attendee traffic." },
    { title: "Exhibition Coordinators", desc: "Senior operational leads who handle booth logistics, appointment schedules, and daily vendor interactions." },
    { title: "Brand Representatives", desc: "Impeccably presented brand ambassadors who reflect your corporate identity and values." },
    { title: "Sales Assistants", desc: "Commercial assistants trained to explain product benefits, take order inquiries, and record buyer requirements." },
    { title: "Lead Generation Staff", desc: "Active badge scanners and card collectors who screen and document decision-maker details." },
    { title: "Product Presenters", desc: "Specialists trained to demonstrate food packaging, taste-testing sessions, or culinary applications on-site." },
    { title: "Customer Support Staff", desc: "On-the-ground support managing booth tidiness, supply replenishment, and visitor follow-up logs." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 02 • Food Africa 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            BUILD YOUR EXHIBITION TEAM IN EGYPT.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Staff your Food Africa booth with vetted, bilingual exhibition professionals without the cost and logistical complexity of flying an extensive team to Cairo.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=staffing" variant="primary" size="lg">
              BUILD MY TEAM
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="DISCUSS STAFFING REQUIREMENTS" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Specialized Roles"
            headline="ROLES WE DEPLOY AT FOOD AFRICA"
            supportingText="Choose the exact blend of operational, commercial, and hospitality roles needed for your booth configuration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-2 hover:border-[#0838A1] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#092B72]">{role.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            RESERVE YOUR BOOTH TEAM TODAY
          </h2>
          <p className="text-sm text-slate-200">
            Tell us your stand number, hall location, and required dates (7–10 December 2026).
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan?service=staffing" variant="primary" size="md">
              BUILD MY TEAM
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
