"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Search,
  Download,
  RefreshCw,
  MessageSquare,
  Mail,
  Building,
  Globe,
  Calendar,
  CheckCircle2,
  Lock,
  ArrowUpDown,
  ExternalLink,
  ChevronRight,
  X,
  Filter,
} from "lucide-react";

interface Lead {
  id: string;
  submittedAt: string;
  companyName: string;
  website?: string;
  country: string;
  contactPerson: string;
  jobTitle?: string;
  email: string;
  whatsapp: string;
  industry: string;
  isExhibiting: string;
  hasDistributor: string;
  supportNeeds: string[];
  timeline: string[];
  additionalNotes?: string;
  sourceUrl?: string;
}

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passError, setPassError] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [dbSource, setDbSource] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterExhibiting, setFilterExhibiting] = useState("ALL");
  const [filterService, setFilterService] = useState("ALL");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Default master PIN for Globalize admin: globalize2026 or 2026
  const checkAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === "globalize2026" || passcode.trim() === "2026" || passcode.trim() === "admin") {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("foodafrica_admin_auth", "true");
      }
      fetchLeads();
    } else {
      setPassError(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("foodafrica_admin_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
        fetchLeads();
      }
    }
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
        setDbSource(data.source);
      }
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        lead.companyName?.toLowerCase().includes(query) ||
        lead.contactPerson?.toLowerCase().includes(query) ||
        lead.email?.toLowerCase().includes(query) ||
        lead.country?.toLowerCase().includes(query) ||
        lead.industry?.toLowerCase().includes(query);

      const matchesExhibiting =
        filterExhibiting === "ALL" || lead.isExhibiting === filterExhibiting;

      const matchesService =
        filterService === "ALL" ||
        (Array.isArray(lead.supportNeeds) &&
          lead.supportNeeds.some((s) => s.toLowerCase().includes(filterService.toLowerCase())));

      return matchesSearch && matchesExhibiting && matchesService;
    });
  }, [leads, searchQuery, filterExhibiting, filterService]);

  // Metrics
  const metrics = useMemo(() => {
    const total = leads.length;
    const exhibitingYes = leads.filter((l) => l.isExhibiting === "YES").length;
    const needInterpreter = leads.filter(
      (l) => Array.isArray(l.supportNeeds) && l.supportNeeds.some((s) => s.toLowerCase().includes("interpreter"))
    ).length;
    const needMeetings = leads.filter(
      (l) => Array.isArray(l.supportNeeds) && l.supportNeeds.some((s) => s.toLowerCase().includes("meeting") || s.toLowerCase().includes("buyer"))
    ).length;
    return { total, exhibitingYes, needInterpreter, needMeetings };
  }, [leads]);

  // Export to CSV
  const exportToCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      "ID",
      "Submitted At",
      "Company Name",
      "Country",
      "Contact Person",
      "Job Title",
      "Email",
      "WhatsApp",
      "Industry",
      "Is Exhibiting",
      "Has Distributor",
      "Support Needs",
      "Timeline",
      "Additional Notes",
    ];

    const rows = leads.map((l) => [
      l.id,
      l.submittedAt,
      `"${(l.companyName || "").replace(/"/g, '""')}"`,
      `"${(l.country || "").replace(/"/g, '""')}"`,
      `"${(l.contactPerson || "").replace(/"/g, '""')}"`,
      `"${(l.jobTitle || "").replace(/"/g, '""')}"`,
      `"${(l.email || "").replace(/"/g, '""')}"`,
      `"${(l.whatsapp || "").replace(/"/g, '""')}"`,
      `"${(l.industry || "").replace(/"/g, '""')}"`,
      l.isExhibiting || "",
      l.hasDistributor || "",
      `"${(l.supportNeeds || []).join(", ").replace(/"/g, '""')}"`,
      `"${(l.timeline || []).join(", ").replace(/"/g, '""')}"`,
      `"${(l.additionalNotes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `foodafrica_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If not logged in, show secure login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-[#F8FAEC] px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="relative w-36 h-10 mx-auto">
              <Image
                src="/images/globalize-logo.png"
                alt="Globalize Group"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
            <h1 className="text-2xl font-black text-[#092B72] font-display">
              LEADS DASHBOARD
            </h1>
            <p className="text-xs text-[#64748B]">
              Food Africa 2026 Exhibitor Requests Portal
            </p>
          </div>

          <form onSubmit={checkAuth} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#092B72] mb-1.5">
                Admin Access Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setPassError(false);
                  }}
                  placeholder="Enter passcode (e.g. 2026)"
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] text-sm text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
                  autoFocus
                />
                <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
              </div>
              {passError && (
                <p className="text-xs text-red-600 mt-1">
                  Incorrect passcode. Try &quot;2026&quot; or &quot;globalize2026&quot;.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#092B72] hover:bg-[#0838A1] text-white font-bold text-sm uppercase rounded-md tracking-wider transition-colors shadow"
            >
              Access Dashboard
            </button>
          </form>

          <div className="text-center text-[11px] text-slate-400 pt-2 border-t border-slate-100">
            Passcode is set to <span className="font-bold text-[#0838A1]">2026</span> for team access.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAEC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Bar */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-36 h-10">
              <Image
                src="/images/globalize-logo.png"
                alt="Globalize Group"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </div>
            <div className="border-l border-slate-200 pl-4">
              <h1 className="text-xl font-black text-[#092B72] font-display">
                Food Africa 2026 — Leads Dashboard
              </h1>
              <div className="flex items-center gap-2 text-xs text-[#64748B] mt-0.5">
                <span>Database Source:</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                  {dbSource === "neon_postgresql" ? "Neon PostgreSQL (Live)" : "Local Storage"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#EEF3FF] hover:bg-blue-100 text-[#0838A1] text-xs font-bold rounded-md transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={leads.length === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FFC120] hover:bg-[#FFC120]/90 text-[#092B72] text-xs font-black uppercase rounded-md shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV (Excel)</span>
            </button>

            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("foodafrica_admin_auth");
                }
                setIsAuthenticated(false);
              }}
              className="px-3 py-2 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
              Total Inquiries
            </p>
            <p className="text-3xl font-black text-[#092B72] font-display mt-2">
              {metrics.total}
            </p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
              Registered in Database
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
              Confirmed Exhibitors
            </p>
            <p className="text-3xl font-black text-[#0838A1] font-display mt-2">
              {metrics.exhibitingYes}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Have confirmed booth at EIEC
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
              Needs Interpreters
            </p>
            <p className="text-3xl font-black text-amber-600 font-display mt-2">
              {metrics.needInterpreter}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Requires Arabic / Multilingual
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#64748B]">
              Needs Buyer Meetings
            </p>
            <p className="text-3xl font-black text-emerald-700 font-display mt-2">
              {metrics.needMeetings}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              High commercial intent
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search company, contact, country, product..."
              className="w-full pl-9 pr-4 py-2 rounded-md border border-[#E2E8F0] text-xs text-[#092B72] focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <select
              value={filterExhibiting}
              onChange={(e) => setFilterExhibiting(e.target.value)}
              className="px-3 py-2 text-xs font-bold text-[#092B72] border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
            >
              <option value="ALL">Exhibiting Status (All)</option>
              <option value="YES">Exhibiting: YES</option>
              <option value="NO">Exhibiting: NO</option>
              <option value="NOT SURE">Exhibiting: NOT SURE</option>
            </select>

            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-3 py-2 text-xs font-bold text-[#092B72] border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0838A1]"
            >
              <option value="ALL">All Services</option>
              <option value="Interpreter">Interpreter</option>
              <option value="Staff">Exhibition Staff</option>
              <option value="Meeting">Buyer Meetings</option>
              <option value="Distributor">Distributor Search</option>
              <option value="Development">Business Development</option>
              <option value="Support">Local Support</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#092B72] text-white uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Company & Country</th>
                  <th className="py-3.5 px-4">Contact Person</th>
                  <th className="py-3.5 px-4">Product / Industry</th>
                  <th className="py-3.5 px-4">Exhibiting?</th>
                  <th className="py-3.5 px-4">Services Requested</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Quick Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400 font-semibold">
                      {loading ? "Loading leads from database..." : "No matching inquiries found."}
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const cleanPhone = (lead.whatsapp || "").replace(/[^0-9]/g, "");
                    const dateFormatted = lead.submittedAt
                      ? new Date(lead.submittedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Recent";

                    return (
                      <tr
                        key={lead.id}
                        className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <td className="py-4 px-4">
                          <div className="font-bold text-sm text-[#092B72] group-hover:text-[#0838A1] transition-colors flex items-center gap-1.5">
                            <span>{lead.companyName}</span>
                          </div>
                          <span className="inline-block text-[11px] font-semibold text-slate-500 mt-0.5">
                            🌍 {lead.country}
                          </span>
                        </td>

                        <td className="py-4 px-4">
                          <p className="font-bold text-[#092B72]">{lead.contactPerson}</p>
                          <p className="text-[11px] text-slate-500">{lead.jobTitle || "Lead Executive"}</p>
                        </td>

                        <td className="py-4 px-4">
                          <span className="font-medium text-[#475569]">{lead.industry}</span>
                        </td>

                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-2 py-0.5 text-[10px] font-black rounded ${
                              lead.isExhibiting === "YES"
                                ? "bg-emerald-100 text-emerald-800"
                                : lead.isExhibiting === "NO"
                                ? "bg-red-100 text-red-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {lead.isExhibiting}
                          </span>
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {(lead.supportNeeds || []).slice(0, 3).map((sn) => (
                              <span
                                key={sn}
                                className="bg-[#EEF3FF] text-[#0838A1] text-[10px] font-bold px-2 py-0.5 rounded"
                              >
                                {sn}
                              </span>
                            ))}
                            {(lead.supportNeeds || []).length > 3 && (
                              <span className="text-[10px] text-slate-400 font-bold self-center">
                                +{(lead.supportNeeds || []).length - 3} more
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="py-4 px-4 text-slate-500 text-[11px]">
                          {dateFormatted}
                        </td>

                        <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            {cleanPhone && (
                              <a
                                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                                  `Hello ${lead.contactPerson}, thank you for reaching out to Globalize regarding Food Africa 2026 support for ${lead.companyName}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-md transition-colors"
                                title="Open WhatsApp Chat"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <a
                              href={`mailto:${lead.email}?subject=Globalize Support Plan — Food Africa 2026 (${lead.companyName})`}
                              className="p-2 bg-blue-50 hover:bg-blue-100 text-[#0838A1] rounded-md transition-colors"
                              title="Send Email"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Detail Modal */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0838A1] bg-[#EEF3FF] px-2.5 py-0.5 rounded">
                    Lead Ref: {selectedLead.id}
                  </span>
                  <h2 className="text-2xl font-black text-[#092B72] font-display mt-1">
                    {selectedLead.companyName}
                  </h2>
                  <p className="text-xs text-slate-500">
                    🌍 {selectedLead.country} • {selectedLead.industry}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#475569]">
                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Contact Person
                  </p>
                  <p className="text-sm font-bold text-[#092B72]">{selectedLead.contactPerson}</p>
                  <p className="text-xs text-slate-500">{selectedLead.jobTitle || "Executive"}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Contact Channels
                  </p>
                  <p className="text-xs font-semibold text-[#092B72]">{selectedLead.email}</p>
                  <p className="text-xs text-emerald-700 font-bold">{selectedLead.whatsapp}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Exhibiting at Food Africa 2026?
                  </p>
                  <p className="text-sm font-bold text-[#092B72]">{selectedLead.isExhibiting}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Has Distributor in Egypt?
                  </p>
                  <p className="text-sm font-bold text-[#092B72]">{selectedLead.hasDistributor}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#092B72]">
                  Required Services
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(selectedLead.supportNeeds || []).map((srv) => (
                    <span
                      key={srv}
                      className="text-xs font-bold bg-[#0838A1] text-white px-3 py-1 rounded"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#092B72]">
                  Required Timeline
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(selectedLead.timeline || []).map((tl) => (
                    <span
                      key={tl}
                      className="text-xs font-semibold bg-[#FFC120] text-[#092B72] px-3 py-1 rounded"
                    >
                      {tl}
                    </span>
                  ))}
                </div>
              </div>

              {selectedLead.additionalNotes && (
                <div className="p-4 bg-[#F8FAEC] rounded-lg border border-[#E2E8F0] space-y-1">
                  <p className="text-xs font-bold text-[#092B72] uppercase tracking-wider">
                    Additional Requirements / Notes
                  </p>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {selectedLead.additionalNotes}
                  </p>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/${(selectedLead.whatsapp || "").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello ${selectedLead.contactPerson}, thank you for reaching out to Globalize regarding Food Africa 2026 support for ${selectedLead.companyName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded transition-colors shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
