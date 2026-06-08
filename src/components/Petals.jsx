"use client";
import React, { useEffect, useState } from "react";

export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const activeTimeouts = [];

    const createPetal = () => {
      const startX = Math.random() * 100;
      const duration = 6 + Math.random() * 8;
      const size = 10 + Math.random() * 15;
      const id = Math.random().toString(36).substring(2, 11);
      
      const newPetal = {
        id,
        left: `${startX}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
      };

      setPetals((prev) => [...prev, newPetal]);

      // Remove after animation completes
      const tId = setTimeout(() => {
        setPetals((prev) => prev.filter((p) => p.id !== id));
      }, duration * 1000);
      
      activeTimeouts.push(tId);
    };

    // Initialize first 8 petals instantly
    for (let i = 0; i < 8; i++) {
      createPetal();
    }

    const interval = setInterval(createPetal, 1500);
    return () => {
      clearInterval(interval);
      activeTimeouts.forEach((tId) => clearTimeout(tId));
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            top: "-20px",
            width: petal.width,
            height: petal.height,
            animation: `petal-fall ${petal.animationDuration} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
