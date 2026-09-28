import React, { useState } from 'react';
import { Sparkles, MessageCircle, X, Send, Bot, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { PageRoute } from '../../App';

interface FloatingActionButtonsProps {
  setPage: (page: PageRoute) => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({ setPage }) => {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [chatMessages, setChatMessages] = useState<
    { sender: 'ai' | 'user'; text: string; time: string }[]
  >([
    {
      sender: 'ai',
      text: 'Bonjour & Welcome to Luxury Villa Technologies. I am your Caribbean Smart Estate AI Assistant. How can I assist you with your villa MEP design, Crestron/Lutron automation, or 24/7 Luxury Villa Care?',
      time: 'Just now'
    }
  ]);

  const quickPrompts = [
    'How does Hurricane Lockdown Mode work?',
    'What automation brands do you certify?',
    'When should MEP design begin for our build?',
    'What is included in Luxury Villa Care (LVC)?'
  ];

  const answerMap: Record<string, string> = {
    hurricane:
      'LVT Hurricane Mode triggers within 60 seconds from an in-wall keypad or satellite mobile link: motorized storm shutters lock, secondary HVAC intake dampers seal against salt vapor, solar microgrids isolate to battery storage, and Starlink backup modems maintain continuous global telemetry.',
    brands:
      'We are certified Gold and Premier master integrators for Crestron Home, Lutron Palladiom & HomeWorks QSX, Savant, Vantage Controls, Panduit Armored Fiber, Pakedge, Triad Architectural, JBL Synthesis, and Somfy Motorized Shading.',
    mep:
      'The ideal time to engage LVT is during the initial architectural schematic phase before concrete footings or floor slabs are poured. This allows us to cast all low-voltage PVC conduits, sensor junction boxes, and equipment rack ventilation directly into the structural plans.',
    lvc:
      'Luxury Villa Care (LVC) is our dedicated technical facility management sister company based in Marigot. Every SLA client receives 24/7/365 remote heartbeat monitoring, prioritized 2-hour on-island technician dispatch, and scheduled quarterly salt-spray corrosion audits.'
  };

  const handleSendQuery = (textToSend?: string) => {
    const query = textToSend || userQuery;
    if (!query.trim()) return;

    const lower = query.toLowerCase();
    let reply =
      'Thank you for your inquiry. Our senior engineers Michel Maduro and Hans de Bruyne are available to evaluate your specific villa architectural drawings. Would you like to schedule a 30-minute discovery call?';

    if (lower.includes('hurricane') || lower.includes('storm')) {
      reply = answerMap.hurricane;
    } else if (lower.includes('brand') || lower.includes('crestron') || lower.includes('lutron')) {
      reply = answerMap.brands;
    } else if (lower.includes('mep') || lower.includes('design') || lower.includes('begin') || lower.includes('when')) {
      reply = answerMap.mep;
    } else if (lower.includes('lvc') || lower.includes('care') || lower.includes('maintenance') || lower.includes('support')) {
      reply = answerMap.lvc;
    }

    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: query, time: 'Now' },
      { sender: 'ai', text: reply, time: 'Now' }
    ]);
    setUserQuery('');
  };

  return (
    <>
      {/* Floating Action Buttons Container (Bottom-Right Corner) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        {/* 1. WhatsApp Button (Circular, Green, Direct Chat) */}
        <div className="relative group">
          <a
            href="https://wa.me/590690886671?text=Hello%20Luxury%20Villa%20Technologies%20team%2C%20I%20would%20like%20to%20inquire%20about%20villa%20technology%20services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat with LVT Engineers"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none"
          >
            {/* Authentic WhatsApp Icon */}
            <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.934 3.018.934 3.178 0 5.767-2.587 5.769-5.766.001-3.187-2.575-5.77-5.769-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-2.127-.516-1.579-.652-2.612-2.259-2.69-2.364-.078-.104-.648-.863-.648-1.646 0-.783.411-1.17.558-1.328.147-.157.322-.196.43-.196.108 0 .216.002.31.007.1.005.234-.038.366.279.136.327.466 1.134.507 1.217.041.083.069.181.014.29-.055.109-.083.177-.165.273-.082.096-.172.215-.246.289-.082.082-.168.172-.072.337.096.165.427.705.916 1.141.629.56 1.159.733 1.324.815.165.082.262.069.359-.041.097-.11.414-.482.524-.647.11-.165.22-.138.371-.083.151.055.957.451 1.122.534.165.082.275.124.316.193.041.069.041.4-.103.805z" />
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 2.302.651 4.453 1.776 6.289l-1.776 5.711 5.867-1.539c1.782 1.011 3.847 1.589 6.133 1.589 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.802c-1.921 0-3.719-.558-5.241-1.52l-.375-.238-3.486.915.93-3.398-.261-.416c-1.077-1.716-1.648-3.704-1.648-5.745 0-5.845 4.757-10.602 10.602-10.602 5.844 0 10.601 4.757 10.601 10.602 0 5.846-4.757 10.602-10.602 10.602z" />
            </svg>
          </a>
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
            Direct WhatsApp Chat (+590 690 886671)
          </div>
        </div>

        {/* 2. AI Assistant Button (Circular, Luxury Teal Gradient) */}
        <div className="relative group">
          <button
            onClick={() => setAiModalOpen(!aiModalOpen)}
            aria-label="Open Smart Estate AI Assistant"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#002d2c] via-[#004d4a] to-[#00aca9] hover:from-[#00aca9] hover:to-[#002d2c] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none"
          >
            {aiModalOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="relative">
                <Sparkles className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00aca9] animate-ping"></span>
              </div>
            )}
          </button>
          {/* Tooltip */}
          {!aiModalOpen && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#002d2c] text-[#00aca9] text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg border border-[#00aca9]/30">
              LVT Smart Estate AI
            </div>
          )}
        </div>
      </div>

      {/* AI Smart Assistant Popup Dialog Modal */}
      {aiModalOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[380px] md:w-[420px] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[580px] animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Modal Header */}
          <div className="bg-[#002d2c] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00aca9]/20 border border-[#00aca9]/40 flex items-center justify-center text-[#00aca9]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>LVT Smart Estate AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h4>
                <p className="text-[11px] text-neutral-300">
                  Caribbean Villa Systems Knowledge Engine
                </p>
              </div>
            </div>

            <button
              onClick={() => setAiModalOpen(false)}
              className="p-1 rounded-full text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#fbfcfc] text-xs">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#00aca9] text-white rounded-br-xs'
                      : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-xs shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-neutral-400 mt-1 px-1 font-mono">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Quick Prompts Bar */}
            <div className="pt-2 space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                Suggested Questions:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendQuery(p)}
                    className="text-left p-2 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-[11px] transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{p}</span>
                    <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-[#00aca9] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action / Input Footer */}
          <div className="p-3 bg-white border-t border-neutral-200 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendQuery();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ask about MEP, Lutron, Starlink, SLA..."
                className="flex-1 px-3.5 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:border-[#00aca9] bg-neutral-50"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#00aca9] hover:bg-[#002d2c] text-white transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1 px-1">
              <span>Direct engineer contact:</span>
              <button
                onClick={() => {
                  setAiModalOpen(false);
                  setPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[#00aca9] font-bold hover:underline"
              >
                Schedule Discovery Call →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
