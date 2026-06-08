"use client";
import React, { useEffect } from "react";

export default function InviteTab({ onRsvpClick }) {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll(".fade-in-section");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="relative z-10 w-full min-h-screen">
      {/* Introduction */}
      <section className="relative px-6 py-20 md:py-28 flex flex-col items-center text-center parchment-texture justify-center min-h-[500px]">
        <div className="fade-in-section max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-champagne-gold text-5xl animate-pulse select-none">
              auto_awesome
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-forest-green tracking-wide">
            Our Hearts Join
          </h1>
          <div className="w-16 h-[1px] bg-champagne-gold mx-auto my-6" />
          <p className="text-base md:text-lg text-soft-ink leading-relaxed font-light px-4">
            Together with our families, we invite you to share in our joy as we exchange our vows and begin our new life together. Your presence is the greatest gift we could receive.
          </p>
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-serif italic text-primary">
              Evelyn & Arthur
            </h2>
            <p className="text-xs font-sans tracking-[0.2em] text-outline mt-2 uppercase font-medium">
              Established Twenty Twenty Five
            </p>
          </div>
        </div>
        
        {/* Decorative Floral illustration on the left */}
        <div className="absolute left-0 bottom-10 opacity-30 select-none hidden lg:block w-48 h-48 pointer-events-none">
          <img
            className="w-full h-full object-contain"
            alt="Floral illustration"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdk1Ow8wNzxoPXiKAhJN-fkHq3VqF-bgEDzabo6o490XILcR60AV8oC-L45ocQy1Ew_55nHkpeVvsQYFEUzTixMmNY94hvUay9mztdoAw4tAguO5NB2oFvSNBI21OSTv4Ywt6FiXzs7Df04UMyccFShOuo3TBISUg2jriKiTdjA2QMZtxqwvQlMtkje32r73scstrniF3-tLB_q7LUJyBVsMZtZxAe5BkeNjj3P2281UPilmgrt4QLb6DSwgFToRWC-c2enmfpgtg"
          />
        </div>
      </section>

      {/* Visual Impact (Maroon Bento) */}
      <section className="maroon-texture py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 fade-in-section">
            <div className="relative group overflow-hidden rounded-xl shadow-xl border border-champagne-gold/20">
              <img
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Wedding celebration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqN6LUOgjYvJ2T-8R76JBUetbKYHsDx9cVmXsTqW2mcuu4TErBw35hN6l_tiRytW_TEOWqDyMLbQyvPV4tbrr8XoVuilodrrxvz1NY2eXqonD9Xrs9XSgwjmKzYEuxhhHuaaEkRXOk_6qL0_1EsiYwhWOuLjeuuFLjCXU-CaRUIOkwMW1Xapgj14COeBIY-ARWMnPG1l8gQm-h1glJEpqIjjsq7n1uAa6GKDpIhdIsoq6IrdY36Tw0TgZeXt0z8VTKovI6H0X_V6s"
              />
              <div className="absolute inset-0 bg-forest-green/20 group-hover:bg-forest-green/0 transition-colors duration-500" />
            </div>
          </div>
          
          <div className="md:col-span-5 space-y-6 fade-in-section">
            <div className="bg-cream-foundation/5 backdrop-blur-sm p-8 rounded-xl border border-champagne-gold/20">
              <p className="text-[10px] font-sans tracking-widest text-secondary-fixed mb-2 uppercase font-semibold">
                The Celebration
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-secondary-fixed mb-4">
                A Night Under the Stars
              </h3>
              <p className="text-sm md:text-base text-surface-container-low/95 leading-relaxed font-light">
                Join us for an evening of enchantment as we celebrate our union amidst the whispering pines and the soft glow of candlelight.
              </p>
              <button 
                onClick={onRsvpClick}
                className="mt-8 px-8 py-3.5 bg-champagne-gold hover:bg-champagne-gold/90 hover:scale-105 active:scale-95 text-forest-green font-sans font-semibold tracking-widest text-xs rounded-full transition-all duration-300 shadow-lg"
              >
                SAVE THE DATE & RSVP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Bento Grid */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bento Item 1 */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center fade-in-section border border-outline-variant/20 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <span className="material-symbols-outlined text-champagne-gold mb-4 text-3xl select-none">
              calendar_today
            </span>
            <h4 className="text-[10px] font-sans tracking-widest text-forest-green mb-2 uppercase font-semibold">
              When
            </h4>
            <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light">
              September 24th, 2025<br />Four in the afternoon
            </p>
          </div>
          
          {/* Bento Item 2 */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center fade-in-section border border-outline-variant/20 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <span className="material-symbols-outlined text-champagne-gold mb-4 text-3xl select-none">
              location_on
            </span>
            <h4 className="text-[10px] font-sans tracking-widest text-forest-green mb-2 uppercase font-semibold">
              Where
            </h4>
            <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light">
              The Ethereal Gardens<br />Valle de Bravo, Mexico
            </p>
          </div>
          
          {/* Bento Item 3 */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center fade-in-section border border-outline-variant/20 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <span className="material-symbols-outlined text-champagne-gold mb-4 text-3xl select-none">
              local_bar
            </span>
            <h4 className="text-[10px] font-sans tracking-widest text-forest-green mb-2 uppercase font-semibold">
              Attire
            </h4>
            <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light">
              Black Tie Optional<br />Formal & Elegant
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
