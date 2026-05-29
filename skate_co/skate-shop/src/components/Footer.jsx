import { Camera, PlayCircle, Share2, Bell } from 'lucide-react'

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialPlats = [
  { name: 'INSTAGRAM', icon: Camera },
  { name: 'YOUTUBE', icon: PlayCircle },
  { name: 'X (TWITTER)', icon: XIcon },
]

export default function Footer({ onScrollToSection }) {
  return (
    <footer className="w-full bg-[#111215] text-zinc-400 border-t-2 border-brand-dark pt-16 pb-8 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-zinc-800">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col justify-start">
            <h2 className="font-display text-5xl font-black italic tracking-tighter text-brand-red uppercase leading-none">SKATE CO.</h2>
            <p className="mt-4 font-sans text-xs leading-relaxed max-w-sm">
              AUTHENTIC HARDWARE SINCE &apos;94. WE LIVE FOR THE ASPHALT, THE GRIT, THE DRIFT AND THE PERFECT LANDING. JOIN THE COLLECTIVE GROUP.
            </p>
            <div className="mt-6 font-mono text-[9px] text-zinc-600 font-bold uppercase tracking-widest leading-none">
              © 2026 SKATE CO. AUTHENTIC HARDWARE.
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="font-display text-sm tracking-widest font-bold uppercase text-white mb-4">NAVIGATION</h4>
            <div className="flex flex-col space-y-2 font-mono text-[10px] uppercase font-bold tracking-wider">
              {[['HOME','hero'],['SHOP','catalog'],['% SALE','categories'],['STORE LOCATOR','storefinder']].map(([label, target]) => (
                <button key={label} onClick={() => onScrollToSection(target)} className="hover:text-brand-red transition-colors text-left cursor-pointer w-max">
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <h4 className="font-display text-sm tracking-widest font-bold uppercase text-white mb-4">SOCIAL CONNECT</h4>
            <div className="flex flex-col space-y-3">
              {socialPlats.map(({ name, icon: Icon }) => (
                <a key={name} href="#" className="flex items-center space-x-2 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-brand-red transition-colors">
                  <span>{name}</span>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">PRIVACY POLICY</a>
            <a href="#" className="hover:underline">TERMS OF SERVICE</a>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex h-8 w-8 items-center justify-center border border-zinc-800 hover:border-brand-red hover:text-brand-red text-zinc-500 transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center border border-zinc-800 hover:border-brand-red hover:text-brand-red text-zinc-500 transition-colors">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
