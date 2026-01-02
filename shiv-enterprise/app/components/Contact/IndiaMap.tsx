"use client";
import React from "react";

const offices = [
  {
    city: "Prayagraj (HQ)",
    address:
      "Singramau, Sahson, Prayagraj, UP 221507 \n Office Address:- G3 Mahaveer Apartment Patrika Marg (Behind Jagriti Hospital) Civil Lines Prayagraj 211001",
    phone: "+91 85630 19297",
    email: "shiventerprises3366@gmail.com",
    top: "44%",
    left: "48%",
    main: true,
  },
  {
    city: "Bhopal",
    address: "Ayodhya Bypass C-149 Bhopal Madhya Pradesh",
    phone: "+91 85630 19297",
    email: "shiventerprises3366@gmail.com",
    top: "49%",
    left: "32%",
  },
  {
    city: "Mumbai",
    address:
      "Century Rayon Colony D6 Room no 165 Near Century Rayon Colony Shahad Murbad Road Maharashtra 421003",
    phone: "+91 85630 19297",
    email: "shiventerprises3366@gmail.com",
    top: "58%",
    left: "24%",
  },
  {
    city: "Rewa",
    address: "Shilpi City WC 35 Babupur Chaurahata Thana Rewa 486001",
    phone: "+91 85630 19297",
    email: "shiventerprises3366@gmail.com",
    top: "46%",
    left: "45%",
  },
];

const IndiaMap = () => {
  return (
    <div
      className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden
      bg-gradient-to-br from-white via-slate-50 to-sky-50
      border border-slate-200
      shadow-[0_40px_100px_rgba(15,23,42,0.12)]
      perspective-[1200px]"
    >
      {/* Soft ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.22),transparent_55%)]" />

      {/* INDIA SVG */}
      <img
        src="/in.svg"
        alt="India Map"
        className="absolute inset-0 w-full h-full object-contain opacity-60
        transform translate-z-[40px]"
      />

      {/* MARKERS */}
      {offices.map((office, index) => (
        <div
          key={index}
          className="absolute group -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ top: office.top, left: office.left }}
        >
          {/* Glow */}
          <div
            className={`absolute inset-0 rounded-full blur-2xl opacity-0 
            group-hover:opacity-100 transition duration-500
            ${
              office.main
                ? "bg-emerald-400/40 w-16 h-16 -translate-x-6 -translate-y-6"
                : "bg-sky-400/35 w-12 h-12 -translate-x-4 -translate-y-4"
            }`}
          />

          {/* Marker */}
          <div className="relative flex items-center justify-center">
            <div
              className={`rounded-full shadow-xl
              ${
                office.main
                  ? "w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse"
                  : "w-4 h-4 bg-gradient-to-r from-sky-500 to-cyan-400 animate-pulse"
              }`}
            />
            <div
              className={`absolute rounded-full border animate-ping
              ${
                office.main
                  ? "w-10 h-10 border-emerald-400/50"
                  : "w-7 h-7 border-sky-400/50"
              }`}
            />
          </div>

          {/* Tooltip Card */}
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6
            opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0
            transition-all duration-300 pointer-events-none"
          >
            <div
              className={`min-w-[260px] rounded-2xl p-5
              bg-white/80 backdrop-blur-xl
              border border-slate-200
              shadow-[0_20px_60px_rgba(15,23,42,0.15)]
              ${office.main ? "ring-1 ring-emerald-400/50" : ""}`}
            >
              <p
                className={`text-sm font-semibold mb-1
                ${office.main ? "text-emerald-600" : "text-sky-600"}`}
              >
                {office.city}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mb-3 whitespace-pre-line">
                {office.address}
              </p>

              <div className="space-y-1 text-xs text-slate-500">
                <p>📞 {office.phone}</p>
                <p>✉️ {office.email}</p>
              </div>

              {office.main && (
                <div
                  className="mt-3 inline-block px-3 py-1 rounded-full 
                  bg-emerald-500/10 text-emerald-700 text-[10px] font-semibold"
                >
                  MAIN HEADQUARTERS
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Info Bar */}
      <div
        className="absolute bottom-0 left-0 right-0
        bg-white/70 backdrop-blur-xl
        border-t border-slate-200 px-6 py-4"
      >
        <p className="text-center text-sm text-slate-600 tracking-wide">
          Pan-India Presence • HQ: Prayagraj • Maharashtra • Madhya Pradesh
        </p>
      </div>
    </div>
  );
};

export default IndiaMap;
