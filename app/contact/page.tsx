import React, { Suspense } from "react";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_INFO, EVENT_DETAILS } from "@/lib/constants";
import { Phone, Mail, MapPin, Calendar, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Globalize Group | Food Africa 2026 Support Inquiries",
  description:
    "Contact our Cairo operations team. Request a customized Food Africa 2026 support plan, commercial interpreters, or local business coordination in Egypt.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#092B72] text-white py-14 sm:py-20 border-b-4 border-[#FFC120]">
        <div className="container-custom max-w-4xl text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FFC120] text-[#092B72]">
            Direct Cairo Operations
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
            CONTACT OUR CAIRO TEAM
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Reach out directly to discuss booth staffing, commercial Arabic interpreters, or business development for Food Africa 2026.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F8FAEC]">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Details & Direct Triggers */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E2E8F0] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0838A1]">
                    Operational Office
                  </span>
                  <h2 className="text-xl font-bold text-[#092B72] mt-1">
                    Globalize Group Cairo
                  </h2>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Translation, Interpretation & Local Business Support
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#475569] border-t border-slate-100 pt-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0838A1] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#092B72]">Phone / Direct</p>
                      <a href={`tel:${CONTACT_INFO.whatsappNumber}`} className="hover:underline">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#092B72]">WhatsApp (Fastest Response)</p>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0838A1] font-semibold hover:underline"
                      >
                        +20 106 299 0808
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0838A1] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#092B72]">Email Inquiries</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0838A1] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#092B72]">Exhibition Venue</p>
                      <p className="text-xs">{EVENT_DETAILS.venue}, Cairo, Egypt</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#0838A1] shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#092B72]">Operating Hours</p>
                      <p className="text-xs">Sunday – Thursday: 9:00 AM – 6:00 PM (Cairo Time)</p>
                      <p className="text-[11px] text-slate-400">Emergency exhibition support available 24/7 during show days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <WhatsAppButton
                    variant="solid"
                    size="md"
                    className="w-full"
                    label="CHAT ON WHATSAPP NOW"
                  />
                </div>
              </div>
            </div>

            {/* Right: Embedded Form */}
            <div className="lg:col-span-8">
              <Suspense fallback={<div className="p-8 text-center bg-white rounded-xl">Loading form...</div>}>
                <LeadForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
