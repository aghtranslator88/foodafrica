import React from "react";
import SectionHeader from "@/components/SectionHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FAQS } from "@/lib/constants";
import { MessageSquare, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Exhibitor FAQ | Food Africa 2026 Support Questions | Globalize",
  description:
    "Frequently asked questions by international exhibitors at Food Africa 2026. Staffing rates, Arabic interpreters, buyer matchmaking, and remote booth management in Cairo.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Exhibitor Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Everything international companies need to know about staffing, interpretation, buyer outreach, and business support at Food Africa 2026 in Cairo.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-4xl">
          <FAQAccordion items={FAQS} />

          <div className="mt-14 bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm text-center space-y-4 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#EEF3FF] text-[#0838A1] mx-auto flex items-center justify-center font-bold">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#092B72]">Have a Specific Operational Question?</h3>
            <p className="text-sm text-[#475569]">
              Our Cairo team is available directly on WhatsApp to provide immediate clarification regarding your booth requirements.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <WhatsAppButton variant="solid" size="md" label="ASK VIA WHATSAPP" />
              <CTAButton href="/contact" variant="outline" size="md">
                SUBMIT AN INQUIRY
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
