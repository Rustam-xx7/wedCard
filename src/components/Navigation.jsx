"use client";
import React from "react";

export default function Navigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: "invite", label: "Invite", icon: "mail" },
    { id: "story", label: "Our Story", icon: "auto_stories" },
    { id: "date", label: "The Date", icon: "calendar_today" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-md w-full z-50 bg-cream-foundation/90 backdrop-blur-lg flex justify-around items-center px-6 py-3 pb-safe md:py-3 border-t md:border border-outline-variant/30 shadow-xl rounded-t-2xl md:rounded-full">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center min-w-16 transition-all duration-300 ${
              isActive
                ? "text-champagne-gold scale-105"
                : "text-on-surface-variant/70 hover:text-champagne-gold"
            }`}
          >
            <span
              className="material-symbols-outlined select-none"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-sans tracking-widest uppercase mt-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
