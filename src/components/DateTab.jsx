"use client";
import React, { useEffect, useState } from "react";

export default function DateTab() {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00" });

  useEffect(() => {
    // Reveal animation observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    // Dynamic countdown target computation
    const currentYear = new Date().getFullYear();
    let targetDate = new Date(`September 24, ${currentYear} 16:30:00`).getTime();
    if (targetDate - new Date().getTime() < 0) {
      targetDate = new Date(`September 24, ${currentYear + 1} 16:30:00`).getTime();
    }

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative z-10 w-full min-h-screen">
      {/* SVG Path Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-25">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 3000">
          <path
            className="guide-line stroke-burgundy fill-none stroke-[1.5]"
            d="M 400 100 Q 100 200 150 400 T 350 700 T 50 1100 T 300 1500 T 100 2000 T 300 2500"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Header / Hero Section */}
      <header className="relative pt-16 pb-24 px-6 overflow-hidden">
        <div className="max-w-screen-md mx-auto text-center space-y-8">
          <div className="space-y-2 reveal-on-scroll">
            <h1 className="font-script text-6xl text-burgundy">Evelyn & Arthur</h1>
            <p className="font-sans text-sm italic text-on-surface-variant">
              Happily, we are getting married!
            </p>
          </div>

          <div className="relative flex justify-center items-center gap-4 reveal-on-scroll pt-4">
            {/* Polaroid 1 */}
            <div className="w-[45%] aspect-[4/5] relative -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 z-10">
              <div className="w-full h-full overflow-hidden shadow-2xl mask-organic-1 bg-white p-2 border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover select-none"
                  alt="Couple profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP_cU6pqNhfrJYl_P9LiezbspdZV1z1p_pDZtykG0Qq3XgzeqbnzlhgF0FKkk3ouPsga3vpkqO_uo9OEEG_5Z7XKsz55jeR6_BPcO09wyDhpzL3XuwHnOVtzGSuCxS3i80uuciES-6IAdxZtlWda9hlPnFjhMGWsCOEhCsSiCBcII7O6zG15fEnlYALuPqMmRd01F63bir7KYvb0-Ojlg-Yu8vzacNKJOYTROOmKePsOJvNDxrAFuFfFpohlcAXUaQz7-w5v_LcRY"
                />
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="w-[38%] aspect-[4/5] relative translate-y-8 rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <div className="w-full h-full overflow-hidden shadow-2xl mask-organic-2 bg-white p-2 border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover select-none"
                  alt="Couple laughing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrLq8CVQkYX-cxkibGPvxszR339ENbk9qgQQrTkYF-D0eh1VQjat3DPPJGvby6wYKf4gK19MAljGHUoo8KFH13l3m65RiLNNqIZdfafSWWd19cobvhC5p0LfqLIDrf3ksUJ_P1eyAObqxm6qTM-eUEKTgD_DBPdJCDwldZB7uNgsDG3t3YGqNbvN1k2eAY51yIkQMDWbYE50HiHScyBi4JRKMfyYrnmWxrS99tuASeOtrd42VCt5qKt1VtZiQI-Pmfqt1YlTXVjY"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Accent banner ("Waiting with impatience") */}
      <section className="py-20 bg-burgundy texture-accent text-white relative">
        <svg className="absolute top-0 left-0 w-full rotate-180" height="40" preserveAspectRatio="none" viewBox="0 0 100 40">
          <path d="M0 0 C 25 40, 75 40, 100 0 L 100 40 L 0 40 Z" fill="#faf9f5" />
        </svg>
        <div className="max-w-sm mx-auto px-6 text-center space-y-6 reveal-on-scroll">
          <p className="text-sm opacity-90 italic font-light">
            You didn't just receive this invitation! On this special day for us, we really want you to be there!
          </p>
          <h3 className="font-script text-4xl text-white">We are waiting for you with impatience</h3>
          <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg animate-pulse">
            <span className="material-symbols-outlined text-burgundy text-2xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" height="40" preserveAspectRatio="none" viewBox="0 0 100 40">
          <path d="M0 0 C 25 40, 75 40, 100 0 L 100 40 L 0 40 Z" fill="#630018" />
        </svg>
      </section>

      {/* Calendar Section */}
      <section className="py-20 text-center reveal-on-scroll">
        <div className="max-w-md mx-auto px-6 space-y-6">
          <p className="text-sm text-soft-ink font-light leading-relaxed">
            On this wonderful day, we want to share bright moments and sincere smiles with you!
          </p>
          <h3 className="font-script text-5xl text-burgundy">Our September</h3>
          <div className="flex justify-center gap-3 items-center pt-4">
            <div className="calendar-box text-sm font-semibold rounded-md">22</div>
            <div className="calendar-box text-sm font-semibold rounded-md">23</div>
            <div className="calendar-box active text-sm font-bold rounded-md shadow-md">24</div>
            <div className="calendar-box text-sm font-semibold rounded-md">25</div>
            <div className="calendar-box text-sm font-semibold rounded-md">26</div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-md mx-auto space-y-16 relative">
          
          {/* Guest Gathering */}
          <div className="relative pl-20 reveal-on-scroll">
            <div className="absolute left-0 top-0 text-burgundy font-serif text-lg font-bold bg-cream-foundation border border-outline-variant/30 px-3 py-1 rounded shadow-sm select-none">
              16:30
            </div>
            <h4 className="font-script text-3xl text-burgundy-light leading-none">Guest Gathering</h4>
            <p className="text-sm text-soft-ink leading-relaxed font-light mt-2">
              Time will fly by with a glass of champagne and pleasant conversation.
            </p>
          </div>

          {/* Ceremony */}
          <div className="relative pr-20 text-right reveal-on-scroll">
            <div className="absolute right-0 top-0 text-burgundy font-serif text-lg font-bold bg-cream-foundation border border-outline-variant/30 px-3 py-1 rounded shadow-sm select-none">
              17:00
            </div>
            <h4 className="font-script text-3xl text-burgundy-light leading-none">Ceremony</h4>
            <p className="text-sm text-soft-ink leading-relaxed font-light mt-2">
              Just in case, prepare handkerchiefs for a touching moment.
            </p>
          </div>

          {/* Banquet */}
          <div className="relative pl-20 reveal-on-scroll">
            <div className="absolute left-0 top-0 text-burgundy font-serif text-lg font-bold bg-cream-foundation border border-outline-variant/30 px-3 py-1 rounded shadow-sm select-none">
              18:30
            </div>
            <h4 className="font-script text-3xl text-burgundy-light leading-none">Banquet</h4>
            <p className="text-sm text-soft-ink leading-relaxed font-light mt-2">
              Delicious food and a fun program from our wonderful host.
            </p>
          </div>

        </div>
      </section>

      {/* Countdown & Arch Polaroid */}
      <section className="py-20 px-6 bg-cream-foundation/50 border-y border-outline-variant/15 reveal-on-scroll">
        <div className="max-w-lg mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h3 className="font-script text-4xl text-burgundy">We will say "I do" in...</h3>
            <div className="flex justify-center items-center gap-6" id="countdown">
              
              <div className="flex flex-col min-w-[60px]">
                <span className="text-4xl font-serif text-burgundy font-semibold">{timeLeft.days}</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-soft-ink/60 mt-1">Days</span>
              </div>
              <div className="w-px h-8 bg-outline-variant/30" />
              
              <div className="flex flex-col min-w-[60px]">
                <span className="text-4xl font-serif text-burgundy font-semibold">{timeLeft.hours}</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-soft-ink/60 mt-1">Hrs</span>
              </div>
              <div className="w-px h-8 bg-outline-variant/30" />
              
              <div className="flex flex-col min-w-[60px]">
                <span className="text-4xl font-serif text-burgundy font-semibold">{timeLeft.minutes}</span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-soft-ink/60 mt-1">Min</span>
              </div>

            </div>
          </div>

          {/* Arch Picture frame */}
          <div className="relative w-full max-w-[280px] mx-auto aspect-square">
            <div className="w-full h-full overflow-hidden shadow-2xl bg-white p-3 mask-arch border border-outline-variant/30">
              <img
                className="w-full h-full object-cover select-none"
                alt="Kiss ceremony"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_iKGfymIz8nNrQybi28kF_28fD4IzqmXsLqqnAtq8QjGG5uirOJy2iKQ5ymR0dSK8ykaamjqusHJdRaE0APXa4OUxdNYlev-4MfHdnezZfDUmEOSsR1xAOmyD9gQN0Nw4vAkuxFh8IbkqGJmNikJyj6mRFJExQrHPaye-R1daLq9XVkYsr54A0-XMaYvFTcuGdoL_7uZd5ovYy1V0hCLbTv9CHnoZAVRnViI-7f2NM2BPsZ4046Ks133r6L-WXJCc0qJYMoT20aI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-burgundy texture-accent text-white py-20 px-6 relative">
        <svg className="absolute top-0 left-0 w-full" height="40" preserveAspectRatio="none" viewBox="0 0 100 40">
          <path d="M0 40 C 25 0, 75 0, 100 40 L 100 0 L 0 0 Z" fill="#faf9f5" />
        </svg>
        <div className="max-w-sm mx-auto text-center space-y-12 reveal-on-scroll">
          <div className="space-y-4">
            <h3 className="font-script text-5xl">Waiting for you</h3>
            <div className="w-12 h-[1px] bg-white/30 mx-auto" />
            <p className="text-base font-light opacity-90 leading-relaxed">
              The Glass House Conservatory<br />
              123 Willow Lane, Oakhaven Valley
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=The+Glass+House+Conservatory+Oakhaven+Valley"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white hover:bg-cream-foundation active:scale-98 text-burgundy py-4 rounded-lg font-sans font-bold text-xs tracking-widest transition-all duration-300 shadow-lg uppercase"
          >
            Location Map
          </a>

          <div className="pt-8 opacity-80 space-y-1 select-none">
            <p className="font-script text-3xl">E & A</p>
            <p className="text-[10px] font-sans tracking-[0.3em] uppercase">#ETHEREALUNION2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
