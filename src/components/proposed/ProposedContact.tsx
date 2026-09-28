import React, { useState } from 'react';
import { COMPANY_INFO, FOUNDERS } from '../../data/lvtData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, Calendar, Building2 } from 'lucide-react';

export const ProposedContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Terres Basses, Saint Martin',
    typology: 'Ultra-Luxury Private Estate',
    estimatedSize: '8,000 - 15,000 sq ft',
    timeline: 'Q1-Q2 2025',
    disciplines: ['Home Automation', 'Network Infrastructure & Fiber'],
    notes: ''
  });

  const toggleDiscipline = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      disciplines: prev.disciplines.includes(item)
        ? prev.disciplines.filter((d) => d !== item)
        : [...prev.disciplines, item]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 sm:py-32 bg-[#001717] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751cbbe9e1ea55d6e27301c_Infinity%20Villas-11.webp"
            alt="Direct Executive Consultation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001717] via-[#001717]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-2 text-xs text-[#00aca9] font-medium tracking-widest uppercase">
            <span>Direct Executive Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Michel Maduro &amp; Hans de Bruyne</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display max-w-4xl leading-tight">
            Start Your Caribbean Architectural Technology Discovery.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-light">
            We work directly with estate owners, leading architectural practices, and prime general contractors throughout the Leeward Islands. Every inquiry receives confidential principal-level review.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT & QUALIFICATION INTAKE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Intake Form */}
          <div className="lg:col-span-7 bg-[#001919] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#00aca9]/20 border border-[#00aca9] text-[#00aca9] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Discovery Request Received
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Michel Maduro or Hans de Bruyne will personally review your specifications and contact you via {formData.email || 'email'} within 4 business hours.
                </p>
                <div className="p-4 bg-black/40 border border-white/10 rounded-lg text-xs text-neutral-400 max-w-md mx-auto">
                  Direct St. Maarten Dispatch Office: <span className="text-[#00aca9] font-mono">+1 (721) 553-1660</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Submit Additional Project Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs text-[#00aca9] font-semibold uppercase tracking-wider">
                    Executive Intake Form
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Project Qualification &amp; Discovery
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Provide your preliminary estate scope for a detailed engineering feasibility briefing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marc Delacroix"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Direct Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. m.delacroix@estate.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (721) ... or +33 6 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Villa / Project Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                    >
                      <option value="Terres Basses, Saint Martin">Terres Basses, Saint Martin (French)</option>
                      <option value="Indigo Bay, Sint Maarten">Indigo Bay, Sint Maarten (Dutch)</option>
                      <option value="Cupecoy / Pelican Key">Cupecoy / Pelican Key, Sint Maarten</option>
                      <option value="Orient Bay / Anse Marcel">Orient Bay / Anse Marcel, Saint Martin</option>
                      <option value="Saint Barthélemy (St. Barth)">Saint Barthélemy (St. Barth)</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Other Caribbean Location">Other Caribbean Location</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Project Typology
                    </label>
                    <select
                      value={formData.typology}
                      onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                    >
                      <option value="Ultra-Luxury Private Estate">Ultra-Luxury Private Estate</option>
                      <option value="New Architectural Build (Pre-pour)">New Architectural Build (Pre-pour)</option>
                      <option value="Comprehensive Smart Home Retrofit">Comprehensive Smart Home Retrofit</option>
                      <option value="Boutique Luxury Resort / Marina">Boutique Luxury Resort / Marina</option>
                      <option value="Commercial / Government Facility">Commercial / Government Facility</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Target Completion
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                    >
                      <option value="Immediate / Emergency Retrofit">Immediate / Emergency Retrofit</option>
                      <option value="Within 3 to 6 Months">Within 3 to 6 Months</option>
                      <option value="6 to 12 Months (Schematics phase)">6 to 12 Months (Schematics phase)</option>
                      <option value="1 to 2 Years (Long-range construction)">1 to 2 Years (Long-range construction)</option>
                    </select>
                  </div>
                </div>

                {/* Disciplines Checkbox Pills */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Required Disciplines (Select all applicable)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'MEP & Schematics Design',
                      'Whole-Villa Automation',
                      '10Gbps Fiber Backbone',
                      'Lutron Lighting Scenes',
                      'AI Biometric Access & CCTV',
                      'Marine Weatherproof Audio',
                      'Solar & Microgrid Inverters',
                      '24/7 Concierge Care (LVC)'
                    ].map((item) => {
                      const selected = formData.disciplines.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleDiscipline(item)}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                            selected
                              ? 'bg-[#00aca9] border-[#00aca9] text-black font-semibold'
                              : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/30'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Architectural Notes / Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the site, architectural firm involved, or existing automation challenges..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00aca9] hover:bg-[#00c5c1] text-black font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-lg hover:shadow-[#00aca9]/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Confidential Discovery Brief</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Principal Contacts & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Line Cards */}
            <div className="bg-[#001717] border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs text-[#00aca9] uppercase tracking-widest font-semibold">Direct Communication</span>
                <h3 className="text-xl font-bold text-white font-display">On-Island Executive Contact</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-3 bg-black/30 rounded-lg border border-white/5">
                  <Phone className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">St. Maarten / Caribbean Direct Line</span>
                    <a href="tel:+17215531660" className="text-white font-bold hover:text-[#00aca9] transition-colors">
                      +1 (721) 553-1660
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-black/30 rounded-lg border border-white/5">
                  <Phone className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">Saint Martin (French Side) Direct Line</span>
                    <a href="tel:+590690886671" className="text-white font-bold hover:text-[#00aca9] transition-colors">
                      +590 690 886671
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-black/30 rounded-lg border border-white/5">
                  <Phone className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">US &amp; International Direct Line</span>
                    <a href="tel:+13109169490" className="text-white font-bold hover:text-[#00aca9] transition-colors">
                      +1 (310) 916-9490
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-black/30 rounded-lg border border-white/5">
                  <Mail className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">Direct Executive Inquiries</span>
                    <a href="mailto:info@lvt.sx" className="text-[#00aca9] font-medium hover:underline">
                      info@lvt.sx
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Headquarters & Physical Address */}
            <div className="bg-[#001717] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00aca9]" />
                <h4 className="text-base font-bold text-white font-display">Regional Headquarters</h4>
              </div>

              <div className="text-sm text-neutral-300 space-y-1">
                <p className="font-semibold text-white">Luxury Villa Technologies (LVT)</p>
                <p>5 Rue du Général de Gaulle</p>
                <p>Immeuble Le Colibri #8, PO Box 1081</p>
                <p>Marigot 97150, Saint Martin FWI</p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00aca9]" />
                  <span>Mon – Fri: 08:00 – 18:00 AST</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">24/7/365 On-Call Emergency SLA for LVC Clients</span>
                </div>
              </div>
            </div>

            {/* Regional Response Guarantee Badge */}
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-200">
                <strong className="block font-semibold text-emerald-300 mb-0.5">4-Hour Response Guarantee:</strong>
                Active Caribbean estate owners and lead architects receive an executive response within four business hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
