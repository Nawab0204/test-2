import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send, Clock, Building } from 'lucide-react';
import { COMPANY_INFO } from '../../data/lvtData';
import { OfficeLocationMap } from '../common/OfficeLocationMap';

export const CurrentContact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-20 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Connect With Us
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light">
              We're here to bring your vision to life. Whether you’re ready to get started or just have questions, reaching out is simple.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & WORKING FORM */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info Cards */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c]">
                Reach Out Directly
              </h2>
              <p className="text-sm text-neutral-600 font-light">
                Speak directly with our senior systems integration consultants or arrange an on-site property evaluation.
              </p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200 flex items-start gap-4 hover:border-[#00aca9]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#002d2c] text-[#00aca9] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#002d2c]">Email Inquiries</h3>
                <p className="text-xs text-neutral-600">
                  Reach out via email and let us know how we can assist you.
                </p>
                <a
                  href="mailto:info@lvt.sx?subject=Business%20enquiry%20LVT"
                  className="inline-block text-xs font-semibold text-[#00aca9] hover:underline pt-1"
                >
                  info@lvt.sx
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200 flex items-start gap-4 hover:border-[#00aca9]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#002d2c] text-[#00aca9] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#002d2c]">Direct Telephone Lines</h3>
                <p className="text-xs text-neutral-600">
                  Give us a call, and speak directly with one of our principals.
                </p>
                <div className="space-y-1 pt-1 text-xs font-semibold text-[#00aca9]">
                  <div><a href="tel:+590690886671" className="hover:underline">+590 (690) 886671</a> (Saint Martin FWI)</div>
                  <div><a href="tel:+17215531660" className="hover:underline">+1 (721) 553-1660</a> (Sint Maarten DWI)</div>
                  <div><a href="tel:+13109169490" className="hover:underline">+1 (310) 916-9490</a> (North America)</div>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200 flex items-start gap-4 hover:border-[#00aca9]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#002d2c] text-[#00aca9] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#002d2c]">Physical Office Address</h3>
                <p className="text-xs text-neutral-600">
                  Visit us at our headquarters in Marigot to explore system architectures in person.
                </p>
                <p className="text-xs text-neutral-700 leading-relaxed pt-1 font-medium">
                  5 Rue du Général de Gaulle<br />
                  Immeuble Le Colibri #8, PO Box 1081<br />
                  Marigot 97150, Saint Martin FWI
                </p>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="bg-[#fafafa] p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm">
            <h2 className="text-2xl font-bold text-[#002d2c] mb-2">
              Send us a message
            </h2>
            <p className="text-xs text-neutral-600 mb-6 font-light">
              Have a question or need more information? Drop us a message, and one of our experts will get back to you as soon as possible.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#eaf4f4] border border-[#00aca9] rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-[#00aca9] mx-auto" />
                <h3 className="text-lg font-bold text-[#002d2c]">Thank you!</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Your message has been received by Luxury Villa Technologies. An engineer will follow up with you within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#00aca9] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      First name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#00aca9] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Last name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#00aca9] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#00aca9] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#00aca9] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    Your message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your property, project timeline, or specific integration requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#00aca9] bg-white"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="rounded border-neutral-300 text-[#00aca9] focus:ring-[#00aca9]"
                  />
                  <label htmlFor="contact-consent" className="text-xs text-neutral-600">
                    I agree to the privacy policy and consent to being contacted by LVT.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full lvt-wf-button text-sm uppercase tracking-wider font-semibold disabled:opacity-50 py-3 rounded-lg"
                  >
                    {isSubmitting ? 'Sending message...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GOOGLE MAP & OFFICE LOCATION */}
      <OfficeLocationMap />
    </div>
  );
};
