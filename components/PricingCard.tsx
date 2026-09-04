import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  priceTag: string;
  priceNote: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted: boolean;
  badge?: string;
}

interface PricingCardProps {
  pkg: PackageItem;
}

export default function PricingCard({ pkg }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl transition-all duration-300 flex flex-col justify-between ${
        pkg.highlighted
          ? "bg-[#092B72] text-white shadow-xl ring-2 ring-[#FFC120] lg:-translate-y-2 p-8"
          : "bg-white text-[#092B72] border border-[#E2E8F0] shadow-sm hover:shadow-md p-7"
      }`}
    >
      {/* Top Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-6">
          <span
            className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
              pkg.highlighted
                ? "bg-[#FFC120] text-[#092B72]"
                : "bg-[#EEF3FF] text-[#0838A1] border border-[#0838A1]/30"
            }`}
          >
            {pkg.badge}
          </span>
        </div>
      )}

      <div>
        {/* Header info */}
        <div className="border-b pb-6 border-slate-200/40">
          <p
            className={`text-xs font-black uppercase tracking-widest ${
              pkg.highlighted ? "text-[#FFC120]" : "text-[#0838A1]"
            }`}
          >
            PACKAGE • {pkg.name}
          </p>
          <h3
            className={`text-2xl font-extrabold font-display tracking-tight mt-1 ${
              pkg.highlighted ? "text-white" : "text-[#092B72]"
            }`}
          >
            {pkg.subtitle}
          </h3>
          <p
            className={`text-sm mt-2 leading-relaxed ${
              pkg.highlighted ? "text-slate-300" : "text-[#475569]"
            }`}
          >
            {pkg.description}
          </p>

          {/* Pricing Display */}
          <div className="mt-6 pt-4 border-t border-slate-200/30">
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl font-black tracking-tight font-display ${
                  pkg.highlighted ? "text-[#FFC120]" : "text-[#092B72]"
                }`}
              >
                {pkg.priceTag}
              </span>
            </div>
            <p
              className={`text-xs mt-1 font-medium ${
                pkg.highlighted ? "text-slate-300" : "text-[#64748B]"
              }`}
            >
              {pkg.priceNote}
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="py-6 space-y-3">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${
              pkg.highlighted ? "text-slate-300" : "text-[#092B72]"
            }`}
          >
            What is Included:
          </p>
          <ul className="space-y-2.5">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    pkg.highlighted ? "text-[#FFC120]" : "text-[#0838A1]"
                  }`}
                />
                <span
                  className={`leading-normal ${
                    pkg.highlighted ? "text-slate-200" : "text-[#475569]"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Action */}
      <div className="pt-6 border-t border-slate-200/30">
        <Link
          href={`/get-support-plan?package=${pkg.id}`}
          className={`w-full py-3.5 px-4 rounded-md font-bold text-sm tracking-tight flex items-center justify-center gap-2 transition-all duration-150 ${
            pkg.highlighted
              ? "bg-[#FFC120] text-[#092B72] hover:bg-[#FFC120]/90 shadow-md"
              : "bg-[#092B72] text-white hover:bg-[#0838A1]"
          }`}
        >
          <span>{pkg.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p
          className={`text-center text-[11px] mt-2.5 flex items-center justify-center gap-1 ${
            pkg.highlighted ? "text-slate-300" : "text-[#64748B]"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          No long-term commitment required for exhibition staffing
        </p>
      </div>
    </div>
  );
}
