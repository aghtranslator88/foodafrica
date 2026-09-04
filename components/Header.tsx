"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { Menu, X, MessageSquare, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { source_page: pathname, location: "header" });
  };

  const handleCtaClick = () => {
    trackEvent("cta_click", { label: "header_get_support_plan", source_page: pathname });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-2.5"
          : "bg-white border-b border-[#E2E8F0]/80 py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-36 h-10 sm:w-44 sm:h-12 transition-transform duration-200 group-hover:opacity-95">
            <Image
              src="/images/globalize-logo.png"
              alt="Globalize Group Logo"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 144px, 176px"
            />
          </div>
          <div className="hidden xl:block pl-3 border-l border-[#E2E8F0]">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#092B72] block leading-tight">
              Food Africa 2026
            </span>
            <span className="text-[10px] text-[#64748B] block leading-tight">
              International Exhibitor Support
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-semibold tracking-tight transition-colors duration-150 rounded-md ${
                  isActive
                    ? "text-[#0838A1] bg-[#EEF3FF]"
                    : "text-[#092B72] hover:text-[#0838A1] hover:bg-[#EEF3FF]/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              CONTACT_INFO.defaultWhatsAppMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#092B72] bg-[#EEF3FF] hover:bg-[#E2E8F0] border border-[#0838A1]/20 rounded-md transition-colors"
            title="Chat directly with our Cairo team on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#0838A1]" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/get-support-plan"
            onClick={handleCtaClick}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#092B72] bg-[#FFC120] hover:bg-[#FFC120]/90 shadow-sm hover:shadow transition-all rounded-md tracking-tight"
          >
            <span>GET YOUR SUPPORT PLAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#092B72] hover:bg-[#EEF3FF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 text-base font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-[#0838A1] bg-[#EEF3FF]"
                      : "text-[#092B72] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <Link
              href="/get-support-plan"
              onClick={handleCtaClick}
              className="w-full text-center py-3 px-4 font-bold text-sm text-[#092B72] bg-[#FFC120] hover:bg-[#FFC120]/90 rounded-md shadow"
            >
              GET YOUR SUPPORT PLAN
            </Link>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                CONTACT_INFO.defaultWhatsAppMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 font-bold text-sm text-[#092B72] bg-[#EEF3FF] border border-[#0838A1]/20 rounded-md"
            >
              <MessageSquare className="w-4 h-4 text-[#0838A1]" />
              WhatsApp (+20 106 299 0808)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
