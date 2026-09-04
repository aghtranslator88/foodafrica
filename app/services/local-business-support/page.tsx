import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Local Business Support in Egypt | Globalize Group Cairo",
  description:
    "Your dedicated local team in Cairo without establishing an office or hiring full-time employees. Ongoing commercial coordination, market research, and distributor liaison in Egypt.",
};

export default function LocalBusinessSupportPage() {
  const localServices = [
    { title: "Local Commercial Coordination", desc: "A bilingual Cairo-based coordinator managing local communication and partner requests." },
    { title: "Targeted Market Research", desc: "Field analysis on local retail pricing, competing imported brands, and consumer preferences." },
    { title: "Bilingual Communication Hub", desc: "Professional handling of Arabic inquiries, technical queries, and commercial correspondence." },
    { title: "Ongoing Buyer Outreach", desc: "Continuous identification and pitching to new regional food and beverage buyers." },
    { title: "Distributor Communication & Audits", desc: "Regular contact with your local distributors to monitor sales activity and pipeline." },
    { title: "Bilateral Meeting Facilitation", desc: "Coordinating and hosting commercial meetings with stakeholders across Greater Cairo." },
    { title: "Food Africa 2026 Representation", desc: "Full planning, execution, and staffing for Food Africa and other regional trade fairs." },
    { title: "Executive Reporting & Governance", desc: "Structured weekly and monthly briefings with your international board or export director." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 06 • Ongoing Partner Model
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            YOUR LOCAL TEAM IN EGYPT.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            For international food enterprises that want to explore, develop, and scale within the Egyptian market without immediately establishing an overseas office or hiring full-time local staff.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=local-support" variant="primary" size="lg">
              DISCUSS LOCAL SUPPORT
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="CHAT WITH CAIRO TEAM" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Turnkey Presence"
            headline="FULL-SPECTRUM LOCAL COORDINATION"
            supportingText="We provide the operational presence, local knowledge, and commercial bandwidth in Egypt so your home office stays lean."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localServices.map((srv) => (
              <div
                key={srv.title}
                className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-2 hover:border-[#0838A1] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#092B72]">{srv.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#EEF3FF] p-8 rounded-xl border border-[#0838A1]/20 space-y-3 text-sm text-[#475569]">
            <h4 className="text-base font-bold text-[#092B72] uppercase tracking-wide">
              Important Scope Notice
            </h4>
            <p className="leading-relaxed">
              Globalize provides specialized business support, commercial coordination, translation, and local operational services. We do not act as statutory legal commercial agents, tax representatives, or legal counsel. Our services focus on practical commercial execution and market facilitation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            EXPLORE A MONTHLY PARTNERSHIP IN EGYPT
          </h2>
          <p className="text-sm text-slate-200">
            Learn how our monthly retainer tier gives you full-time Cairo presence for a fraction of traditional expansion costs.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan?service=local-support" variant="primary" size="md">
              DISCUSS LOCAL SUPPORT
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
