import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Food Business Development in Egypt | Globalize Group Cairo",
  description:
    "Develop food and agricultural business in Egypt without building a local team from scratch. Prospect identification, distributor communication, and pipeline reporting.",
};

export default function BusinessDevelopmentPage() {
  const bdevServices = [
    { title: "Prospect Identification", desc: "Systematic mapping of commercial food importers, processors, and distributors across Egypt." },
    { title: "Cold Outreach & Introductions", desc: "Culturally refined, executive-level introductions conducted directly in Arabic by our Cairo team." },
    { title: "Business Communication Liaison", desc: "Acting as your bilingual commercial bridge, managing inquiries, RFQs, and pricing clarifications." },
    { title: "Meeting Coordination", desc: "Setting up and facilitating high-level executive meetings either at trade shows or in private commercial offices." },
    { title: "Distributor Communication", desc: "Negotiating distribution terms, minimum order quantities (MOQs), exclusivity parameters, and territorial coverage." },
    { title: "Opportunity Qualification", desc: "Separating serious buyers ready to open Letters of Credit (LCs) from casual sample collectors." },
    { title: "Commercial Follow-Up", desc: "Relentless in-country follow-up to keep your proposals at the top of the buyer's procurement queue." },
    { title: "Executive Pipeline Reporting", desc: "Weekly structured CRM reports detailing lead status, feedback, pricing reactions, and next steps." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 04 • Food Africa 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            DEVELOP BUSINESS IN EGYPT
            <br />
            <span className="text-[#FFC120]">WITHOUT BUILDING A TEAM FROM SCRATCH.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Gain immediate commercial traction in Egypt. We act as your on-the-ground business development engine, prospecting importers, arranging meetings, and managing commercial dialogues while you direct strategy from your home office.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=business-dev" variant="primary" size="lg">
              DISCUSS BUSINESS DEVELOPMENT
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="TALK TO A BUSINESS ADVISOR" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Commercial Engine"
            headline="END-TO-END BUSINESS DEVELOPMENT SUITE"
            supportingText="A complete commercial execution capability operating on your behalf in Cairo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bdevServices.map((srv) => (
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
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            ACCELERATE YOUR EGYPTIAN SALES PIPELINE
          </h2>
          <p className="text-sm text-slate-200">
            Learn how our business development tier pairs with Food Africa 2026 for maximum return on investment.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan?service=business-dev" variant="primary" size="md">
              DISCUSS BUSINESS DEVELOPMENT
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
