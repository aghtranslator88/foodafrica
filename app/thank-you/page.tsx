import React from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_INFO } from "@/lib/constants";
import { CheckCircle2, Mail, MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Request Received | Globalize Food Africa 2026",
  description: "Thank you for submitting your requirements. Our Cairo team is reviewing your support plan.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAEC] py-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-12 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Request Successfully Registered
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-[#092B72] uppercase tracking-tight">
            YOUR REQUEST IS IN.
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-1">
            Thank you. Our team in Cairo will review your booth requirements, verify specialist availability, and contact you within 4 business hours with your customized support plan.
          </p>
        </div>

        {/* Immediate triggers */}
        <div className="p-4 bg-[#EEF3FF] rounded-lg border border-[#0838A1]/20 text-xs text-[#092B72] space-y-3">
          <p className="font-bold">Need Immediate Confirmation?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <WhatsAppButton
              variant="solid"
              size="sm"
              label="CONNECT ON WHATSAPP"
              customMessage="Hello Globalize, I just submitted a support plan request for Food Africa 2026 and would like to confirm team availability."
            />
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Food Africa 2026 Support Plan Follow-up`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#092B72] bg-white hover:bg-slate-50 border border-[#0838A1]/30 rounded-md transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0838A1]" />
              <span>EMAIL OUR TEAM</span>
            </a>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0838A1] hover:underline"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
