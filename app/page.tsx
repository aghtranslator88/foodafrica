import React from "react";
import Link from "next/link";
import { EVENT_DETAILS, PACKAGES, CONTACT_INFO } from "@/lib/constants";
import ServiceGrid from "@/components/ServiceGrid";
import Timeline from "@/components/Timeline";
import PricingCard from "@/components/PricingCard";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeader from "@/components/SectionHeader";
import {
  Calendar,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Users,
  ShieldAlert,
  Building,
  Target,
  Briefcase,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Exhibitor Support at Food Africa 2026 | Globalize Group Cairo",
  description:
    "Your team on the ground in Egypt. Professional commercial interpreters, booth assistants, buyer matchmaking, and post-show business development for Food Africa 2026.",
};

export default function HomePage() {
  const targetCategories = [
    { name: "Food Manufacturers", icon: Building },
    { name: "Global Exporters", icon: Globe2 },
    { name: "Ingredient Suppliers", icon: Layers },
    { name: "Food & Beverage Brands", icon: Sparkles },
    { name: "Agricultural Companies", icon: TrendingUp },
    { name: "International SMEs", icon: Users },
    { name: "Companies Seeking Egyptian Buyers", icon: Target },
    { name: "Companies Seeking Egyptian Distributors", icon: Briefcase },
  ];

  const whyReasons = [
    {
      num: "01",
      title: "Professional Multilingual Communication",
      desc: "Native Arabic speakers with consummate English fluency and deep commercial trade vocabulary, avoiding costly misunderstandings.",
    },
    {
      num: "02",
      title: "On-the-Ground Presence in Egypt",
      desc: "Established physical presence in Cairo with operational agility, verified local network, and immediate logistical problem-solving.",
    },
    {
      num: "03",
      title: "Business-Focused Support",
      desc: "We don't merely translate words; we qualify commercial intent, protect your margins, and advance deal momentum.",
    },
    {
      num: "04",
      title: "Flexible Staffing and Support Models",
      desc: "From a single specialist for high-stakes negotiation days to an entire turnkey booth and ongoing market development squad.",
    },
    {
      num: "05",
      title: "Support Before, During and After Exhibitions",
      desc: "End-to-end commercial continuity so that the relationships initiated at your booth convert into recurring import orders.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative bg-[#092B72] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0838A1_1px,transparent_1px),linear-gradient(to_bottom,#0838A1_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC120]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0838A1] border border-[#FFC120]/30 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#FFC120] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-[#FFC120]">
                  FOOD AFRICA 2026 • CAIRO, EGYPT
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display uppercase leading-[1.08] text-white">
                YOUR TEAM IN EGYPT.
                <br />
                <span className="text-[#FFC120]">EVEN WHEN YOU&apos;RE NOT.</span>
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                Professional exhibition support, commercial interpretation, buyer outreach, and local business development for international companies entering and expanding within the Egyptian market.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <CTAButton
                  href="/get-support-plan"
                  variant="primary"
                  size="lg"
                  trackingLabel="hero_get_free_support_plan"
                >
                  GET YOUR FREE SUPPORT PLAN
                </CTAButton>
                <WhatsAppButton
                  variant="outline"
                  size="lg"
                  label="TALK TO US ON WHATSAPP"
                />
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/15 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC120] shrink-0" />
                  <span>On-Site in Cairo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC120] shrink-0" />
                  <span>Bilingual Food Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC120] shrink-0" />
                  <span>Rates From $180/Day</span>
                </div>
              </div>
            </div>

            {/* Hero Visual B2B Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#092B72] rounded-xl p-6 sm:p-8 shadow-2xl border-4 border-[#FFC120] relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0838A1]">
                      Official Event Profile
                    </span>
                    <h2 className="text-xl font-black text-[#092B72]">Food Africa 2026</h2>
                  </div>
                  <span className="bg-[#EEF3FF] text-[#0838A1] font-bold text-xs px-2.5 py-1 rounded">
                    7–10 Dec 2026
                  </span>
                </div>

                <div className="py-5 space-y-4 text-sm text-[#475569]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0838A1] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#092B72]">Venue Location</p>
                      <p className="text-xs">Egypt International Exhibition Center (EIEC), Cairo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#0838A1] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#092B72]">The Problem Facing Exhibitors</p>
                      <p className="text-xs leading-relaxed">
                        International booths without native Arabic business communicators miss up to 70% of high-volume local wholesale discussions.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#F8FAEC] rounded-lg border border-[#E2E8F0] space-y-1">
                    <p className="text-xs font-bold text-[#092B72] uppercase tracking-wider">
                      The Globalize Solution
                    </p>
                    <p className="text-xs text-[#475569] leading-snug">
                      We pair your booth with commercial Arabic communicators and local business developers who represent your products with authority.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/get-support-plan"
                    className="w-full py-3 bg-[#092B72] hover:bg-[#0838A1] text-white rounded-md font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Check Team Availability For Your Dates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. HOME — PROBLEM SECTION */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F8FAEC] border-b border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="The Exhibition Reality"
            headline="YOUR BOOTH IS READY. IS YOUR EGYPT TEAM?"
            supportingText="Exhibiting in Egypt involves more than setting up a booth. You need people who can communicate with local buyers, qualify opportunities, arrange meetings, support negotiations and follow up after the show."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: LANGUAGE */}
            <div className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 rounded-lg bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-black text-lg mb-6">
                01
              </div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0838A1] block mb-1">
                BARRIER 01
              </span>
              <h3 className="text-2xl font-black text-[#092B72] font-display mb-3">
                LANGUAGE
              </h3>
              <p className="text-base text-[#475569] leading-relaxed italic border-l-2 border-[#FFC120] pl-3 py-1">
                &ldquo;Arabic communication can become a barrier between your team and potential buyers.&rdquo;
              </p>
              <p className="mt-4 text-xs text-[#64748B] leading-relaxed">
                Egyptian food distributors and regional supermarket buyers prefer negotiating trade terms in Arabic. Without native fluently trained commercial communicators, dialogue stalls at price lists.
              </p>
            </div>

            {/* Card 2: BUSINESS */}
            <div className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 rounded-lg bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-black text-lg mb-6">
                02
              </div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0838A1] block mb-1">
                BARRIER 02
              </span>
              <h3 className="text-2xl font-black text-[#092B72] font-display mb-3">
                BUSINESS
              </h3>
              <p className="text-base text-[#475569] leading-relaxed italic border-l-2 border-[#FFC120] pl-3 py-1">
                &ldquo;Not every visitor is a qualified buyer. Someone needs to identify real opportunities.&rdquo;
              </p>
              <p className="mt-4 text-xs text-[#64748B] leading-relaxed">
                Food Africa attracts tens of thousands of visitors. Without local commercial vetting, your senior executives spend valuable hours entertaining casual attendees rather than verified volume importers.
              </p>
            </div>

            {/* Card 3: FOLLOW-UP */}
            <div className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 rounded-lg bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center font-black text-lg mb-6">
                03
              </div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0838A1] block mb-1">
                BARRIER 03
              </span>
              <h3 className="text-2xl font-black text-[#092B72] font-display mb-3">
                FOLLOW-UP
              </h3>
              <p className="text-base text-[#475569] leading-relaxed italic border-l-2 border-[#FFC120] pl-3 py-1">
                &ldquo;Great leads are worthless if nobody follows up after the exhibition.&rdquo;
              </p>
              <p className="mt-4 text-xs text-[#64748B] leading-relaxed">
                Once international teams board their return flights, email chains go cold. Egyptian deals require persistent in-person or local telephone follow-ups to close formal purchase agreements.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton
              href="/how-it-works"
              variant="outline"
              size="lg"
              trackingLabel="home_see_how_we_can_help"
            >
              SEE HOW WE CAN HELP
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. HOME — MORE THAN AN INTERPRETER */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Core Value Proposition"
            headline="MORE THAN AN INTERPRETER."
            supportingText="Globalize provides the people and local support you need to operate effectively in Egypt — before, during and after Food Africa."
          />

          <ServiceGrid />

          <div className="mt-12 p-6 bg-[#EEF3FF] rounded-xl border border-[#0838A1]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#092B72]">
                Need a customized combination of these services?
              </h4>
              <p className="text-sm text-[#475569]">
                We can formulate an exact package combining interpreters, pre-show matchmaking, and post-show follow-ups.
              </p>
            </div>
            <CTAButton
              href="/get-support-plan"
              variant="secondary"
              size="md"
              trackingLabel="home_services_custom_plan"
            >
              BUILD MY CUSTOM PLAN
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. BEFORE / DURING / AFTER TIMELINE */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F8FAEC] border-y border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Three-Phase Operational Blueprint"
            headline="ONE EXHIBITION. THREE OPPORTUNITIES."
            supportingText="Maximize your investment across every phase of Food Africa 2026. Preparation generates the appointments, exhibition presence qualifies the buyers, and post-show persistence secures the contracts."
          />

          <Timeline />

          <div className="mt-12 text-center">
            <CTAButton
              href="/get-support-plan"
              variant="primary"
              size="lg"
              trackingLabel="home_timeline_cta"
            >
              START PREPARING YOUR EGYPT TEAM
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. REMOTE BUSINESS SUPPORT (VISUALLY DOMINANT DARK NAVY) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-[#092B72] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFC120_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
              Strategic Differentiator
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight leading-tight text-white">
              WHAT IF YOU DON&apos;T NEED TO COME TO EGYPT?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              You don&apos;t always need an office or a permanent employee to start developing business in Egypt. Globalize can provide on-the-ground business support while your team manages the business remotely.
            </p>
          </div>

          {/* Visual Workflow */}
          <div className="bg-[#0838A1]/80 rounded-2xl p-6 sm:p-10 border border-white/15 max-w-5xl mx-auto shadow-2xl">
            <p className="text-center text-xs font-extrabold uppercase tracking-widest text-[#FFC120] mb-8">
              Continuous Remote Execution Pipeline
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
              {[
                { step: "01", title: "MARKET RESEARCH", desc: "Competitors & pricing" },
                { step: "02", title: "BUYER OUTREACH", desc: "Direct importer vetting" },
                { step: "03", title: "MEETINGS", desc: "Facilitated in Cairo" },
                { step: "04", title: "COMMUNICATION", desc: "Native Arabic liaison" },
                { step: "05", title: "FOLLOW-UP", desc: "Continuous sample tracking" },
                { step: "06", title: "BUSINESS DEV", desc: "Closing recurring orders" },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="bg-white/10 hover:bg-white/15 transition-colors p-4 rounded-lg border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-xs font-black text-[#FFC120]">{item.step}</span>
                  <p className="text-xs font-black uppercase tracking-tight text-white my-2">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-slate-300 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center space-y-4 pt-8 border-t border-white/15">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-white">
                YOUR BUSINESS IN EGYPT.
                <br />
                <span className="text-[#FFC120]">YOUR TEAM ON THE GROUND.</span>
              </h3>
              <div>
                <CTAButton
                  href="/services/local-business-support"
                  variant="primary"
                  size="lg"
                  trackingLabel="home_discuss_local_support"
                >
                  DISCUSS LOCAL SUPPORT
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CASE STUDY TEASER */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Verified Track Record"
            headline="WE'VE ALREADY DONE IT."
            supportingText="Last year, Globalize supported an Indian food exporter participating in Food Africa in Egypt."
          />

          <div className="max-w-4xl mx-auto bg-[#F8FAEC] rounded-2xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#0838A1] bg-[#EEF3FF] px-3 py-1 rounded">
                  Client Profile: Indian Food Exporter
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#092B72] font-display">
                  FROM INTERPRETER TO BUSINESS SUPPORT PARTNER.
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  What started as an on-site Arabic interpretation engagement evolved into an end-to-end commercial partnership. Our team handled on-the-ground communication, buyer qualification, meeting follow-ups, and distributor liaison across Egypt.
                </p>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#092B72] mb-2">
                    Scope of Services Delivered:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#475569]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> On-site interpretation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Business communication
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Customer interaction
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Meeting support
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Local assistance
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Business development
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/case-study"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0838A1] hover:text-[#092B72] transition-colors"
                  >
                    <span>Read Full Case Study Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-4 text-center">
                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                  Commercial Impact
                </span>
                <p className="text-3xl font-extrabold text-[#092B72] font-display">
                  Seamless Local Continuity
                </p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Eliminated the language barrier completely and ensured all qualified exhibition discussions were systematically followed up through our Cairo office.
                </p>
                <Link
                  href="/get-support-plan"
                  className="w-full inline-block py-2.5 px-4 bg-[#FFC120] text-[#092B72] font-bold text-xs uppercase tracking-wider rounded hover:bg-[#FFC120]/90 transition-all"
                >
                  Request Similar Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PACKAGES */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F8FAEC]" id="packages">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Clear, Scalable Support"
            headline="CHOOSE THE LEVEL OF SUPPORT YOU NEED."
            supportingText="From daily on-site booth interpretation to turnkey business development, select the model that matches your commercial goals in Egypt."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-[#64748B] max-w-xl mx-auto">
            * Note: Globalize acts as a professional local business support, interpretation, and coordination partner. We do not make legal commercial agency or statutory representation claims.
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. WHO WE HELP */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Target Audience"
            headline="BUILT FOR INTERNATIONAL COMPANIES."
            supportingText="Specifically engineered for export directors, commercial managers, and international sales leaders entering Egypt."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {targetCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="bg-[#F8FAEC] p-5 rounded-lg border border-[#E2E8F0] flex flex-col items-center text-center hover:border-[#0838A1]/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#EEF3FF] text-[#0838A1] group-hover:bg-[#FFC120] group-hover:text-[#092B72] transition-colors flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#092B72] leading-snug">
                    {cat.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. WHY GLOBALIZE */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Differentiator & Standards"
            headline="LOCAL KNOWLEDGE. INTERNATIONAL STANDARDS."
            supportingText="Why international food brands trust Globalize to represent their brand and commercial interests at Food Africa."
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {whyReasons.map((reason) => (
              <div
                key={reason.num}
                className="bg-white p-6 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-[#0838A1]/30 transition-all"
              >
                <span className="text-2xl font-black font-display text-[#0838A1] bg-[#EEF3FF] px-3 py-1 rounded shrink-0">
                  {reason.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#092B72]">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/why-globalize"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0838A1] hover:underline"
            >
              <span>See the full comparison: What We Are vs What We Are Not</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FINAL CTA (DARK NAVY SECTION) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#092B72] text-white border-t-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-6">
          <span className="inline-block text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Food Africa 2026 • 7–10 December
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            READY FOR FOOD AFRICA 2026?
          </h2>
          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Tell us what you need. We&apos;ll build the right support plan for your company.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href="/get-support-plan"
              variant="primary"
              size="lg"
              trackingLabel="home_final_cta_plan"
            >
              GET YOUR FREE SUPPORT PLAN
            </CTAButton>
            <WhatsAppButton
              variant="outline"
              size="lg"
              label="WHATSAPP OUR TEAM"
            />
          </div>

          <p className="text-xs text-slate-300 pt-2">
            No obligation. We reply within 4 business hours with customized staffing availability.
          </p>
        </div>
      </section>
    </div>
  );
}
