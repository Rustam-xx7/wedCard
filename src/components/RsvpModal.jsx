"use client";
import React, { useState } from "react";

export default function RsvpModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState(true); // true = attending, false = declined
  const [guests, setGuests] = useState("1");
  const [dietary, setDietary] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Persist in localStorage
      localStorage.setItem("rsvp_submitted", JSON.stringify({ name, email, attending, guests, dietary, message }));
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest-green/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-cream-foundation border border-outline-variant/50 rounded-xl shadow-2xl p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-soft-ink/70 hover:text-soft-ink transition-colors"
        >
          <span className="material-symbols-outlined text-2xl select-none">close</span>
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-forest-green">RSVP</h2>
              <p className="font-sans text-xs uppercase tracking-widest text-champagne-gold mt-1">
                Kindly respond by August 31, 2025
              </p>
              <div className="w-12 h-px bg-champagne-gold mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-soft-ink font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-champagne-gold focus:outline-none transition-colors text-soft-ink"
                  placeholder="E.g., Jane Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-soft-ink font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-champagne-gold focus:outline-none transition-colors text-soft-ink"
                  placeholder="E.g., jane@example.com"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-soft-ink font-semibold mb-2">
                  Will You Attend?
                </label>
                <div className="flex gap-4">
                  {/* Accept */}
                  <button
                    type="button"
                    onClick={() => setAttending(true)}
                    className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 border transition-all duration-300 ${
                      attending
                        ? "bg-forest-green border-forest-green text-white shadow-md scale-102"
                        : "bg-transparent border-outline-variant/50 text-soft-ink/75 hover:bg-forest-green/5"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span className="text-xs font-semibold tracking-wider">Joyfully Accept</span>
                  </button>

                  {/* Decline */}
                  <button
                    type="button"
                    onClick={() => setAttending(false)}
                    className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 border transition-all duration-300 ${
                      !attending
                        ? "bg-dusty-rose border-dusty-rose text-white shadow-md scale-102"
                        : "bg-transparent border-outline-variant/50 text-soft-ink/75 hover:bg-dusty-rose/5"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">cancel</span>
                    <span className="text-xs font-semibold tracking-wider">Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {attending && (
                <>
                  {/* Number of Guests */}
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-soft-ink font-semibold mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-champagne-gold focus:outline-none transition-colors text-soft-ink"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>

                  {/* Dietary Restrictions */}
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-soft-ink font-semibold mb-1">
                      Dietary Restrictions / Allergies
                    </label>
                    <input
                      type="text"
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-champagne-gold focus:outline-none transition-colors text-soft-ink"
                      placeholder="E.g., Vegetarian, Gluten-free, none"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-soft-ink font-semibold mb-1">
                  Leave a Note for the Couple
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="w-full bg-transparent border border-outline-variant/50 rounded-lg p-3 focus:border-champagne-gold focus:outline-none transition-colors text-soft-ink"
                  placeholder="Share your warm wishes..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-champagne-gold hover:bg-champagne-gold/90 text-forest-green font-semibold py-4 rounded-lg tracking-widest uppercase text-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg active:translate-y-0 disabled:opacity-50"
            >
              {loading ? "Sending Response..." : "Send RSVP"}
            </button>
          </form>
        ) : (
          <div className="text-center py-10 space-y-6">
            <div className="w-20 h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto text-forest-green animate-bounce">
              <span className="material-symbols-outlined text-4xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-forest-green">Thank You!</h3>
              <p className="font-sans text-sm text-soft-ink leading-relaxed max-w-sm mx-auto">
                {attending
                  ? "We are thrilled that you can join us! We look forward to celebrating this beautiful day together."
                  : "We are sorry you won't be able to make it, but we appreciate your warm thoughts and wishes."}
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-forest-green hover:bg-forest-green/95 text-white font-sans text-xs tracking-wider uppercase rounded-full transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
