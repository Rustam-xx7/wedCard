"use client";
import React, { useEffect, useRef } from "react";

export default function StoryTab() {
  const pathRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Reveal animation observer
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    // Scroll dashed path animation
    const path = pathRef.current;
    let pathLength = 0;
    if (path) {
      pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength} ${pathLength}`;
      path.style.strokeDashoffset = pathLength;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      if (path) {
        const drawLength = pathLength * (scrollPercent * 1.8); // sync drawing speed
        path.style.strokeDashoffset = Math.max(0, pathLength - drawLength);
      }

      // Parallax for hero text
      const hero = heroRef.current;
      if (hero) {
        hero.style.transform = `translateY(${scrollTop * 0.25}px)`;
        hero.style.opacity = Math.max(0, 1 - scrollTop / 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-10 w-full min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 w-full h-full animate-ken-burns">
          <img
            className="w-full h-full object-cover"
            alt="Couple field at sunset"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGeq1L-p46fHfJnKLH-_DDVYKM_AvFZQRGPjKE2YsiX40LtkKmy4AjMFJJ6ZnEej006rsU6twsreJwFHYZCXia_axSG5FI5AMtgaNMdnzrDnV9dTnrUXPdO9Vmk5DY3BgG1W1QqPGpxip-TPSpHJxdrbXUGm9UYXgTaQ792rXvbbKEZc6rqlBDxZwr-3b7mWKPI65nh9AYLVbztfD7zgYZsKCTc7-gvVSuziuhtiqmFqFRIWO_DIaAojaV2zXF4n8CsZqc5j_Q_-U"
          />
        </div>
        
        <div ref={heroRef} className="relative z-20 text-center space-y-4 px-6">
          <p className="text-xs font-sans tracking-[0.25em] text-white uppercase font-medium">
            A Journey of Two Hearts
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide">
            Our Love Story
          </h2>
          <div className="w-12 h-[1px] bg-champagne-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Story Gallery */}
      <section className="relative px-6 md:px-16 py-20 max-w-6xl mx-auto overflow-visible">
        {/* Dynamic Dashed SVG Path (Desktop only) */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block"
          viewBox="0 0 1200 1600"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            className="dashed-path"
            d="M600,0 C800,200 400,400 900,600 C1400,800 200,1000 600,1200 C1000,1400 400,1500 600,1600"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
            opacity="0.45"
          />
        </svg>

        <div className="text-center mb-20 relative z-10 reveal-on-scroll">
          <h3 className="text-3xl font-serif text-forest-green mb-2">
            Our Story in Frames
          </h3>
          <p className="text-base md:text-lg text-soft-ink italic font-light">
            The moments that led us to forever
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative z-10">
          
          {/* Story Item 1 */}
          <div className="reveal-on-scroll flex flex-col space-y-6">
            <div className="image-container relative">
              <div className="glow-accent absolute inset-0 bg-champagne-gold/15 blur-2xl opacity-0 transition-all duration-700 hover:opacity-100" />
              <div className="torn-paper aspect-[4/5] overflow-hidden bg-surface shadow-xl animate-float">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  alt="The First Encounter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-qafGz1C8-l4NI-sBElz0tSDIztVlmtzPodYKQAb6Kv9gAqatdCbY6ejLI7m3V63M6fqS3VlVxk0mdjrhhk5HFsCog5EGoVDeXd-47n7GrylfQKY-hk45tmmQTSfE3dZnpjt2oWcGizN-HyZk5D3OyhXbPDni6D6ySgCdbf46JXTUcHNxdsMEZQIqMg_c1ttQ7ahHulf8-Vct5bl9psxFMniy7omGXvJEOvhBTRphUVPsjWgitdmqk3bWzikEyoADM9e-AcU57Lw"
                />
              </div>
            </div>
            <div className="pl-4 border-l-2 border-champagne-gold space-y-1">
              <span className="text-xs font-sans tracking-widest text-champagne-gold uppercase font-bold">
                October 2018
              </span>
              <h4 className="text-xl font-serif text-forest-green">
                The First Encounter
              </h4>
              <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light pt-2">
                It began in a small bookstore in London, where we both reached for the same tattered copy of romantic poetry. A shared smile turned into a four-hour conversation over Earl Grey.
              </p>
            </div>
          </div>

          {/* Story Item 2 */}
          <div className="reveal-on-scroll flex flex-col space-y-6 md:mt-32">
            <div className="image-container relative">
              <div className="glow-accent absolute inset-0 bg-champagne-gold/15 blur-2xl opacity-0 transition-all duration-700 hover:opacity-100" />
              <div className="torn-paper aspect-[4/5] overflow-hidden bg-surface shadow-xl animate-float" style={{ animationDelay: "-1.5s" }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  alt="Adventures Together"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDwkds2QH18MKOx0lADgBIfo9T-18EpaVJ8TkZ7wTybZR9-MjJdcCnNIhNtD2xu0y6YOhTP2Ryg3yUzVaEKY8RQnk3UbwZvzadUNR6lm_DV4gg3VlK_FYc4JwqcdCpwkpRIkgMQ2Ah7A0MNms0S7e-kldPdR-T0323qBkyMk0Z2rXmYYIPTUrybMC3oGYH0BalLQ2A7Io2fn9SOzIqlhLjDPFAJuc4ABY-mwBkFxJ5lYRfndIyogv7G8HgMUHPGmKZsxwsPZzF3Gw"
                />
              </div>
            </div>
            <div className="pl-4 border-l-2 border-champagne-gold space-y-1">
              <span className="text-xs font-sans tracking-widest text-champagne-gold uppercase font-bold">
                June 2020
              </span>
              <h4 className="text-xl font-serif text-forest-green">
                Adventures Together
              </h4>
              <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light pt-2">
                From hiking the Scottish Highlands to exploring the hidden alleys of Kyoto, our love grew in the spaces between destinations and the quiet moments of travel.
              </p>
            </div>
          </div>

          {/* Story Item 3 */}
          <div className="reveal-on-scroll flex flex-col space-y-6">
            <div className="image-container relative">
              <div className="glow-accent absolute inset-0 bg-champagne-gold/15 blur-2xl opacity-0 transition-all duration-700 hover:opacity-100" />
              <div className="torn-paper aspect-[4/5] overflow-hidden bg-surface shadow-xl animate-float" style={{ animationDelay: "-3s" }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  alt="The Proposal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSPOF7U8UC-O_dP_UKNllwY0Jt6X8giB_O7Ba1y-ejc3HHwGH4eMqodeZhIdaC3WM3bcOYeS8ADIj8j4mhD1RoJ_S7njNMaxxD2oI3DyeLv-sV70ENB3gCr-KpBKVHMxSMfbiBgO_w30YXpXMEQdbM8_tFaXxq8F07CXGUmxYBIxlBw1WHivbcFybukHgCJlaTujsQOT3ZXQ7pwkccMQZ6KkBJuUCI9n-hI1g74si0jZo68HnA_bhDLZsP8sLpJCVVhK3jhsj-W8"
                />
              </div>
            </div>
            <div className="pl-4 border-l-2 border-champagne-gold space-y-1">
              <span className="text-xs font-sans tracking-widest text-champagne-gold uppercase font-bold">
                December 2023
              </span>
              <h4 className="text-xl font-serif text-forest-green">
                The Proposal
              </h4>
              <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light pt-2">
                Under the soft glow of winter lights in Central Park, Arthur asked the question that would change our lives forever. A night of champagne and tears of joy.
              </p>
            </div>
          </div>

          {/* Story Item 4 */}
          <div className="reveal-on-scroll flex flex-col space-y-6 md:mt-32">
            <div className="image-container relative">
              <div className="glow-accent absolute inset-0 bg-champagne-gold/15 blur-2xl opacity-0 transition-all duration-700 hover:opacity-100" />
              <div className="torn-paper aspect-[4/5] overflow-hidden bg-surface shadow-xl animate-float" style={{ animationDelay: "-4.5s" }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  alt="Beginning Forever"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaavEDlgrekcrKGnYs0gTQrXlHxQEckyzXZViW2P7wF8OIgxW4DebHtaDXGBD0nEk71-gv4k9sh76ZokmnIp2dYDXeEAhmHuLnJ7YH8EpeD2z3xZ-4Gn5tnLF4Xc665s2bhH632AVMfIGBb-iFGK3u_QvXslML23Qbb8rtDlNSJX0WdO3aWPKdbYKp-6ScnWfhWhKpwRNUmgMGt7Akbx8VbKnAd1zYRFbHUPmKDGZz0m1VHe6-jxQ5gr1wt3VGZzPW4k6bFsahLCc"
                />
              </div>
            </div>
            <div className="pl-4 border-l-2 border-champagne-gold space-y-1">
              <span className="text-xs font-sans tracking-widest text-champagne-gold uppercase font-bold">
                Present Day
              </span>
              <h4 className="text-xl font-serif text-forest-green">
                Beginning Forever
              </h4>
              <p className="text-sm md:text-base text-soft-ink leading-relaxed font-light pt-2">
                And now, we stand on the threshold of our greatest adventure yet. We are so honored to have you join us as we say 'I do'.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-deep-maroon py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 reveal-on-scroll flex flex-col items-center">
          <span className="material-symbols-outlined text-champagne-gold text-5xl select-none" style={{ fontVariationSettings: "'wght' 200" }}>
            format_quote
          </span>
          <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight font-medium max-w-2xl">
            "I have found the one whom my soul loves."
          </h3>
          <p className="text-[10px] font-sans tracking-[0.25em] text-champagne-gold uppercase font-semibold pt-4">
            — Song of Solomon 3:4 —
          </p>
        </div>
      </section>
    </div>
  );
}
