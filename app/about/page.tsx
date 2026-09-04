import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, Award, Globe, Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Globalize Group | Cairo Business Support & Localization",
  description:
    "Globalize helps international businesses communicate, operate, and grow in Egypt. From certified translation and commercial interpretation to on-the-ground business support.",
};

export default function AboutPage() {
  const coreCompetencies = [
    { title: "Translation & Localization", desc: "Expert food product packaging, labeling, nutrition facts, and legal compliance localization for the Egyptian and MENA markets." },
    { title: "Commercial Interpretation", desc: "Native Arabic interpreters specializing in international trade exhibitions, high-level business negotiations, and bilateral delegations." },
    { title: "Multilingual Business Support", desc: "Comprehensive on-the-ground operational, secretarial, and meeting management in Cairo." },
    { title: "Market Coordination & Development", desc: "Connecting foreign producers and FMCG exporters with legitimate Egyptian wholesale importers and distribution channels." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-16 sm:py-24 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            About Globalize Group
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            GLOBALIZE HELPS BUSINESSES
            <br />
            <span className="text-[#FFC120]">COMMUNICATE, OPERATE AND GROW.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Cairo, Egypt, Globalize Group combines deep linguistic excellence with pragmatic on-the-ground commercial execution for multinational companies entering Egypt.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-4xl space-y-12">
          {/* Evolution block */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#0838A1] bg-[#EEF3FF] px-3 py-1 rounded">
              Strategic Evolution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B72] font-display">
              FROM LANGUAGE SUPPORT TO ON-THE-GROUND BUSINESS SUPPORT.
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Globalize was established with a clear mission: remove linguistic, operational, and commercial barriers between foreign businesses and the Egyptian marketplace. While our foundational expertise spans certified translation, technical localization, and simultaneous interpretation, our clients repeatedly asked for more: &ldquo;Can you follow up with this distributor? Can you manage our booth at the exhibition? Can you represent us at meetings in Cairo?&rdquo;
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              Today, Globalize is the trusted ground partner for international food exporters participating in major trade shows like Food Africa, providing end-to-end commercial assistance that transforms one-time exhibition visits into lasting regional distribution contracts.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#092B72]">Our Core Pillars</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreCompetencies.map((comp) => (
                <div
                  key={comp.title}
                  className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#092B72]">{comp.title}</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#092B72] text-white text-center">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            MEET OUR CAIRO GROUND TEAM
          </h2>
          <p className="text-sm text-slate-200">
            Discuss how Globalize can support your international food brand at Food Africa 2026.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <CTAButton href="/contact" variant="primary" size="md">
              CONTACT OUR TEAM
            </CTAButton>
            <WhatsAppButton variant="outline" size="md" label="WHATSAPP OUR DIRECTORS" />
          </div>
        </div>
      </section>
    </div>
  );
}
