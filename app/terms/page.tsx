import React from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service | Globalize Group Food Africa 2026",
  description: "Terms and conditions for commercial support and exhibition services provided by Globalize Group in Egypt.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAEC] py-16">
      <div className="container-custom max-w-3xl bg-white p-8 sm:p-12 rounded-xl border border-[#E2E8F0] shadow-sm space-y-6">
        <h1 className="text-3xl font-black font-display text-[#092B72] uppercase">
          TERMS OF SERVICE
        </h1>
        <p className="text-xs text-[#64748B]">Last updated: September 2026</p>

        <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
          <p>
            These terms govern the use of the Globalize Food Africa campaign platform (foodafrica.globalizetl.com) and the provision of professional exhibition support, commercial interpretation, and business coordination services in Egypt.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">1. Scope of Services</h2>
          <p>
            Globalize Group provides commercial translation, on-site interpretation, exhibition staffing, buyer research, and business coordination services for international companies participating in Food Africa 2026 in Cairo, Egypt.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">2. Nature of Representation</h2>
          <p>
            Unless explicitly agreed under a separate bilateral written agreement, services provided by Globalize do not constitute statutory legal representation, statutory commercial agency, or power of attorney under Egyptian commercial laws. Globalize acts as an independent professional services contractor assisting with linguistic, operational, and commercial facilitation.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">3. Independent Event Notice</h2>
          <p>
            Food Africa is an independent international trade exhibition organized by its respective owners. Globalize Group provides independent on-the-ground support, interpretation, and business services to participating international exhibitors and does not claim official ownership or government affiliation with the exhibition organizers.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">4. Booking & Cancellation</h2>
          <p>
            Staffing and interpreter allocations for Food Africa 2026 are secured upon written confirmation of the itemized support plan. Specific payment schedules, advance deposits, and cancellation terms are documented directly in individual client service orders.
          </p>

          <h2 className="text-lg font-bold text-[#092B72] pt-2">5. Governing Law</h2>
          <p>
            Any commercial disputes or agreements entered into shall be governed by the laws of the Arab Republic of Egypt.
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
