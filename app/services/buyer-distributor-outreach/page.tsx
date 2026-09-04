import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Search, CheckCircle2, Calendar, PhoneCall, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Egyptian Buyer & Distributor Outreach | Food Africa 2026",
  description:
    "Pre-show and during-show commercial outreach to qualified Egyptian food importers, wholesalers, and retail distributors for Food Africa exhibitors.",
};

export default function BuyerDistributorOutreachPage() {
  const steps = [
    { num: "01", title: "RESEARCH", icon: Search, desc: "We map verified Egyptian food importers, regional wholesalers, and supermarket category buyers matching your product category." },
    { num: "02", title: "QUALIFICATION", icon: CheckCircle2, desc: "We screen companies for legitimate import licensing, distribution scale, storage capacity, and financial reputation." },
    { num: "03", title: "OUTREACH", icon: PhoneCall, desc: "Our Cairo business development team contacts decision-makers in Arabic, introducing your export catalog and credentials." },
    { num: "04", title: "MEETING ARRANGEMENT", icon: Calendar, desc: "We schedule guaranteed 1-on-1 commercial meetings directly at your Food Africa booth during show dates." },
    { num: "05", title: "FOLLOW-UP", icon: Target, desc: "Post-meeting communication, catalog dispatches, and quotation tracking to advance commercial orders." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Service Track 03 • Food Africa 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            DON&apos;T WAIT FOR BUYERS TO FIND YOU.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Passive booth hosting leaves your exhibition ROI to chance. Globalize proactively identifies, vets, and invites legitimate Egyptian importers and distributors to scheduled commercial meetings at your booth.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <CTAButton href="/get-support-plan?service=outreach" variant="primary" size="lg">
              FIND MY EGYPTIAN BUYERS
            </CTAButton>
            <WhatsAppButton variant="outline" size="lg" label="DISCUSS TARGET BUYERS" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-12">
          <SectionHeader
            eyebrow="Structured Process"
            headline="FIVE-STAGE OUTREACH METHODOLOGY"
            supportingText="Our Cairo team begins working weeks before Food Africa opens to ensure your show calendar is booked with verified decision-makers."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-black text-[#FFC120] bg-[#092B72] px-2 py-0.5 rounded inline-block">
                      {st.num}
                    </span>
                    <Icon className="w-6 h-6 text-[#0838A1]" />
                    <h3 className="text-base font-black text-[#092B72] font-display">{st.title}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#EEF3FF] p-8 rounded-xl border border-[#0838A1]/20 space-y-3">
            <h3 className="text-xl font-bold text-[#092B72]">Who Are We Reaching Out To?</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              We focus strictly on senior decision-makers: Managing Directors, Head of Imports, Procurement Directors, and Category Managers at FMCG distributors, wholesale trading companies, and major retail chains throughout Greater Cairo, Alexandria, and Upper Egypt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            TARGET YOUR EGYPTIAN BUYERS NOW
          </h2>
          <p className="text-sm text-slate-200">
            Pre-show outreach campaigns take 3 to 4 weeks to execute properly. Initiate your buyer research early.
          </p>
          <div className="pt-2 flex justify-center">
            <CTAButton href="/get-support-plan?service=outreach" variant="primary" size="md">
              FIND MY EGYPTIAN BUYERS
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
