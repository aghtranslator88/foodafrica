import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CORE_SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle2,
  Languages,
  Users,
  Target,
  TrendingUp,
  CheckSquare,
  Building2,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Exhibitor & Business Support Services in Egypt | Globalize",
  description:
    "Explore our seven dedicated support tracks for international exhibitors at Food Africa 2026: interpreters, staffing, buyer outreach, business development, and market entry.",
};

const iconMap: Record<string, React.ElementType> = {
  Languages,
  Users,
  Target,
  TrendingUp,
  CheckSquare,
  Building2,
  Globe,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-[#092B72] text-white py-16 sm:py-20 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Comprehensive Operational Tracks
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
            EXHIBITOR SERVICES & LOCAL BUSINESS SUPPORT
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            From professional bilingual booth communication to turnkey local business development across Cairo and regional governorates.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 bg-[#F8FAEC]">
        <div className="container-custom max-w-5xl space-y-8">
          {CORE_SERVICES.map((s, idx) => {
            const Icon = iconMap[s.icon] || Globe;
            return (
              <div
                key={s.slug}
                className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black font-display text-[#FFC120] bg-[#092B72] px-2.5 py-0.5 rounded">
                      {s.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0838A1]">
                      Food Africa 2026 Capability
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#092B72] font-display">
                    {s.title}
                  </h2>

                  <p className="text-xs font-extrabold uppercase text-[#0838A1] tracking-wide">
                    {s.headline}
                  </p>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] text-[#0838A1] flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6" />
                  </div>

                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#092B72] hover:bg-[#0838A1] text-white font-bold text-xs uppercase tracking-tight rounded-md transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-[#E2E8F0] text-center">
        <div className="container-custom max-w-2xl space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-[#092B72] font-display uppercase">
            NEED A TAILORED COMBINATION OF SERVICES?
          </h2>
          <p className="text-sm text-[#475569]">
            Tell us your booth size, products, and commercial goals. We configure a comprehensive package tailored to your exact budget.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton href="/get-support-plan" variant="primary" size="md">
              GET YOUR SUPPORT PLAN
            </CTAButton>
            <WhatsAppButton variant="light" size="md" label="WHATSAPP ADVISOR" />
          </div>
        </div>
      </section>
    </div>
  );
}
