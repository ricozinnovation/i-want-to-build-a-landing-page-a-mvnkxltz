'use client';

import React, { useState } from 'react';

const TABLES = [
  { id: 'T-1', name: 'Window View #1', seats: 2, zone: 'Main Dining' },
  { id: 'T-2', name: 'Garden Patio #2', seats: 4, zone: 'Outdoor Patio' },
  { id: 'T-3', name: 'Chefs Counter #3', seats: 2, zone: 'Kitchen View' },
  { id: 'T-4', name: 'VIP Booth #4', seats: 6, zone: 'Lounge' },
];

export default function Home() {
  const [selectedTable, setSelectedTable] = useState(TABLES[0]);
  const [guestName, setGuestName] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [confirmed, setConfirmed] = useState(false);

  const bookingCode = `QR-${selectedTable.id}-${partySize}P-${timeSlot.replace(':', '')}`;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setConfirmed(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#090d16] via-[#10172a] to-[#090d16] text-slate-100 flex flex-col justify-between p-4 md:p-12 relative overflow-hidden">
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <header className="max-w-6xl w-full mx-auto flex items-center justify-between py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-black shadow-lg shadow-emerald-500/20">
            QR
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            QRDine<span className="text-emerald-400">.io</span>
          </span>
        </div>
        <div className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
          Live Restaurant System
        </div>
      </header>

      <section className="max-w-6xl w-full mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Contactless Smart Reservations
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Scan. Reserve. Savor.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Zero Queuing.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Reserve your favorite table instantly with dynamic QR passes. No phone calls, no waiting lists—just seamless hospitality.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 max-w-lg">
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-slate-400">Contactless</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">&lt; 15s</div>
              <div className="text-xs text-slate-400">Instant Booking</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.9 ★</div>
              <div className="text-xs text-slate-400">Guest Rating</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
            {!confirmed ? (
              <form onSubmit={handleBooking} className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white">Quick Table Booking</h3>
                  <p className="text-xs text-slate-400">Select table & generate your QR dining pass</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Choose Table</label>
                  <div className="grid grid-cols-2 gap-2">
                    {TABLES.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setSelectedTable(t)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedTable.id === t.id
                            ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-md shadow-emerald-500/10'
                            : 'bg-slate-800/50 border-white/5 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-[11px] text-slate-400">{t.seats} Guests • {t.zone}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300">Guests</label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(Number(e.target.value))}
                      className="w-full mt-1 bg-slate-800/80 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                        <option key={n} value={n} className="bg-slate-900">{n} Guests</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300">Time Slot</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full mt-1 bg-slate-800/80 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((time) => (
                        <option key={time} value={time} className="bg-slate-900">{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300">Primary Guest Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full mt-1 bg-slate-800/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  Generate QR Table Pass
                  <span>→</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Reservation Confirmed!</h3>
                  <p className="text-xs text-slate-400 mt-1">Present this QR code to the host upon arrival</p>
                </div>

                <div className="p-5 bg-white rounded-2xl mx-auto w-48 h-48 shadow-xl flex flex-col items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                    <rect x="10" y="10" width="25" height="25" rx="3" />
                    <rect x="14" y="14" width="17" height="17" fill="white" />
                    <rect x="18" y="18" width="9" height="9" fill="black" />

                    <rect x="65" y="10" width="25" height="25" rx="3" />
                    <rect x="69" y="14" width="17" height="17" fill="white" />
                    <rect x="73" y="18" width="9" height="9" fill="black" />

                    <rect x="10" y="65" width="25" height="25" rx="3" />
                    <rect x="14" y="69" width="17" height="17" fill="white" />
                    <rect x="18" y="73" width="9" height="9" fill="black" />

                    <rect x="42" y="15" width="12" height="12" fill="black" />
                    <rect x="42" y="35" width="8" height="15" fill="black" />
                    <rect x="25" y="42" width="15" height="8" fill="black" />
                    <rect x="65" y="42" width="20" height="8" fill="black" />
                    <rect x="45" y="60" width="18" height="18" fill="black" />
                    <rect x="70" y="70" width="15" height="15" fill="black" />
                  </svg>
                </div>

                <div className="bg-slate-800/50 border border-white/5 rounded-xl p-3 text-xs text-slate-300 space-y-1">
                  <div><strong>Guest:</strong> {guestName} ({partySize} Guests)</div>
                  <div><strong>Table:</strong> {selectedTable.name} ({timeSlot})</div>
                  <div className="text-emerald-400 font-mono text-[11px] font-semibold">{bookingCode}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setConfirmed(false)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Book another table
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="max-w-6xl w-full mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>Generated autonomously by Mother Agent AI Workforce</div>
        <div>Next.js 15 • Tailwind CSS • Vercel Cloud • GitHub</div>
      </footer>
    </main>
  );
}
