"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/constants";
import { Check, AlertCircle, Loader2, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";

const SUPPORT_OPTIONS = [
  "Interpreter",
  "Exhibition Staff",
  "Booth Assistant",
  "Buyer Meetings",
  "Buyer Research",
  "Distributor Search",
  "Lead Generation",
  "Business Development",
  "Post-Exhibition Follow-Up",
  "Ongoing Egypt Support",
  "Other",
];

const TIMELINE_OPTIONS = [
  "Before the exhibition",
  "During the exhibition",
  "After the exhibition",
  "Ongoing",
];

function LeadFormContent({ defaultPackage }: { defaultPackage?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPkgParam = defaultPackage || searchParams?.get("package") || "";

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    country: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    whatsapp: "",
    industry: "",
    isExhibiting: "YES" as "YES" | "NO" | "NOT SURE",
    hasDistributor: "NO" as "YES" | "NO" | "NOT SURE",
    supportNeeds: [] as string[],
    timeline: ["During the exhibition"] as string[],
    additionalNotes: selectedPkgParam ? `Interested in Package: ${selectedPkgParam.toUpperCase()}` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleFieldFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("form_start", { form_name: "support_plan_request" });
    }
  };

  const handleSupportToggle = (opt: string) => {
    setFormData((prev) => {
      const exists = prev.supportNeeds.includes(opt);
      return {
        ...prev,
        supportNeeds: exists
          ? prev.supportNeeds.filter((s) => s !== opt)
          : [...prev.supportNeeds, opt],
      };
    });
  };

  const handleTimelineToggle = (opt: string) => {
    setFormData((prev) => {
      const exists = prev.timeline.includes(opt);
      return {
        ...prev,
        timeline: exists
          ? prev.timeline.filter((t) => t !== opt)
          : [...prev.timeline, opt],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.country.trim()) errs.country = "Country is required";
    if (!formData.contactPerson.trim()) errs.contactPerson = "Contact person is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errs.email = "Please provide a valid work email";
    if (!formData.whatsapp.trim()) errs.whatsapp = "Phone / WhatsApp number is required";
    if (!formData.industry.trim()) errs.industry = "Product / Industry details are required";
    if (formData.supportNeeds.length === 0)
      errs.supportNeeds = "Please select at least one support requirement";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setServerError(result.message || "Unable to submit your request. Please try again.");
        setIsSubmitting(false);
        return;
      }

      trackEvent("form_submit", {
        form_name: "support_plan_request",
        company: formData.companyName,
        country: formData.country,
      });
      trackEvent("support_plan_request", {
        package: selectedPkgParam || "custom",
      });

      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setServerError("Network error. Please check your connection or contact us directly via WhatsApp.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-10 shadow-lg space-y-8"
      noValidate
    >
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-black uppercase tracking-widest bg-[#EEF3FF] text-[#0838A1] px-3 py-1 rounded-full">
          Custom Exhibitor Assessment
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092B72] font-display mt-2">
          TELL US WHAT YOU NEED.
        </h3>
        <p className="mt-2 text-sm text-[#475569]">
          Complete the brief form below and our Cairo directors will formulate a bespoke on-the-ground support plan with transparent pricing for Food Africa 2026.
        </p>
      </div>

      {serverError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-800 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-bold">Submission Notice</p>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      {/* Grid: Company & Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            onFocus={handleFieldFocus}
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Milan Agri Export S.p.A."
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1] ${
              errors.companyName ? "border-red-400 bg-red-50/50" : "border-[#E2E8F0]"
            }`}
          />
          {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Company Website
          </label>
          <input
            type="url"
            onFocus={handleFieldFocus}
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="https://company.com"
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            onFocus={handleFieldFocus}
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. India, Italy, Brazil, Poland..."
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1] ${
              errors.country ? "border-red-400 bg-red-50/50" : "border-[#E2E8F0]"
            }`}
          />
          {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Product / Industry <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            onFocus={handleFieldFocus}
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            placeholder="e.g. Spices, Dairy, Frozen Fruits, Confectionery"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1] ${
              errors.industry ? "border-red-400 bg-red-50/50" : "border-[#E2E8F0]"
            }`}
          />
          {errors.industry && <p className="text-xs text-red-600 mt-1">{errors.industry}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Contact Person <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            onFocus={handleFieldFocus}
            value={formData.contactPerson}
            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            placeholder="Full Name"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1] ${
              errors.contactPerson ? "border-red-400 bg-red-50/50" : "border-[#E2E8F0]"
            }`}
          />
          {errors.contactPerson && <p className="text-xs text-red-600 mt-1">{errors.contactPerson}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Job Title
          </label>
          <input
            type="text"
            onFocus={handleFieldFocus}
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            placeholder="e.g. Export Director, Commercial Head"
            className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            onFocus={handleFieldFocus}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1] ${
              errors.email ? "border-red-400 bg-red-50/50" : "border-[#E2E8F0]"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
            WhatsApp / Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            onFocus={handleFieldFocus}
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            placeholder="+CountryCode Number"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1] ${
              errors.whatsapp ? "border-red-400 bg-red-50/50" : "border-[#E2E8F0]"
            }`}
          />
          {errors.whatsapp && <p className="text-xs text-red-600 mt-1">{errors.whatsapp}</p>}
        </div>
      </div>

      {/* Radio Questions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        <div className="p-4 rounded-lg bg-[#F8FAEC] border border-[#E2E8F0]">
          <p className="text-xs font-bold uppercase tracking-wider text-[#092B72] mb-3">
            Are you exhibiting at Food Africa 2026?
          </p>
          <div className="flex gap-4">
            {(["YES", "NO", "NOT SURE"] as const).map((choice) => (
              <label key={choice} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#092B72]">
                <input
                  type="radio"
                  name="isExhibiting"
                  value={choice}
                  checked={formData.isExhibiting === choice}
                  onChange={() => setFormData({ ...formData, isExhibiting: choice })}
                  className="w-4 h-4 text-[#0838A1] focus:ring-[#0838A1]"
                />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#F8FAEC] border border-[#E2E8F0]">
          <p className="text-xs font-bold uppercase tracking-wider text-[#092B72] mb-3">
            Do you currently have a distributor in Egypt?
          </p>
          <div className="flex gap-4">
            {(["YES", "NO", "NOT SURE"] as const).map((choice) => (
              <label key={choice} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#092B72]">
                <input
                  type="radio"
                  name="hasDistributor"
                  value={choice}
                  checked={formData.hasDistributor === choice}
                  onChange={() => setFormData({ ...formData, hasDistributor: choice })}
                  className="w-4 h-4 text-[#0838A1] focus:ring-[#0838A1]"
                />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Multiselect: What support do you need? */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-2">
          What support do you need? (Select all that apply) <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {SUPPORT_OPTIONS.map((opt) => {
            const isChecked = formData.supportNeeds.includes(opt);
            return (
              <button
                type="button"
                key={opt}
                onClick={() => handleSupportToggle(opt)}
                className={`p-2.5 rounded text-xs font-bold text-left transition-all border flex items-center justify-between ${
                  isChecked
                    ? "bg-[#0838A1] text-white border-[#0838A1] shadow-sm"
                    : "bg-slate-50 text-[#092B72] border-[#E2E8F0] hover:bg-slate-100"
                }`}
              >
                <span>{opt}</span>
                {isChecked && <Check className="w-3.5 h-3.5 text-[#FFC120] shrink-0" />}
              </button>
            );
          })}
        </div>
        {errors.supportNeeds && (
          <p className="text-xs text-red-600 mt-1.5">{errors.supportNeeds}</p>
        )}
      </div>

      {/* Multiselect: When do you need support? */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-2">
          When do you need support?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {TIMELINE_OPTIONS.map((opt) => {
            const isChecked = formData.timeline.includes(opt);
            return (
              <button
                type="button"
                key={opt}
                onClick={() => handleTimelineToggle(opt)}
                className={`p-2.5 rounded text-xs font-bold text-center transition-all border ${
                  isChecked
                    ? "bg-[#092B72] text-white border-[#092B72]"
                    : "bg-white text-[#475569] border-[#E2E8F0] hover:bg-slate-50"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Additional Requirements */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
          Additional Requirements / Specific Goals
        </label>
        <textarea
          rows={3}
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
          placeholder="e.g. We require 1 Arabic interpreter for all 4 days, plus pre-event distributor outreach for our confectionery line..."
          className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
        />
      </div>

      {/* Submit CTA & Privacy Reassurance */}
      <div className="space-y-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-[#FFC120] hover:bg-[#FFC120]/90 text-[#092B72] font-black text-base uppercase tracking-tight rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Formulating Your Support Plan...</span>
            </>
          ) : (
            <>
              <span>GET MY FREE SUPPORT PLAN</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B] pt-1">
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Your information is used only to respond to your request. Never shared.</span>
          </p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              CONTACT_INFO.defaultWhatsAppMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#0838A1] hover:underline font-bold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Need instant answers? WhatsApp us
          </a>
        </div>
      </div>
    </form>
  );
}

export default function LeadForm({ defaultPackage }: { defaultPackage?: string }) {
  return (
    <React.Suspense
      fallback={
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 text-center text-sm text-[#475569]">
          Loading support plan assessment...
        </div>
      }
    >
      <LeadFormContent defaultPackage={defaultPackage} />
    </React.Suspense>
  );
}

