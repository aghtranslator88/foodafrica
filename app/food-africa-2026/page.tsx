import React from "react";
import Link from "next/link";
import { EVENT_DETAILS, PACKAGES, FAQS } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import Timeline from "@/components/Timeline";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeader from "@/components/SectionHeader";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export const metadata = {
  title: "Food Africa 2026 Exhibition Support in Egypt | Globalize",
  description:
    "Professional interpreters, exhibition staff, buyer outreach, business development and local business support for international exhibitors at Food Africa 2026 in Cairo.",
};

export default function FoodAfricaCampaignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================ */}
      {/* 1. CONVERSION HERO */}
      {/* ============================================================ */}
      <section className="relative bg-[#092B72] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b-4 border-[#FFC120]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0838A1] border border-[#FFC120]/40 text-xs font-black uppercase tracking-widest text-[#FFC120]">
              <Calendar className="w-3.5 h-3.5" />
              <span>FOOD AFRICA 2026 • EXHIBITOR SUPPORT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-tight">
              YOUR LOCAL TEAM IN CAIRO.
            </h1>

            <p className="text-lg sm:text-xl text-[#FFC120] font-bold max-w-2xl mx-auto">
              From preparation to exhibition support to post-show business development.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 px-4 py-2 rounded-lg border border-white/15">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#FFC120]" />
                {EVENT_DETAILS.dates}
              </span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FFC120]" />
                EIEC, Cairo, Egypt
              </span>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#lead-form"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FFC120] hover:bg-[#FFC120]/90 text-[#092B72] font-black text-base uppercase tracking-tight rounded-md shadow-lg transition-all text-center"
              >
                GET MY SUPPORT PLAN
              </a>
              <WhatsAppButton
                variant="outline"
                size="md"
                label="DIRECT WHATSAPP INQUIRY"
              />
            </div>

            <p className="text-xs text-slate-300">
              ⚡ Guaranteed response within 4 hours • Flexible daily booking options from $180/day
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHY INTERNATIONAL EXHIBITORS NEED LOCAL SUPPORT */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-[#F8FAEC] border-b border-[#E2E8F0]">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            eyebrow="Exhibition Reality Check"
            headline="WHY INTERNATIONAL EXHIBITORS NEED LOCAL SUPPORT IN CAIRO"
            supportingText="Over 65% of international food exhibitors leave Cairo trade shows with business cards they cannot convert. Here is why:"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#092B72]">Arabic Negotiation Gap</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Egyptian wholesale buyers and commercial importers often prefer discussing volume discounts, payment schedules, and shipping terms in Arabic. Without a local specialist, negotiations stall.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#092B72]">Unvetted Booth Traffic</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Food Africa draws vast consumer footfall. Your international executives need local staff on the booth perimeter to screen genuine high-volume buyers from casual passers-by.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#092B72]">The Post-Show Void</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Once you return to headquarters, email communications with Egyptian prospects typically see low responsiveness. A local Cairo team keeps physical momentum alive until orders are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHAT GLOBALIZE PROVIDES */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            eyebrow="On-The-Ground Solution"
            headline="WHAT GLOBALIZE PROVIDES AT FOOD AFRICA"
            supportingText="A cohesive squad of commercial interpreters, booth assistants, and market development professionals representing your brand."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Bilingual Interpreters", desc: "Native Arabic and English fluent commercial interpreters." },
              { title: "Booth Assistants & Hosts", desc: "Professional staff welcoming guests, taking notes, and distributing brochures." },
              { title: "Buyer Matchmaking", desc: "Pre-scheduling verified Egyptian importers to meet at your booth." },
              { title: "Decision-Maker Vetting", desc: "Qualifying trade visitors instantly so your team focuses on real buyers." },
              { title: "Contract Negotiation Support", desc: "Assisting your team in navigating local commercial customs." },
              { title: "Cairo Post-Show Follow-Up", desc: "Active local follow-up calls and meetings to convert exhibition leads." },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border border-[#E2E8F0] bg-[#F8FAEC] space-y-2 hover:border-[#0838A1] transition-colors"
              >
                <span className="text-xs font-black text-[#0838A1]">CAPABILITY 0{idx + 1}</span>
                <h3 className="text-base font-bold text-[#092B72]">{item.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. BEFORE / DURING / AFTER */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-[#F8FAEC] border-y border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Complete Exhibition Lifecycle"
            headline="BEFORE, DURING, AND AFTER FOOD AFRICA"
            supportingText="We provide end-to-end commercial coverage so that no lead slips through the cracks."
          />
          <Timeline />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. BUYER & DISTRIBUTOR OUTREACH */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest bg-[#EEF3FF] text-[#0838A1] px-3 py-1 rounded-full">
            Active Business Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#092B72] font-display uppercase">
            DON&apos;T WAIT FOR BUYERS TO FIND YOU.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Our Business and Partner tiers initiate direct contact with relevant Egyptian food importers, wholesalers, and supermarket category buyers weeks before the exhibition starts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-4 text-xs font-bold uppercase tracking-wider text-[#092B72]">
            <div className="p-3 bg-[#F8FAEC] border border-[#E2E8F0] rounded">01 RESEARCH</div>
            <div className="p-3 bg-[#F8FAEC] border border-[#E2E8F0] rounded">02 QUALIFICATION</div>
            <div className="p-3 bg-[#F8FAEC] border border-[#E2E8F0] rounded">03 OUTREACH</div>
            <div className="p-3 bg-[#F8FAEC] border border-[#E2E8F0] rounded">04 MEETINGS</div>
            <div className="p-3 bg-[#0838A1] text-white border border-[#0838A1] rounded">05 FOLLOW-UP</div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. REMOTE EGYPT SUPPORT (HIGHLIGHT) */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#092B72] text-white">
        <div className="container-custom max-w-4xl text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest bg-[#FFC120] text-[#092B72] px-3 py-1 rounded-full">
            Remote Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
            NOT TRAVELING TO CAIRO IN PERSON?
          </h2>
          <p className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Globalize can manage your booth presence, present your product catalogs and samples, qualify attendees, and arrange remote video meetings for your export directors back home.
          </p>
          <div className="pt-2">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFC120] text-[#092B72] font-black text-sm uppercase rounded hover:bg-[#FFC120]/90 transition-all shadow"
            >
              <span>Discuss Remote Booth Execution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CASE STUDY SNIPPET */}
      {/* ============================================================ */}
      <section className="py-14 bg-[#F8FAEC] border-b border-[#E2E8F0]">
        <div className="container-custom max-w-3xl text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#0838A1]">
            Proven Track Record
          </span>
          <h3 className="text-2xl font-black text-[#092B72] font-display">
            HOW WE SUPPORTED AN INDIAN FOOD EXPORTER AT FOOD AFRICA
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Provided on-site commercial interpretation, buyer communication, meeting coordination, and active post-show local follow-up that bridged the gap between visiting Cairo and securing long-term business relationships.
          </p>
          <Link
            href="/case-study"
            className="text-xs font-bold text-[#0838A1] hover:underline inline-flex items-center gap-1"
          >
            <span>Read full case study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. PACKAGES */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white" id="packages">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Transparent Options"
            headline="CHOOSE YOUR LEVEL OF SUPPORT"
            supportingText="Reserve your preferred tier early before show calendars reach capacity."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. FAQ ACCORDION */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-[#F8FAEC] border-y border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Exhibitor Queries"
            headline="FREQUENTLY ASKED QUESTIONS"
            supportingText="Common operational questions from international food exhibitors visiting Cairo."
          />
          <FAQAccordion limit={8} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. LEAD GENERATION FORM (EMBEDDED FOR CONVERSION) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white" id="lead-form">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#0838A1] bg-[#EEF3FF] px-3.5 py-1 rounded-full">
              Fast-Track Plan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#092B72] font-display uppercase">
              GET YOUR FOOD AFRICA 2026 SUPPORT PLAN
            </h2>
            <p className="text-sm text-[#475569] max-w-xl mx-auto">
              Tell us your booth specifications, product category, and staffing requirements. We will prepare your customized operational proposal.
            </p>
          </div>

          <React.Suspense fallback={<div className="p-8 text-center bg-white rounded-xl">Loading form...</div>}>
            <LeadForm />
          </React.Suspense>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FINAL CTA BAR */}
      {/* ============================================================ */}
      <section className="py-14 bg-[#092B72] text-white text-center border-t-4 border-[#FFC120]">
        <div className="container-custom max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display uppercase">
            SECURE YOUR CAIRO GROUND TEAM TODAY
          </h2>
          <p className="text-sm text-slate-200">
            High-caliber bilingual food trade specialists are limited during show dates. Book early to guarantee team placement.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#lead-form"
              className="w-full sm:w-auto px-6 py-3 bg-[#FFC120] text-[#092B72] font-black text-sm uppercase rounded shadow hover:bg-[#FFC120]/90 transition-all"
            >
              COMPLETE SUPPORT REQUEST
            </a>
            <WhatsAppButton variant="outline" size="md" label="WHATSAPP ADVISOR" />
          </div>
        </div>
      </section>
    </div>
  );
}
