"use client";

import { useState } from "react";

export default function WhatsAppContact() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const phoneNumber = "917096273336";
    const encoded = encodeURIComponent(
      message || "Hello Invar Pharmaceutical, I would like to know more about your products."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div className="mt-8">
      <label
        htmlFor="wa-message"
        className="block text-[12px] uppercase tracking-[0.18em] text-[color:var(--text)]/70"
      >
        Send us a message on WhatsApp
      </label>
      <textarea
        id="wa-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder="Tell us what you are looking for..."
        className="mt-3 w-full resize-none rounded-2xl border border-[color:var(--ink)]/15 bg-[color:var(--surface)] px-5 py-4 text-[15px] text-[color:var(--ink)] placeholder:text-[color:var(--text)]/50 transition-colors focus:border-[color:var(--sage-deep)] focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="mt-4 rounded-full bg-[color:var(--sage)] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
      >
        Contact Us
      </button>
    </div>
  );
}
