import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, X, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Why Globalize | The Egypt Ground Partner Difference",
  description:
    "Being in Egypt is different from understanding Egypt. Compare what Globalize provides versus a standard translation agency or temporary staffing desk.",
};

export default function WhyGlobalizePage() {
  const weAreList = [
    { title: "Bilingual Commercial Support", desc: "Professionals who understand international trade terms, MOQs, CIF pricing, and food industry terminology." },
    { title: "On-Site Business Interpretation", desc: "Native Arabic communicators who bridge cultural and commercial subtleties during high-value negotiations." },
    { title: "Local Market Coordination", desc: "Real physical presence in Cairo capable of coordinating logistics, meetings, samples, and buyer visits." },
    { title: "Active Lead Development", desc: "Vetting visitors, identifying authentic wholesale buyers, and setting scheduled appointments." },
    { title: "Systematic Post-Show Follow-Up", desc: "Dedicated local follow-up calls and meetings to convert exhibition conversations into orders." },
    { title: "Ongoing Partner Capabilities", desc: "Representing your company in Egypt over a multi-month horizon without foreign branch setup costs." },
  ];

  const weAreNotList = [
    { title: "Just a Translation Desk", desc: "We don't merely translate text or repeat phrases verbatim without business context." },
    { title: "Just Temporary Booth Staff", desc: "We don't provide passive hosts who sit behind counters handing out flyers indiscriminately." },
    { title: "Just Event Ushers", desc: "We don't treat your trade show as a 4-day temporary gig; we treat it as an international market launch." },
    { title: "Unvetted Hourly Labor", desc: "We don't outsource to random freelancers; our specialists are trained and briefed on your specific brand." },
    { title: "Disappearing After Show Day 4", desc: "We don't vanish the moment the exhibition lights turn off; we pursue your leads aggressively." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Strategic Positioning
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            BEING IN EGYPT IS DIFFERENT
            <br />
            <span className="text-[#FFC120]">FROM UNDERSTANDING EGYPT.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Exhibiting in Cairo requires more than a translator or a host. It requires a commercial partner who understands how Egyptian food importers negotiate, decide, and do business.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <CTAButton href="/get-support-plan" variant="primary" size="lg">
              GET YOUR SUPPORT PLAN
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            eyebrow="Side-By-Side Comparison"
            headline="THE GLOBALIZE ADVANTAGE"
            supportingText="Why international food brands select Globalize as their partner on the ground in Cairo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WE ARE */}
            <div className="bg-white rounded-xl border-2 border-emerald-500 p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">
                  ✓
                </span>
                <h2 className="text-2xl font-black text-[#092B72] font-display">
                  WHAT WE ARE
                </h2>
              </div>

              <ul className="space-y-4">
                {weAreList.map((item) => (
                  <li key={item.title} className="space-y-1">
                    <p className="font-bold text-sm text-[#092B72] flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.title}</span>
                    </p>
                    <p className="text-xs text-[#475569] pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* WE ARE NOT */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-black text-sm">
                  ✕
                </span>
                <h2 className="text-2xl font-black text-[#64748B] font-display">
                  WHAT WE ARE NOT
                </h2>
              </div>

              <ul className="space-y-4">
                {weAreNotList.map((item) => (
                  <li key={item.title} className="space-y-1">
                    <p className="font-bold text-sm text-[#475569] flex items-center gap-2 line-through text-slate-500">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{item.title}</span>
                    </p>
                    <p className="text-xs text-[#64748B] pl-6 leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            EXPERIENCE THE EGYPT GROUND DIFFERENCE
          </h2>
          <p className="text-sm text-slate-200">
            Join international food brands that trust Globalize to represent their interests with authority in Cairo.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan" variant="primary" size="md">
              GET YOUR FREE SUPPORT PLAN
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
