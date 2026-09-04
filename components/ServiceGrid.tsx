import React from "react";
import ServiceCard, { ServiceItem } from "./ServiceCard";

const HOME_SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Professional Interpreters",
    description: "Native Arabic and fluent multilingual commercial interpreters experienced in B2B food trade and negotiation protocols.",
    href: "/services/exhibition-interpreters",
    tags: ["Arabic", "English", "Negotiation"],
  },
  {
    number: "02",
    title: "Exhibition Coordinators",
    description: "On-site managers to handle logistics, schedule appointments, coordinate staff, and ensure your booth runs smoothly daily.",
    href: "/services/exhibition-staffing",
    tags: ["Logistics", "Operations", "Booth Lead"],
  },
  {
    number: "03",
    title: "Booth & Sales Assistants",
    description: "Professional brand hosts and product presenters trained to welcome visitors, answer inquiries, and qualify attendees.",
    href: "/services/exhibition-staffing",
    tags: ["Brand Hosts", "Greeting", "Attendee Vetting"],
  },
  {
    number: "04",
    title: "Buyer & Distributor Outreach",
    description: "Targeted pre-show research and outreach to vetted Egyptian importers, supermarket buyers, and distribution networks.",
    href: "/services/buyer-distributor-outreach",
    tags: ["Pre-Show", "Egyptian Importers", "Distributors"],
  },
  {
    number: "05",
    title: "Business Meeting Coordination",
    description: "Pre-scheduling qualified 1-on-1 bilateral buyer meetings at your booth or in private business lounges at the exhibition center.",
    href: "/services/buyer-distributor-outreach",
    tags: ["B2B Matchmaking", "Calendar Booking"],
  },
  {
    number: "06",
    title: "Lead Generation & Capture",
    description: "Active identification of decision-makers among walk-in visitors, catalog distribution, and structured badge/card data capture.",
    href: "/services/business-development",
    tags: ["Contact Capture", "Lead Filtering"],
  },
  {
    number: "07",
    title: "Business Development",
    description: "Continuous commercial pipeline creation, distributor pitching, and strategic market development across Egypt.",
    href: "/services/business-development",
    tags: ["Market Expansion", "Commercial Deals"],
  },
  {
    number: "08",
    title: "Post-Exhibition Follow-Up",
    description: "Systematic local Arabic and English follow-up communications, samples dispatch, and proposal tracking after the exhibition closes.",
    href: "/services/post-exhibition-follow-up",
    tags: ["Lead Conversion", "Cairo HQ Follow-up"],
  },
  {
    number: "09",
    title: "Ongoing Local Business Support",
    description: "Your continuous representation in Cairo without opening a foreign subsidiary, hiring full-time staff, or registering local office leases.",
    href: "/services/local-business-support",
    tags: ["Retainer", "Your Cairo Office"],
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {HOME_SERVICES.map((s) => (
        <ServiceCard key={s.number} {...s} />
      ))}
    </div>
  );
}
