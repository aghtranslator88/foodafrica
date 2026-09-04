import React, { Suspense } from "react";
import LeadForm from "@/components/LeadForm";
import { EVENT_DETAILS, CONTACT_INFO } from "@/lib/constants";
import { Calendar, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Get Your Free Food Africa 2026 Support Plan | Globalize",
  description:
    "Request your customized exhibition support, commercial interpreter, or business development plan for Food Africa 2026 (7–10 December, EIEC Cairo).",
};

export default function GetSupportPlanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAEC] py-10 sm:py-16">
      <div className="container-custom max-w-4xl space-y-8">
        {/* Header Reassurance */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FF] text-[#0838A1] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Food Africa 2026 • 7–10 December • Cairo, Egypt</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase text-[#092B72] tracking-tight">
            REQUEST YOUR EXHIBITOR SUPPORT PLAN
          </h1>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Tell us your booth specifications and staffing preferences. Our Cairo team will review your requirements and provide an itemized proposal with clear daily rates.
          </p>
        </div>

        {/* Reassurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#092B72] font-semibold">
          <div className="p-3 bg-white rounded-lg border border-[#E2E8F0] flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Response within 4 business hours</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-[#E2E8F0] flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Transparent pricing (From $180/day)</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-[#E2E8F0] flex items-center gap-2 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0838A1] shrink-0" />
            <span>No long-term commitment required</span>
          </div>
        </div>

        {/* Lead Form */}
        <Suspense fallback={<div className="p-12 text-center bg-white rounded-xl shadow">Loading Form...</div>}>
          <LeadForm />
        </Suspense>
      </div>
    </div>
  );
}
