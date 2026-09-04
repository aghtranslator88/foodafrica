import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, ArrowRight, ShieldCheck, Building, Globe, Target } from "lucide-react";

export const metadata = {
  title: "Case Study: Supporting an Indian Food Exporter at Food Africa | Globalize",
  description:
    "How Globalize supported an Indian food exporter at Food Africa in Cairo: transitioning from on-site Arabic interpretation to an ongoing local business support partner.",
};

export default function CaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Exhibition Case Study
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            SUPPORTING AN INDIAN FOOD EXPORTER AT FOOD AFRICA
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            How a standard on-site Arabic interpretation engagement evolved into a trusted, long-term commercial business support partnership in Egypt.
          </p>
          <div className="pt-2">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FFC120] border border-[#FFC120]/40 px-3 py-1 rounded">
              Positioning: From Interpreter to Business Support Partner
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-4xl space-y-12">
          {/* Section 1: Client Profile */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0838A1]">
              01 • Profile
            </span>
            <h2 className="text-2xl font-black text-[#092B72] font-display">Client Profile</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              An established Indian agricultural and food export enterprise specializing in bulk commodities and packaged goods, participating as an international exhibitor at Food Africa in Cairo to explore direct commercial relationships with Egyptian importers and regional wholesalers.
            </p>
          </div>

          {/* Section 2: Challenge */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0838A1]">
              02 • Background & Challenge
            </span>
            <h2 className="text-2xl font-black text-[#092B72] font-display">The Challenge</h2>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>The client&apos;s travelling executive delegation spoke English and Hindi, with zero native Arabic proficiency.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>Egyptian trade visitors varied widely from high-volume supermarket buyers to casual attendees, demanding real-time commercial qualification.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>The company had no physical entity or staff in Cairo to follow up on negotiations once the 4-day exhibition concluded.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Support Required */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0838A1]">
              03 • Scope of Engagement
            </span>
            <h2 className="text-2xl font-black text-[#092B72] font-display">Support Required</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              The client initially sought an Arabic commercial interpreter for booth representation. However, preliminary briefing sessions revealed the need for complete business communication and on-the-ground coordination.
            </p>
          </div>

          {/* Section 4: What Globalize Provided */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0838A1]">
              04 • Execution Suite
            </span>
            <h2 className="text-2xl font-black text-[#092B72] font-display">What Globalize Provided</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#092B72] font-semibold">
              <div className="p-3 bg-[#EEF3FF] rounded border border-[#0838A1]/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>On-site commercial Arabic interpretation</span>
              </div>
              <div className="p-3 bg-[#EEF3FF] rounded border border-[#0838A1]/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bilingual business trade communication</span>
              </div>
              <div className="p-3 bg-[#EEF3FF] rounded border border-[#0838A1]/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Customer interaction & product presentation</span>
              </div>
              <div className="p-3 bg-[#EEF3FF] rounded border border-[#0838A1]/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Meeting facilitation & negotiation assistance</span>
              </div>
              <div className="p-3 bg-[#EEF3FF] rounded border border-[#0838A1]/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>On-the-ground operational coordination</span>
              </div>
              <div className="p-3 bg-[#EEF3FF] rounded border border-[#0838A1]/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Post-show local business development support</span>
              </div>
            </div>
          </div>

          {/* Section 5: On-Ground Execution & Outcome */}
          <div className="bg-[#092B72] text-white rounded-xl p-8 sm:p-10 shadow-lg space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFC120]">
              05 • Result & Long-Term Partnership
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
              The Outcome: From One Show to Local Continuity
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              By having dedicated Globalize specialists at the booth, language was removed as a barrier. Serious Egyptian buyers received immediate technical answers in their native language, and meeting notes were recorded systematically.
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              Following the event, rather than letting leads turn cold, the client engaged Globalize to conduct ongoing follow-up calls, coordinate sample testing deliveries in Cairo, and liaise with prospective distributors. The client effectively gained a local business arm in Egypt without establishing a corporate entity.
            </p>
          </div>

          <div className="text-center pt-4">
            <CTAButton href="/get-support-plan" variant="primary" size="lg">
              REQUEST SIMILAR EXHIBITOR SUPPORT
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
