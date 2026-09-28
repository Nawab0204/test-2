import React from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { COMPANY_INFO } from '../../data/lvtData';
import { Calendar, MapPin, Users, Globe, ShieldCheck } from 'lucide-react';

interface CurrentAboutProps {
  setPage: (page: PageRoute) => void;
}

export const CurrentAbout: React.FC<CurrentAboutProps> = ({ setPage }) => {
  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-20 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Company Story</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              About Luxury Villa Technologies
            </h1>
            <p className="text-lg text-neutral-200 leading-relaxed font-light">
              Your ultimate partner in the Caribbean for all your Villa Automation and Integration needs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REDEFINING LUXURY & CRAFTING DREAM LIVING SPACES */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c]">
              Redefining Luxury with Innovation and Technology
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Elevate your lifestyle with state-of-the-art living, where luxury meets the pinnacle of innovation. At LVT, we transform dream villas into intelligent, fully integrated homes by seamlessly merging sophisticated technical systems. Our bespoke approach combines the latest in home automation trends, creating an environment where technology is not just a feature—but an experience.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c] pt-4">
              Crafting Dream Living Spaces with Passion and Precision
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              At LVT, we are driven by a relentless passion for excellence and an unwavering commitment to precision. Every project we undertake is a unique blend of luxury, functionality, and cutting-edge technology. Our approach integrates smart home automation, advanced audiovisual systems, and innovative security solutions to create living environments that are both stunning and intelligent.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              With a focus on detail and performance, we ensure that every element—from lighting to climate control—is perfectly tailored to the homeowner’s lifestyle.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#eaf4f4] p-8 rounded border border-[#00aca9]/30">
              <div className="text-3xl font-bold text-[#002d2c] mb-2">Over 25 Years</div>
              <p className="text-sm text-neutral-700">
                In seamless tech integration for luxury and commercial spaces across the Caribbean and North America.
              </p>
            </div>

            <div className="bg-[#fafafa] p-8 rounded border border-neutral-200">
              <h3 className="text-lg font-bold text-[#002d2c] mb-2">Sustainable Partners</h3>
              <p className="text-sm text-neutral-600">
                Collaborating with eco-friendly brands for energy-efficient, responsible solutions tailored for tropical climates.
              </p>
            </div>

            <div className="bg-[#fafafa] p-8 rounded border border-neutral-200">
              <h3 className="text-lg font-bold text-[#002d2c] mb-2">Innovation &amp; Details</h3>
              <p className="text-sm text-neutral-600">
                Cutting-edge technology with meticulous attention to every detail—from concealed wiring to zero-latency commands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOUBTS? LET US GUIDE YOU */}
      <section className="py-16 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c]">
            Doubts? Let Us Guide You Through!
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We understand that integrating advanced technology into your home can feel overwhelming. At Luxury Villa Technologies, we are here to make the process seamless and stress-free. From the initial consultation to final implementation, we will guide you through every step, answering any questions you may have and ensuring complete clarity. Let us handle the details, so you can enjoy the luxury and convenience of your dream home.
          </p>
        </div>
      </section>

      {/* 4. FOUNDERS' TIMELINE */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Heritage &amp; History</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#002d2c]">
              A journey of two friends that started back in 2016
            </h2>
          </div>

          <div className="space-y-12">
            {/* 1. Michel */}
            <div className="border-l-4 border-[#00aca9] pl-6 ml-2 space-y-2">
              <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">35 Years Heritage</span>
              <h3 className="text-xl font-bold text-[#002d2c]">Michel arrived in St. Maarten</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Michel Maduro’s career as a network and systems engineer began 35 years ago in Sint Maarten, managing the island’s first computer-controlled conference center. He co-founded Network IDL, the first ISP serving both Dutch and French sides and neighboring islands. IDL started as a dial-up ISP and quickly became the first wireless ISP in the Caribbean, ahead of local carriers. Expanding his expertise, he designed and launched global ISP and VoIP solutions for US carriers, establishing himself as a telecom pioneer. He later oversaw inter-island data communications for the Social Security of the Netherlands Antilles and SZV.
              </p>
            </div>

            {/* 2. Hans */}
            <div className="border-l-4 border-[#00aca9] pl-6 ml-2 space-y-2">
              <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">2010 • November</span>
              <h3 className="text-xl font-bold text-[#002d2c]">Hans moved to St. Maarten</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Hans de Bruyne founded his first consultancy, Total Quality Management (ATQ), while studying Commercial Electrical Engineering at Haagse Hoge School in The Hague. Over the next 20 years, he developed a vast network and expertise in business and organizational consultancy, providing change management, OSHAH, QS/QA, and outsourcing services to over 60 companies. In 2010, he relocated to Sint Maarten to launch his next business venture.
              </p>
            </div>

            {/* 3. IMCS */}
            <div className="border-l-4 border-[#00aca9] pl-6 ml-2 space-y-2">
              <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">2016 • June</span>
              <h3 className="text-xl font-bold text-[#002d2c]">Joining forces as IMCS</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Together with his business partner Michel, they combined forces and in 2016 started IMCS, an IT &amp; Management Consultancy in Saint Martin. While IMCS managed the full IT landscape, Hans and Michel identified a niche market in the Caribbean: Home Automation and System Integration.
              </p>
            </div>

            {/* 4. LVT */}
            <div className="border-l-4 border-[#00aca9] pl-6 ml-2 space-y-2">
              <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">2022 • September</span>
              <h3 className="text-xl font-bold text-[#002d2c]">LVT was born</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By 2018, they successfully explored this market, leading to the establishment of Luxury Villa Technologies in 2022, focusing on automating and integrating technical systems in high-end villas and hotels. With offices in Saint Martin, the Dominican Republic, Lauderdale, and Jamaica, they design, install, and maintain Home Automation and System Integration solutions for luxury villas, hotels, and apartment buildings throughout the Caribbean.
              </p>
            </div>

            {/* 5. LVC */}
            <div className="border-l-4 border-[#00aca9] pl-6 ml-2 space-y-2">
              <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">2024 • July</span>
              <h3 className="text-xl font-bold text-[#002d2c]">Ever expanding, LVC</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Luxury Villa Care, established in July 2024, is a full-scope technical facility management company focused on ensuring the quality of technical installations for villas and hotels. Together with our sister company, Luxury Villa Technologies, we design, install, integrate, automate, and maintain the technical backbone for villas and hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM & BIO (Preserving exact live wording from current site) */}
      <section className="py-20 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            {/* Note: The live site contains the exact heading "Meat the team" which we preserve in Current mode */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c]">
              Meat the team behind Luxury Villa Technologies
            </h2>
            <p className="text-neutral-500 text-xs italic">
              A common concern a visitor experiences is how well will the product or service be supported. Introducing the team eases fears while showing confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="bg-white p-8 rounded border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#002d2c]">Michel Maduro</h3>
              <div className="text-xs font-semibold text-[#00aca9] mb-4">Co-Founder &amp; CTO</div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Over 35 years in network and systems engineering. Pioneer of Caribbean wireless ISPs, enterprise telecommunications, and government IT infrastructures.
              </p>
            </div>

            <div className="bg-white p-8 rounded border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#002d2c]">Hans de Bruyne</h3>
              <div className="text-xs font-semibold text-[#00aca9] mb-4">Co-Founder &amp; Managing Director</div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Commercial Electrical Engineering graduate from The Hague. Over 20 years leading Total Quality Management (ATQ) across 60+ European and Caribbean organizations.
              </p>
            </div>
          </div>

          <div className="bg-[#002d2c] text-white p-8 rounded text-center space-y-4 mt-8">
            <p className="text-sm sm:text-base leading-relaxed">
              We invite you for a personal consultation to brainstorm about how we design your technical systems that will lead to bespoke automation for your villa. An email to <strong className="text-[#00aca9]">info@LVT.sx</strong> is all it takes to start!
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="lvt-wf-button text-xs uppercase tracking-wider"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MARKETS WE SERVE */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold text-[#002d2c]">Markets we serve</h2>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            Global Reach, Local Expertise – Empowering Our Clients Everywhere one integration at the time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-4">
            <div className="p-6 rounded bg-[#fafafa] border border-neutral-200">
              <h3 className="font-bold text-[#002d2c]">Caribbean</h3>
              <p className="text-xs text-neutral-500 mt-1">Sint Maarten, Saint Martin, St. Barth, Anguilla, DR, Jamaica</p>
            </div>
            <div className="p-6 rounded bg-[#fafafa] border border-neutral-200">
              <h3 className="font-bold text-[#002d2c]">North America</h3>
              <p className="text-xs text-neutral-500 mt-1">Fort Lauderdale, Miami, Virginia, North Carolina</p>
            </div>
            <div className="p-6 rounded bg-[#fafafa] border border-neutral-200">
              <h3 className="font-bold text-[#002d2c]">Central America</h3>
              <p className="text-xs text-neutral-500 mt-1">Specialized Resort &amp; Villa Deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c]">
            Elevate your villa experience today!
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
            Ready to turn your home into a luxurious oasis? Partner with the caribbean’s leading agency for integrated villa solutions!
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-sm tracking-wide uppercase px-8 py-3"
            >
              Connect with us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
