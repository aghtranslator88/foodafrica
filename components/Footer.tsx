import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, EVENT_DETAILS, CORE_SERVICES, NAV_LINKS } from "@/lib/constants";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#092B72] text-white border-t-4 border-[#FFC120] pt-14 pb-20 lg:pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-md shadow-sm">
              <div className="relative w-44 h-12">
                <Image
                  src="/images/globalize-logo.png"
                  alt="Globalize Group"
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                />
              </div>
            </Link>
            <p className="text-xl font-extrabold tracking-tight text-[#FFC120] uppercase font-display leading-tight">
              YOUR TEAM IN EGYPT.
              <br />
              <span className="text-white">EVEN WHEN YOU&apos;RE NOT.</span>
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              On-the-ground exhibition support, commercial interpretation, buyer outreach, and business development for international food exhibitors participating at {EVENT_DETAILS.name}.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFC120] shrink-0" />
                <span>Egypt International Exhibition Center (EIEC), Cairo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFC120] shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFC120] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-widest font-bold text-[#FFC120]">Navigation</p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-200 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest font-bold text-[#FFC120]">Exhibitor Services</p>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate-200 hover:text-white hover:underline transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campaign & Support Action */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-[#0838A1] p-5 rounded-lg border border-white/15 space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#FFC120] text-[#092B72] px-2 py-0.5 rounded">
                7–10 December 2026
              </span>
              <p className="text-base font-bold text-white">Food Africa Cairo Exhibitor Support</p>
              <p className="text-xs text-slate-200 leading-normal">
                Reserve your Cairo ground team before trade show schedules fill up.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href="/get-support-plan"
                  className="w-full text-center py-2.5 px-3 bg-[#FFC120] hover:bg-[#FFC120]/90 text-[#092B72] font-bold text-xs rounded transition-all shadow"
                >
                  GET YOUR SUPPORT PLAN
                </Link>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    CONTACT_INFO.defaultWhatsAppMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded border border-white/20 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FFC120]" />
                  <span>WhatsApp: {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Globalize Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact Support
            </Link>
            <Link href="/admin" className="text-slate-400 hover:text-[#FFC120] transition-colors flex items-center gap-1 font-semibold">
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
