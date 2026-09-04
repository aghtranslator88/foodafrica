import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Egypt Food Market Entry & Commercial Facilitation | Globalize",
  description:
    "Explore and develop the 100M+ Egyptian consumer market with on-the-ground commercial coordination. Market research, buyer identification, and distributor outreach.",
};

export default function EgyptMarketEntryPage() {
  const entryServices = [
    { title: "Market Research & Pricing Audits", desc: "Understanding domestic Egyptian competitor pricing, customs duties, retail channels, and consumer habits." },
    { title: "Local Commercial Communication", desc: "Professional Arabic trade correspondence, catalog translations, and technical compliance liaisons." },
    { title: "Buyer & Wholesaler Identification", desc: "Connecting directly with established regional food brokers, distributors, and supermarket groups." },
    { title: "Distributor Outreach & Screening", desc: "Assessing local distributors by warehouse infrastructure, cold-chain logistics, and sales territory." },
    { title: "Executive Business Meetings", desc: "Arranging structured bilateral exploratory meetings with Egyptian commercial stakeholders." },
    { title: "On-the-Ground Coordination", desc: "Managing physical sample dispatches, courier handoffs, and verification of local business premises." },
    { title: "Ongoing Market Support", desc: "Continuous commercial monitoring and communication liaison without foreign entity registration." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 07 • Market Entry
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            EXPLORE THE EGYPTIAN MARKET
            <br />
            <span className="text-[#FFC120]">WITH PEOPLE ON THE GROUND.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Egypt is the Middle East and North Africa&apos;s largest consumer food market with over 105 million residents. Enter the market strategically with trusted local business support, verified buyer networks, and zero wasted capital.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=market-entry" variant="primary" size="lg">
              EXPLORE EGYPT MARKET ENTRY
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="DISCUSS MARKET POTENTIAL" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Market Strategy"
            headline="STRUCTURED MARKET ENTRY SERVICES"
            supportingText="We provide the intelligence, contacts, and communication infrastructure needed to test and validate your products in Egypt."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entryServices.map((srv) => (
              <div
                key={srv.title}
                className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-2 hover:border-[#0838A1] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#092B72]">{srv.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#EEF3FF] p-6 rounded-xl border border-[#0838A1]/20 text-xs text-[#475569] leading-relaxed">
            * Operational Notice: Our services assist international companies in commercial exploration, buyer introductions, and communication. We do not provide formal legal representation or act as statutory commercial agents.
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            PLAN YOUR ENTRY INTO EGYPT
          </h2>
          <p className="text-sm text-slate-200">
            Combine Food Africa 2026 participation with a targeted market entry exploration plan.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan?service=market-entry" variant="primary" size="md">
              EXPLORE EGYPT MARKET ENTRY
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
