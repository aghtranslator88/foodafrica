"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  trackingLabel?: string;
}

export default function CTAButton({
  href = "/get-support-plan",
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  trackingLabel = "cta_button_click",
}: CTAButtonProps) {
  const handleClick = () => {
    trackEvent("cta_click", { label: trackingLabel });
    if (onClick) onClick();
  };

  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 shadow-md hover:shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#FFC120] text-[#092B72] hover:bg-[#FFC120]/90 focus:ring-[#FFC120] border border-transparent active:scale-[0.99]",
    secondary:
      "bg-[#0838A1] text-white hover:bg-[#092B72] focus:ring-[#0838A1] border border-transparent shadow-sm",
    outline:
      "bg-transparent text-[#092B72] hover:bg-[#EEF3FF] border-2 border-[#092B72] focus:ring-[#092B72]",
    white:
      "bg-white text-[#092B72] hover:bg-slate-50 focus:ring-white border border-transparent shadow-sm",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={handleClick} className={classes}>
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={classes}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 shrink-0" />
    </button>
  );
}
