import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "How It Works | Food Africa 2026 Support Process | Globalize",
  description:
    "From first contact to first opportunity. Our 5-step strategic operational blueprint for supporting international exhibitors at Food Africa 2026 in Cairo.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Tell Us What You Need",
      desc: "Share your booth details, food product line, target buyer profiles, and language requirements through our simple assessment form or on WhatsApp.",
      action: "Initial consultation & requirements audit",
    },
    {
      num: "02",
      title: "We Build Your Support Plan",
      desc: "Within 4 business hours, our Cairo directors formulate a tailored staffing, interpretation, or business development plan with clear daily rates.",
      action: "Transparent proposal & scope alignment",
    },
    {
      num: "03",
      title: "We Prepare Your Egypt Team",
      desc: "We assign vetted commercial specialists matched to your food sector and conduct dedicated pre-show briefing sessions on your catalogs, pricing, and goals.",
      action: "Catalog review & terminology briefing",
    },
    {
      num: "04",
      title: "We Support You On the Ground",
      desc: "During Food Africa 2026 (7–10 Dec) at EIEC, our team is present on-site at your booth: greeting buyers, translating negotiations, and vetting prospects.",
      action: "Live exhibition execution & buyer hosting",
    },
    {
      num: "05",
      title: "We Follow Up After the Exhibition",
      desc: "We consolidate leads, initiate prompt Arabic phone calls, coordinate sample dispatches, and follow up with serious importers to convert interest into contracts.",
      action: "Cairo HQ follow-up & pipeline conversion",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Operational Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            FROM FIRST CONTACT
            <br />
            <span className="text-[#FFC120]">TO FIRST OPPORTUNITY.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            A proven 5-step operational blueprint ensuring international exhibitors at Food Africa 2026 operate with complete confidence on the ground in Cairo.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <CTAButton href="/get-support-plan" variant="primary" size="lg">
              START MY PLAN
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-4xl space-y-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <div className="w-16 h-16 rounded-xl bg-[#092B72] text-[#FFC120] font-black text-2xl font-display flex items-center justify-center shrink-0">
                {step.num}
              </div>

              <div className="space-y-2 flex-grow">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0838A1]">
                  {step.action}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#092B72] font-display">
                  {step.title}
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            READY TO PREPARE YOUR FOOD AFRICA PRESENCE?
          </h2>
          <p className="text-sm text-slate-200">
            Tell us what support you need and we will have your custom plan formulated within hours.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan" variant="primary" size="md">
              START MY PLAN
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
