import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Post-Exhibition Lead Follow-Up in Egypt | Food Africa 2026",
  description:
    "Systematic Cairo-based lead follow-up, quotation tracking, and distributor communication after Food Africa 2026. Turn trade show contacts into signed orders.",
};

export default function PostExhibitionFollowUpPage() {
  const workflowSteps = [
    { title: "LEADS", desc: "Consolidation of all business cards, badge scans, and inquiries collected during show days." },
    { title: "QUALIFICATION", desc: "Reviewing company size, import license validity, and specific product requirements." },
    { title: "CONTACT", desc: "Direct Arabic phone calls and tailored email introductions from our Cairo office." },
    { title: "MEETING", desc: "Arranging second-round commercial discussions or video calls with your international directors." },
    { title: "QUOTATION", desc: "Presenting your CIF Alexandria/Sokhna pricing sheets, payment terms, and specs." },
    { title: "FOLLOW-UP", desc: "Persistent, professional follow-up calls ensuring offers are evaluated by decision-makers." },
    { title: "OPPORTUNITY", desc: "Finalizing commercial contracts, trial container orders, and long-term supply agreements." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 05 • Food Africa 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            THE EXHIBITION ENDS.
            <br />
            <span className="text-[#FFC120]">THE BUSINESS DOESN&apos;T.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Most exhibition leads fail to convert simply because foreign teams lose momentum after flying home. Globalize maintains local Cairo presence, actively pursuing and converting your Food Africa contacts into signed commercial contracts.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=follow-up" variant="primary" size="lg">
              CONTINUE MY FOLLOW-UP
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="DISCUSS LEAD CONVERSION" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Conversion Funnel"
            headline="THE 7-STAGE POST-SHOW CONVERSION WORKFLOW"
            supportingText="A disciplined pipeline preventing your exhibition leads from fading away."
          />

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-white p-4 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-black text-[#0838A1] block">
                    STEP 0{idx + 1}
                  </span>
                  <h3 className="text-xs font-black text-[#092B72] font-display uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#475569] leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] space-y-3">
            <h3 className="text-lg font-bold text-[#092B72]">Why Local Cairo Follow-Up Succeeds</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Egyptian commercial managers receive hundreds of generic marketing emails daily. When a local Egyptian phone call is placed from Cairo referencing their exact conversation at Food Africa, response rates increase dramatically. We handle language barriers, sample delivery logistics, and commercial clarifications on the ground.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            DON&apos;T LET YOUR FOOD AFRICA LEADS GO COLD
          </h2>
          <p className="text-sm text-slate-200">
            Book our post-show follow-up package before the exhibition begins to ensure seamless continuity.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan?service=follow-up" variant="primary" size="md">
              CONTINUE MY FOLLOW-UP
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
