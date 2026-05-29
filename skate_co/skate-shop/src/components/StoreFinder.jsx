import { useState } from 'react'
import { MapPin, Navigation, Clock } from 'lucide-react'

export default function StoreFinder() {
  const [copied, setCopied] = useState(false)
  const handleDirections = () => { setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <section id="storefinder" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16 border-b-2 border-brand-dark bg-brand-bg">
      <h2 className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark uppercase leading-none text-center mb-12 select-none">
        VISIT OUR SHOP
      </h2>

      <div className="flex flex-col lg:flex-row border-2 border-brand-dark overflow-hidden neo-brutal-shadow">

        {/* Map */}
        <div
          className="relative flex-1 min-h-[350px] bg-zinc-100 flex items-center justify-center p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-brand-dark overflow-hidden select-none"
          style={{ backgroundImage: 'radial-gradient(#a1a1aa 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 350" preserveAspectRatio="none">
            <path d="M 120 260 L 280 260 L 280 120 L 400 120" fill="none" stroke="#be0003" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>

          <div className="absolute left-[8%] bottom-[20%] z-10 flex flex-col items-center">
            <div className="bg-brand-dark text-white border border-brand-dark text-[8px] font-mono px-2 py-1 tracking-widest font-bold uppercase whitespace-nowrap mb-2 neo-brutal-shadow-red scale-90">
              BEST LOCAL SPOT
            </div>
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-dark border-2 border-white" />
            </div>
          </div>

          <div className="absolute right-[12%] top-[25%] z-10 flex flex-col items-center">
            <div className="bg-brand-red text-white border-2 border-brand-dark text-[9px] font-mono px-2.5 py-1 tracking-widest font-black uppercase whitespace-nowrap mb-2 neo-brutal-shadow animate-bounce">
              STORE LOCATION
            </div>
            <div className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-brand-red border-2 border-brand-dark" />
            </div>
          </div>

          <div className="absolute right-4 bottom-4 border border-brand-dark p-2 bg-white flex items-center justify-center opacity-65">
            <Navigation className="h-4 w-4 transform rotate-45 text-brand-dark" />
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-[400px] bg-brand-dark text-white p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-3xl font-black italic tracking-tight text-brand-red leading-none uppercase">LOCATION</h3>
            <div className="mt-6 flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-brand-red shrink-0" />
              <div className="font-mono text-xs leading-relaxed uppercase text-[#eeedf3]">
                <p className="font-bold">123 Skate Plaza</p>
                <p>Downtown District</p>
                <p className="text-zinc-400">Metro Area 90210</p>
              </div>
            </div>
            <hr className="my-6 border-zinc-800" />
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-brand-red" />
              <h4 className="font-display text-sm tracking-widest font-bold uppercase text-[#eeedf3]">HOURS</h4>
            </div>
            <div className="mt-4 space-y-2 font-mono text-[11px] leading-none uppercase text-zinc-400">
              <div className="flex justify-between"><span>MON - FRI</span><span className="text-white">10:00 - 20:00</span></div>
              <div className="flex justify-between"><span>SATURDAY</span><span className="text-white">10:00 - 22:00</span></div>
              <div className="flex justify-between text-brand-red font-bold"><span>SUNDAY</span><span>12:00 - 18:00</span></div>
            </div>
          </div>
          <button
            onClick={handleDirections}
            className="mt-8 cursor-pointer bg-brand-red text-white py-4 font-sans text-xs font-bold tracking-widest uppercase text-center hover:bg-white hover:text-brand-dark transition-all border-2 border-brand-red select-none"
          >
            {copied ? 'COPIED DIRECTORY!' : 'GET DIRECTIONS'}
          </button>
        </div>
      </div>
    </section>
  )
}
