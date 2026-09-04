import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, Languages, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Commercial Exhibition Interpreters in Egypt | Food Africa 2026",
  description:
    "Native Arabic and multilingual commercial interpreters for international food exhibitors at Food Africa 2026 in Cairo. Business negotiation, product discussions, and visitor engagement.",
};

export default function ExhibitionInterpretersPage() {
  const capabilities = [
    { title: "Native Arabic Interpretation", desc: "Fluent, culturally nuanced Arabic communication that builds instant trust with Egyptian importers and wholesalers." },
    { title: "Multilingual Capability", desc: "Specialists fluent in Arabic, English, French, and other key trading languages." },
    { title: "Product Technical Discussions", desc: "Bilingual briefing on your food specs, shelf-life, ingredients, and packaging formats." },
    { title: "Business Negotiation Support", desc: "Navigating commercial trade terms, pricing dialogues, CIF/FOB terms, and volume orders." },
    { title: "Booth Visitor Engagement", desc: "Welcoming trade visitors and capturing buyer intent without conversational lag." },
    { title: "Meeting Support", desc: "Accompanying your executives in high-stakes bilateral meetings at the EIEC VIP salons." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 01 • Food Africa 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            MORE THAN TRANSLATION.
            <br />
            <span className="text-[#FFC120]">BUSINESS COMMUNICATION.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Our commercial interpreters help international food exhibitors communicate naturally with Egyptian buyers, distributors, and visitors — turning casual inquiries into qualified commercial negotiations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=interpreters" variant="primary" size="lg">
              BOOK AN INTERPRETER
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="CHECK INTERPRETER AVAILABILITY" />
          </div>

          <p className="text-xs text-slate-300">
            Rates starting from $180/day per specialist • Available for full 4-day show or specific days
          </p>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Commercial Depth"
            headline="BRIDGING THE ARABIC COMMERCE GAP"
            supportingText="A standard language translator repeats words. A Globalize commercial interpreter understands wholesale food trade dynamics in Egypt."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-2 hover:border-[#0838A1] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#092B72]">{cap.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] space-y-4">
            <h3 className="text-xl font-bold text-[#092B72]">Pre-Show Technical Product Briefing</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Prior to Day 1 of Food Africa, your assigned interpreter conducts a dedicated video briefing with your export team. We review your product catalog, ingredient specifications, pricing boundaries, and preferred target buyer criteria. When your booth opens at EIEC, our specialist speaks your industry&apos;s language fluently in Arabic.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            SECURE YOUR FOOD AFRICA INTERPRETER
          </h2>
          <p className="text-sm text-slate-200">
            Interpreter bookings fill rapidly 60 days before the exhibition. Reserve your specialist now.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <CTAButton href="/get-support-plan?service=interpreters" variant="primary" size="md">
              BOOK AN INTERPRETER
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
