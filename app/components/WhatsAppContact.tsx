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
        className="block text-[12px] uppercase tracking-[0.18em] text-[#22302B]/55"
      >
        Send us a message on WhatsApp
      </label>
      <textarea
        id="wa-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder="Tell us what you are looking for..."
        className="mt-3 w-full rounded-2xl border border-[#22302B]/15 bg-[#FCFBF7] px-5 py-4 text-[15px] text-[#22302B] placeholder:text-[#22302B]/40 focus:outline-none focus:border-[#6F8A68] transition-colors resize-none"
      />
      <button
        onClick={handleSend}
        className="mt-4 rounded-full bg-[#22302B] px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-[#F7F4EC] transition-colors hover:bg-[#33453E]"
      >
        Send via WhatsApp
      </button>
    </div>
  );
}
