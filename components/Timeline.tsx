import React from "react";
import { Calendar, CheckCircle, Clock } from "lucide-react";

export default function Timeline() {
  const stages = [
    {
      phase: "BEFORE",
      subtitle: "PREPARE THE MARKET",
      icon: Clock,
      timing: "Weeks Leading Up to Dec 7",
      items: [
        "Identify potential Egyptian buyers & wholesalers",
        "Research active regional food distributors",
        "Contact verified commercial prospects",
        "Arrange guaranteed booth meetings & calendar slots",
        "Prepare localized Arabic product sheets & messaging",
      ],
      badgeBg: "bg-[#EEF3FF]",
      badgeText: "text-[#0838A1]",
      borderAccent: "border-t-[#0838A1]",
    },
    {
      phase: "DURING",
      subtitle: "WORK THE MARKET",
      icon: Calendar,
      timing: "7–10 December 2026 (EIEC Cairo)",
      items: [
        "Professional commercial Arabic interpretation",
        "Bilingual booth support & attendee hosting",
        "Active visitor engagement & qualification",
        "Filtering real buyers from casual consumers",
        "On-site meeting facilitation & commercial discussions",
        "Real-time negotiation and pricing assistance",
      ],
      badgeBg: "bg-[#FFC120]",
      badgeText: "text-[#092B72]",
      borderAccent: "border-t-[#FFC120]",
    },
    {
      phase: "AFTER",
      subtitle: "DEVELOP THE OPPORTUNITIES",
      icon: CheckCircle,
      timing: "Immediate & Ongoing Post-Show",
      items: [
        "Systematic Arabic lead follow-up & call debriefs",
        "Active buyer communication & sample coordination",
        "Distributor contract & pricing follow-ups",
        "Second-round meeting coordination across Egypt",
        "Ongoing business development & pipeline execution",
        "Executive commercial reporting and audit logs",
      ],
      badgeBg: "bg-[#092B72]",
      badgeText: "text-white",
      borderAccent: "border-t-[#092B72]",
    },
  ];

  return (
    <div className="relative">
      {/* Desktop Horizontal Timeline Connector Line */}
      <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-[#E2E8F0] z-0" />

      {/* Grid: 3-column horizontal on desktop, vertical stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.phase}
              className={`bg-white rounded-lg border border-[#E2E8F0] border-t-4 ${stage.borderAccent} p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between`}
            >
              <div>
                {/* Phase Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${stage.badgeBg} ${stage.badgeText}`}
                  >
                    PHASE 0{idx + 1} • {stage.phase}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#092B72]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#092B72] font-display tracking-tight">
                  {stage.subtitle}
                </h3>
                <p className="text-xs font-semibold text-[#64748B] mt-1 mb-6">
                  {stage.timing}
                </p>

                {/* List of deliverables */}
                <ul className="space-y-3">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0838A1] mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#0838A1] flex items-center justify-between">
                <span>Phase Outcome</span>
                <span className="font-bold text-[#092B72]">
                  {idx === 0 ? "Qualified Appointments" : idx === 1 ? "Capture & Negotiations" : "Commercial Contracts"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
