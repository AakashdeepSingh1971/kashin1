'use client'
import { MessageCircle } from 'lucide-react';
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "917982142348";
  const message = encodeURIComponent("Hi, I'm interested in learning more about KASHIN's retail consultancy services for my fashion brand.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 md:bottom-6  z-[9999] group z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 ${isHovered ? "w-40" : "md:right-6 "}`}
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <MessageCircle className="w-6 h-6 text-white" fill="white" /> */}
      <div
        className={`flex items-center  bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 ${isHovered ? " gap-2 pl-5 pr-3 py-3 md:py-4" : "p-3 md:p-4"
          }`}
        style={{
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
        }}
      >
        <span
          className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isHovered ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"
            }`}
        >
          Chat with us
        </span>
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="white" />
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse -z-10" />

      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
        }
        .animate-whatsapp-pulse {
          animation: whatsapp-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </a >
  );
};

export default WhatsAppButton;
