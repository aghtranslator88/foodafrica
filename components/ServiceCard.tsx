import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
  tags,
}: ServiceItem) {
  const content = (
    <div className="group relative bg-white p-6 sm:p-7 rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#0838A1]/40 transition-all duration-200 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-black font-display text-[#FFC120] bg-[#092B72] px-2.5 py-1 rounded">
            {number}
          </span>
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            Cairo Ground Support
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#092B72] group-hover:text-[#0838A1] transition-colors leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-sm text-[#475569] leading-relaxed">
            {description}
          </p>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium bg-[#EEF3FF] text-[#0838A1] px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 mt-4 border-t border-[#E2E8F0]/70 flex items-center justify-between">
        <span className="text-xs font-bold text-[#0838A1] group-hover:text-[#092B72] transition-colors flex items-center gap-1">
          Explore Capability
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-[#0838A1] rounded-lg">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
