import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Phone, Mail, User, Building, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/lvtData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyLocation: initialData?.propertyType || 'Saint Martin / Sint Maarten',
    propertyType: initialData?.propertyType || 'Beachfront Estate',
    projectStage: initialData?.projectPhase || 'New Construction',
    preferredDate: '',
    message: initialData?.selectedSystems ? `Interested in: ${initialData.selectedSystems.join(', ')}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#001717] border border-[#00aca9]/40 w-full max-w-2xl rounded-xl shadow-2xl text-white overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#002d2c] p-6 border-b border-white/10">
          <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Confidential Executive Discovery</span>
          <h3 className="text-xl font-bold text-white mt-1">Book a Villa Technology Consultation</h3>
          <p className="text-xs text-neutral-300 mt-1">
            Directly with Michel Maduro (CTO) &amp; Hans de Bruyne (Managing Director)
          </p>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-[#00aca9] mx-auto" />
              <h4 className="text-2xl font-bold text-white">Consultation Request Confirmed</h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our principals have received your villa integration parameters and will contact you via WhatsApp / email within 12 hours to coordinate the technical session.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="lvt-wf-button text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Your Full Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Laurent Vanier"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Direct Phone / WhatsApp*</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 or +590..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Email Address*</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Property Location*</label>
                  <select
                    value={formData.propertyLocation}
                    onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                    className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  >
                    <option value="Terres Basses, Saint Martin">Terres Basses, Saint Martin</option>
                    <option value="Pelican Keys / Simpson Bay, Sint Maarten">Pelican Keys / Simpson Bay, Sint Maarten</option>
                    <option value="Indigo Bay, Sint Maarten">Indigo Bay, Sint Maarten</option>
                    <option value="Saint Barthélemy (St. Barth)">Saint Barthélemy (St. Barth)</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Other Caribbean / USA">Other Caribbean / USA</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Project Stage</label>
                  <select
                    value={formData.projectStage}
                    onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                    className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  >
                    <option value="Architectural Design / Pre-Construction">Architectural Design / Pre-Construction</option>
                    <option value="Active Construction / Rough-In">Active Construction / Rough-In</option>
                    <option value="Gut Renovation">Gut Renovation</option>
                    <option value="Existing Operating Villa Retrofit">Existing Operating Villa Retrofit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Preferred Consultation Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-300 mb-1">Specific Technical Goals or Questions</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your estate, architectural drawings, or integration scope..."
                  className="w-full bg-black/40 border border-white/20 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00aca9]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full lvt-wf-button text-xs uppercase tracking-wider font-bold !bg-[#00aca9] !text-black !border-[#00aca9]"
                >
                  {loading ? 'Submitting Details...' : 'Confirm Consultation Request'}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400 pt-2">
                Direct phone lines: <a href="tel:+590690886671" className="text-[#00aca9] hover:underline">+590 (690) 886671</a> or <a href="tel:+17215531660" className="text-[#00aca9] hover:underline">+1 (721) 553-1660</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
