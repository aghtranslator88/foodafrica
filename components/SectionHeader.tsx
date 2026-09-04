import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  supportingText?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  supportingText,
  alignment = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = alignment === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-10 lg:mb-14 ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
            isDark
              ? "bg-[#FFC120] text-[#092B72]"
              : "bg-[#EEF3FF] text-[#0838A1] border border-[#0838A1]/20"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display uppercase leading-tight ${
          isDark ? "text-white" : "text-[#092B72]"
        }`}
      >
        {headline}
      </h2>
      {supportingText && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#475569]"
          }`}
        >
          {supportingText}
        </p>
      )}
    </div>
  );
}
