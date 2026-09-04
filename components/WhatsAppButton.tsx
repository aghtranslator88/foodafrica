"use client";

import React from "react";
import { CONTACT_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "light" | "outline";
  label?: string;
}

export default function WhatsAppButton({
  customMessage,
  className = "",
  size = "md",
  variant = "light",
  label = "TALK TO US ON WHATSAPP",
}: WhatsAppButtonProps) {
  const message = customMessage || CONTACT_INFO.defaultWhatsAppMessage;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    trackEvent("whatsapp_click", { location: "button", label });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-sm",
  };

  const variantStyles = {
    solid: "bg-[#0838A1] text-white hover:bg-[#092B72] border border-transparent",
    light: "bg-[#EEF3FF] text-[#092B72] hover:bg-[#dce7ff] border border-[#0838A1]/30",
    outline: "bg-transparent text-white hover:bg-white/10 border-2 border-white/80",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      title={`Chat on WhatsApp with Globalize (+20 106 299 0808)`}
    >
      <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
