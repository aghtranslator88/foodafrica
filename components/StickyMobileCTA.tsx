"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  const pathname = usePathname();

  // Hide sticky CTA on thank-you page to avoid friction
  if (pathname === "/thank-you") return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] px-3 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
            CONTACT_INFO.defaultWhatsAppMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "sticky_mobile_bottom", source_page: pathname })}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#EEF3FF] active:bg-[#dce7ff] text-[#092B72] border border-[#0838A1]/30 rounded-md font-bold text-xs tracking-tight transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#0838A1]" />
          <span>WHATSAPP</span>
        </a>

        <Link
          href="/get-support-plan"
          onClick={() => trackEvent("cta_click", { label: "sticky_mobile_get_support_plan", source_page: pathname })}
          className="flex items-center justify-center gap-1 py-2.5 px-2 bg-[#FFC120] active:bg-[#e6ab17] text-[#092B72] rounded-md font-bold text-xs tracking-tight shadow-sm transition-all"
        >
          <span>GET SUPPORT PLAN</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
