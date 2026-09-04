import React from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Globalize Group Food Africa 2026",
  description: "Privacy policy for Food Africa 2026 exhibitor support inquiries and business development services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAEC] py-16">
      <div className="container-custom max-w-3xl bg-white p-8 sm:p-12 rounded-xl border border-[#E2E8F0] shadow-sm space-y-6">
        <h1 className="text-3xl font-black font-display text-[#092B72] uppercase">
          PRIVACY POLICY
        </h1>
        <p className="text-xs text-[#64748B]">Last updated: September 2026</p>

        <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
          <p>
            Globalize Group (&ldquo;Globalize&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy and personal data of our international clients, trade exhibition attendees, and website visitors.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">1. Information We Collect</h2>
          <p>
            When you request a Food Africa 2026 Support Plan, contact our Cairo team, or submit an inquiry through our platform, we collect commercial contact details including: your company name, business website, country of origin, contact person name, job title, corporate email address, WhatsApp/telephone number, product categories, and specific exhibition requirements.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">2. How We Use Your Information</h2>
          <p>
            Your information is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Formulate, price, and deliver customized exhibition support plans for Food Africa 2026.</li>
            <li>Coordinate staffing, interpreter schedules, and local logistics in Cairo.</li>
            <li>Communicate directly regarding your requirements via email, telephone, or WhatsApp.</li>
            <li>Facilitate pre-arranged bilateral buyer meetings with verified Egyptian commercial entities.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">3. Non-Disclosure & Security</h2>
          <p>
            We treat all commercial details, product formulations, price lists, and strategic business goals shared with us as strictly confidential. We do not sell, rent, or trade client information to third-party marketing lists.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">4. Contact Information</h2>
          <p>
            For any inquiries regarding data protection or to request deletion of your submitted details, please contact us at:{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#0838A1] font-bold underline">
              {CONTACT_INFO.email}
            </a>.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <Link href="/" className="text-xs font-bold text-[#0838A1] hover:underline">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
