"use client";
import React, { useState } from "react";

export default function Envelope({ onOpenComplete }) {
  const [step, setStep] = useState("idle"); // idle, breaking-seal, opening-flap, sliding-card, revealing, completed

  const handleOpen = () => {
    if (step !== "idle") return;
    setStep("breaking-seal");
    
    // Break seal animation starts instantly, then after 400ms open flap
    setTimeout(() => {
      setStep("opening-flap");
      
      // Open flap takes 600ms, then slide card up
      setTimeout(() => {
        setStep("sliding-card");
        
        // Slide card takes 800ms, then reveal main content
        setTimeout(() => {
          setStep("revealing");
          
          // Complete animation after 800ms
          setTimeout(() => {
            setStep("completed");
            if (onOpenComplete) {
              onOpenComplete();
            }
          }, 800);
        }, 800);
      }, 600);
    }, 400);
  };

  if (step === "completed") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream-foundation transition-all duration-1000 ${
        step === "revealing" ? "opacity-0 pointer-events-none" : ""
      }`}
      id="intro-screen"
    >
      <div 
        className="envelope-container relative w-72 h-48 md:w-96 md:h-64 cursor-pointer group" 
        onClick={handleOpen}
      >
        {/* Back of Envelope */}
        <div className="absolute inset-0 bg-surface-container-high border border-outline-variant shadow-xl rounded-sm"></div>
        
        {/* The Card Inside */}
        <div
          className={`absolute inset-x-2 top-2 h-[90%] bg-cream-foundation shadow-md border border-outline-variant/30 flex flex-col items-center justify-center p-6 transition-all duration-[1200ms] ease-out z-20 ${
            step === "sliding-card" || step === "revealing"
              ? "-translate-y-[150%] scale-[1.2] opacity-0"
              : ""
          }`}
          id="invitation-card"
        >
          <span className="font-serif text-2xl md:text-3xl text-champagne-gold italic mb-2">E & A</span>
          <p className="font-sans text-xs tracking-widest uppercase text-soft-ink">You are invited</p>
        </div>
        
        {/* Front Flaps */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div
            className={`absolute inset-0 bg-surface-container border-b border-outline-variant/50 envelope-flap ${
              step === "opening-flap" || step === "sliding-card" || step === "revealing"
                ? "opened-flap"
                : ""
            }`}
            id="envelope-flap"
          ></div>
        </div>
        
        {/* Wax Seal */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 md:w-20 md:h-20 bg-burgundy flex items-center justify-center rounded-full shadow-lg border-2 border-champagne-gold/30 transition-all duration-500 group-hover:scale-110 ${
            step !== "idle"
              ? "scale-0 rotate-45 opacity-0 pointer-events-none"
              : "scale-100 opacity-100"
          }`}
          id="wax-seal"
        >
          <div className="text-white font-serif text-xl md:text-2xl italic text-center leading-none select-none">E&A</div>
        </div>
        
        <p
          className={`absolute -bottom-16 left-1/2 -translate-x-1/2 font-sans text-xs tracking-widest text-on-surface-variant animate-pulse w-full text-center transition-opacity duration-300 ${
            step !== "idle" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          id="instruction"
        >
          Tap to open your invitation
        </p>
      </div>
    </div>
  );
}
