import React, { useState } from 'react';
import { ShieldCheck, Cpu, Wifi, Sun, Sparkles, Check, ArrowRight, RefreshCw, Layers, PhoneCall } from 'lucide-react';

interface AuditState {
  propertyType: string;
  projectPhase: string;
  selectedSystems: string[];
  squareFootage: string;
  timeline: string;
  isComplete: boolean;
}

interface VillaReadinessAuditProps {
  onScheduleConsultation: (details: any) => void;
}

export const VillaReadinessAudit: React.FC<VillaReadinessAuditProps> = ({ onScheduleConsultation }) => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<AuditState>({
    propertyType: 'Beachfront Luxury Estate',
    projectPhase: 'New Architectural Construction',
    selectedSystems: [
      'Architectural Lighting & Lutron Keypads',
      'Whole-Estate Automation (Crestron / Savant)',
      'Enterprise Fiber Backbone & Starlink Dual-WAN',
      'Surveillance, AI Gate Attendant & Access'
    ],
    squareFootage: '8,000 – 15,000 sq ft',
    timeline: 'Within next 3 to 6 months',
    isComplete: false
  });

  const propertyTypes = [
    { id: 'beachfront', label: 'Beachfront Luxury Estate', desc: 'Direct ocean frontage, extreme salt-air environment, outdoor entertainment focus.' },
    { id: 'cliffside', label: 'Cliffside / Hilltop Villa', desc: 'Dramatic elevations, extended Wi-Fi requirements, panoramic sunset lighting.' },
    { id: 'compound', label: 'Multi-Structure Compound', desc: 'Main villa + guest cottages + gatehouse; requires armored fiber-optic interconnects.' },
    { id: 'resort', label: 'Boutique Hotel / Luxury Resort', desc: 'High concurrency guest Wi-Fi, central BMS, room automation, commercial SLAs.' }
  ];

  const projectPhases = [
    { id: 'new', label: 'New Architectural Construction', desc: 'Ideal stage for early MEP rough-in, conduit planning, and concealed rack design.' },
    { id: 'renovation', label: 'Major Gut Renovation', desc: 'Upgrading legacy electrical, running high-speed shielded cabling, modernizing keypads.' },
    { id: 'retrofit', label: 'Existing Operating Estate Modernization', desc: 'Zero-disruption wireless/hybrid upgrades, network hardening, remote monitoring setup.' }
  ];

  const availableSystems = [
    { id: 'lighting', name: 'Architectural Lighting & Lutron Keypads', category: 'Ambience & Efficiency' },
    { id: 'automation', name: 'Whole-Estate Automation (Crestron / Savant)', category: 'Centralized Control' },
    { id: 'network', name: 'Enterprise Fiber Backbone & Starlink Dual-WAN', category: 'Mission-Critical Network' },
    { id: 'security', name: 'Surveillance, AI Gate Attendant & Access', category: 'High Security' },
    { id: 'audio', name: 'Audiophile Multi-Room Audio & Dolby Atmos Cinema', category: 'High-Fidelity AV' },
    { id: 'climate', name: 'Tropical Climate, Humidity & VRF HVAC Control', category: 'Comfort & Preservation' },
    { id: 'solar', name: 'Clean Solar Energy, Microgrid & Battery Storage', category: 'Resilience & Sustainability' },
    { id: 'shading', name: 'Motorized Blackout Shading & Storm Shutters', category: 'Hurricane Preparedness' }
  ];

  const toggleSystem = (name: string) => {
    setState((prev) => {
      const exists = prev.selectedSystems.includes(name);
      return {
        ...prev,
        selectedSystems: exists
          ? prev.selectedSystems.filter((s) => s !== name)
          : [...prev.selectedSystems, name]
      };
    });
  };

  const calculateBlueprint = () => {
    const systemsCount = state.selectedSystems.length;
    let rackSize = '24U Mid-Size Rack';
    if (systemsCount > 5 || state.squareFootage === '15,000+ sq ft / Compound') {
      rackSize = 'Dual 42U Server Enclosures (Climate Controlled)';
    } else if (systemsCount > 3) {
      rackSize = 'Single 42U Enterprise Rack';
    }

    let estimatedUptime = '99.98%';
    let fiberRuns = systemsCount * 4 + 8;
    let tropicalHardening = 'High (Marine-Grade Stainless / IP66 Enclosures)';

    return { rackSize, estimatedUptime, fiberRuns, tropicalHardening };
  };

  const blueprint = calculateBlueprint();

  return (
    <div className="bg-[#001717] border border-[#00aca9]/30 rounded-xl overflow-hidden shadow-2xl text-white">
      {/* Header Bar */}
      <div className="bg-[#002d2c] px-6 py-5 border-b border-[#00aca9]/20 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Engineering Diagnostic
          </span>
          <h3 className="text-xl font-bold text-white mt-0.5">
            Villa Technology &amp; Infrastructure Readiness Audit
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
          <span className="bg-black/40 px-3 py-1 rounded border border-white/10">
            Step {step} of 4
          </span>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 sm:p-8">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">01. Select Your Property Topology</h4>
              <p className="text-sm text-neutral-400">
                Caribbean island properties have unique microclimatic and structural demands based on location.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {propertyTypes.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setState({ ...state, propertyType: t.label })}
                  className={`p-5 rounded-lg border cursor-pointer transition-all ${
                    state.propertyType === t.label
                      ? 'bg-[#002d2c] border-[#00aca9] ring-1 ring-[#00aca9]'
                      : 'bg-black/30 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-base text-white">{t.label}</h5>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        state.propertyType === t.label
                          ? 'border-[#00aca9] bg-[#00aca9] text-black'
                          : 'border-white/30'
                      }`}
                    >
                      {state.propertyType === t.label && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="lvt-wf-button text-xs uppercase tracking-wider font-semibold"
              >
                Proceed to Project Phase <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">02. Project Stage &amp; Timeline</h4>
              <p className="text-sm text-neutral-400">
                Timing dictates whether conduits, fiber pathways, and low-voltage drops can be invisibly pre-cast.
              </p>
            </div>

            <div className="space-y-3">
              {projectPhases.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setState({ ...state, projectPhase: p.label })}
                  className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    state.projectPhase === p.label
                      ? 'bg-[#002d2c] border-[#00aca9] ring-1 ring-[#00aca9]'
                      : 'bg-black/30 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div>
                    <h5 className="font-bold text-sm text-white">{p.label}</h5>
                    <p className="text-xs text-neutral-400">{p.desc}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border shrink-0 ml-4 flex items-center justify-center ${
                      state.projectPhase === p.label
                        ? 'border-[#00aca9] bg-[#00aca9] text-black'
                        : 'border-white/30'
                    }`}
                  >
                    {state.projectPhase === p.label && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                Approximate Air-Conditioned Interior Area:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {['Under 5,000 sq ft', '5,000 – 8,000 sq ft', '8,000 – 15,000 sq ft', '15,000+ sq ft / Compound'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setState({ ...state, squareFootage: size })}
                    className={`py-2 px-3 rounded border text-center font-medium transition-all ${
                      state.squareFootage === size
                        ? 'bg-[#00aca9] text-[#001717] font-bold border-[#00aca9]'
                        : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-neutral-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="lvt-wf-button text-xs uppercase tracking-wider font-semibold"
              >
                Select Subsystems <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">03. Required Technology Subsystems</h4>
              <p className="text-sm text-neutral-400">
                Select the systems you want engineered into your unified building operating system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableSystems.map((s) => {
                const isSelected = state.selectedSystems.includes(s.name);
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleSystem(s.name)}
                    className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#002d2c] border-[#00aca9]'
                        : 'bg-black/30 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-[#00aca9] uppercase font-bold tracking-wider">{s.category}</span>
                      <h5 className="font-semibold text-xs text-white">{s.name}</h5>
                    </div>
                    <div
                      className={`w-4 h-4 rounded border shrink-0 ml-3 flex items-center justify-center ${
                        isSelected ? 'bg-[#00aca9] border-[#00aca9] text-black' : 'border-white/30'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-neutral-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="lvt-wf-button text-xs uppercase tracking-wider font-semibold"
              >
                Generate Engineering Blueprint <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="bg-[#002d2c] p-6 rounded-lg border border-[#00aca9]/40 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">
                  Preliminary Engineering Diagnosis
                </span>
                <span className="text-xs text-neutral-400">Spec Ref: LVT-DIAG-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <div className="text-xs text-neutral-400">Target Uptime</div>
                  <div className="text-lg font-bold text-[#00aca9]">{blueprint.estimatedUptime}</div>
                  <div className="text-[10px] text-neutral-500">Dual-WAN Failover</div>
                </div>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <div className="text-xs text-neutral-400">Rack Architecture</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">{blueprint.rackSize}</div>
                  <div className="text-[10px] text-neutral-500">Climate Controlled</div>
                </div>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <div className="text-xs text-neutral-400">Dedicated Fiber Runs</div>
                  <div className="text-lg font-bold text-[#00aca9]">{blueprint.fiberRuns} Drops</div>
                  <div className="text-[10px] text-neutral-500">10Gbps Capable</div>
                </div>
                <div className="bg-black/40 p-3 rounded border border-white/5">
                  <div className="text-xs text-neutral-400">Salt-Air Hardening</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">Marine Grade</div>
                  <div className="text-[10px] text-neutral-500">IP66 Hermetic Seals</div>
                </div>
              </div>

              <div className="text-xs text-neutral-300 space-y-1.5 pt-2">
                <div><strong>Selected Systems ({state.selectedSystems.length}):</strong> {state.selectedSystems.join(' · ')}</div>
                <div><strong>Property Topology:</strong> {state.propertyType} ({state.squareFootage})</div>
                <div><strong>Implementation Phase:</strong> {state.projectPhase}</div>
              </div>
            </div>

            {/* Direct Consultation Request */}
            <div className="bg-white text-[#161616] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h5 className="font-bold text-base text-[#002d2c]">Ready for Detailed MEP / Schematic Review?</h5>
                <p className="text-xs text-neutral-600">
                  Submit this diagnostic directly to Michel Maduro &amp; Hans de Bruyne for a confidential engineering review.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setStep(1)}
                  className="px-3 py-2 text-xs text-neutral-600 hover:text-black flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Re-audit
                </button>
                <button
                  onClick={() => onScheduleConsultation(state)}
                  className="lvt-wf-button text-xs uppercase tracking-wider font-bold !bg-[#002d2c] !border-[#002d2c] !text-white hover:!bg-[#00aca9] hover:!text-[#001717] hover:!border-[#00aca9]"
                >
                  Book Executive Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
