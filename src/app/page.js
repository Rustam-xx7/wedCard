"use client";

import React, { useState, useEffect } from "react";
import Envelope from "@/components/Envelope";
import Petals from "@/components/Petals";
import Navigation from "@/components/Navigation";
import RsvpModal from "@/components/RsvpModal";
import InviteTab from "@/components/InviteTab";
import StoryTab from "@/components/StoryTab";
import DateTab from "@/components/DateTab";

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [activeTab, setActiveTab] = useState("invite"); // invite, story, date
  const [showRsvp, setShowRsvp] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-grain" />

      {/* 3D Envelope Intro Screen */}
      <Envelope onOpenComplete={handleEnvelopeOpen} />

      {/* Main Content (revealed after envelope opens) */}
      {envelopeOpened && (
        <div className="fade-up-initial [animation-duration:1.5s]">
          {/* Falling Petals overlay */}
          <Petals />

          {/* Top App Bar */}
          <header className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 z-50">
            <span 
              className="material-symbols-outlined text-primary cursor-pointer hover:text-champagne-gold transition-colors select-none"
              onClick={() => setShowRsvp(true)}
            >
              menu
            </span>
            <h1 className="text-xl md:text-2xl font-serif text-champagne-gold italic tracking-wide select-none">
              E&A
            </h1>
            <span 
              className="material-symbols-outlined text-primary cursor-pointer hover:text-champagne-gold transition-colors select-none animate-pulse"
              style={{ fontVariationSettings: "'FILL' 1" }}
              onClick={() => setShowRsvp(true)}
            >
              favorite
            </span>
          </header>

          {/* Spacer for Fixed Header */}
          <div className="h-16" />

          {/* Dynamic Tab Renderer */}
          <div className="pb-24 md:pb-28">
            {activeTab === "invite" && <InviteTab onRsvpClick={() => setShowRsvp(true)} />}
            {activeTab === "story" && <StoryTab />}
            {activeTab === "date" && <DateTab />}
          </div>

          {/* Floating Action Button (RSVP) */}
          <button
            onClick={() => setShowRsvp(true)}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-40 bg-burgundy hover:bg-burgundy/90 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            title="RSVP Now"
          >
            <span className="material-symbols-outlined text-2xl select-none">event_available</span>
          </button>

          {/* Bottom Navigation */}
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* RSVP Modal */}
          <RsvpModal isOpen={showRsvp} onClose={() => setShowRsvp(false)} />
        </div>
      )}
    </main>
  );
}
