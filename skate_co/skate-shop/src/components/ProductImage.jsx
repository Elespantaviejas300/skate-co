import { motion } from 'motion/react'

export default function ProductImage({ type, name }) {
  if (type === 'radical-typo') {
    return (
      <div className="relative w-full h-full min-h-[170px] bg-[#f4f3f8] flex items-center justify-center p-4 overflow-hidden">
        <motion.div
          whileHover={{ rotate: 4, scale: 1.05 }}
          className="relative w-16 h-40 bg-[#e3be96] rounded-[24px] border-2 border-brand-dark flex flex-col items-center justify-between p-3"
          style={{
            boxShadow: 'inset 0 0 12px rgba(26,27,31,0.2), 3px 5px 0px rgba(26,27,31,1)',
            backgroundImage: 'linear-gradient(90deg, transparent 40%, rgba(26,27,31,0.04) 40%, rgba(26,27,31,0.04) 60%, transparent 60%), linear-gradient(#e3be96, #d0ab84)'
          }}
        >
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-dark opacity-80" />)}
          </div>
          <div className="transform rotate-90 text-brand-red font-display text-[16px] tracking-widest whitespace-nowrap overflow-hidden select-none">RADICAL</div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-dark opacity-80" />)}
          </div>
        </motion.div>
      </div>
    )
  }

  if (type === 'bolt-series') {
    return (
      <div className="relative w-full h-full min-h-[170px] bg-[#f4f3f8] flex items-center justify-center p-4 overflow-hidden">
        <motion.div
          whileHover={{ rotate: -4, scale: 1.05 }}
          className="relative w-16 h-40 bg-brand-dark rounded-[24px] border-2 border-brand-dark flex flex-col items-center justify-between p-3"
          style={{ boxShadow: 'inset 0 0 12px rgba(255,255,255,0.08), 3px 5px 0px rgba(26,27,31,1)' }}
        >
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />)}
          </div>
          <svg className="w-8 h-12 text-brand-red fill-current" viewBox="0 0 24 24">
            <path d="M19 9h-6l2.35-8H7L5 15h6l-2 9z" />
          </svg>
          <div className="grid grid-cols-2 gap-2 mb-1">
            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />)}
          </div>
        </motion.div>
      </div>
    )
  }

  if (type === 'abstract-splat') {
    return (
      <div className="relative w-full h-full min-h-[170px] bg-[#f4f3f8] flex items-center justify-center p-4 overflow-hidden">
        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="relative w-16 h-40 bg-white rounded-[24px] border-2 border-brand-dark flex flex-col items-center justify-between p-3 overflow-hidden"
          style={{ boxShadow: 'inset 0 0 12px rgba(26,27,31,0.1), 3px 5px 0px rgba(26,27,31,1)' }}
        >
          <div className="absolute inset-0 bg-brand-red opacity-10 transform scale-125 rotate-12" />
          <div className="absolute w-12 h-12 rounded-full bg-brand-red opacity-80 -left-4 top-10 blur-sm" />
          <div className="absolute w-10 h-10 rounded-full bg-brand-dark opacity-70 -right-2 top-20 blur-sm" />
          <div className="grid grid-cols-2 gap-2 mt-1 relative z-10">
            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-dark" />)}
          </div>
          <div className="relative z-10 font-display text-[12px] uppercase tracking-tighter text-brand-dark bg-yellow-400 px-1 border border-brand-dark font-black">EDTN</div>
          <div className="grid grid-cols-2 gap-2 mb-1 relative z-10">
            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-dark" />)}
          </div>
        </motion.div>
      </div>
    )
  }

  if (['grind-king', 'independent-hollows', 'thunder-polished'].includes(type)) {
    const label = type === 'independent-hollows' ? 'HOLLOW AXLE' : type === 'thunder-polished' ? 'LIGHT' : 'PRO GRIND'
    const hangerFill = type === 'thunder-polished' ? '#d4d4d8' : type === 'independent-hollows' ? '#a1a1aa' : '#e4e4e7'
    return (
      <div className="relative w-full h-full min-h-[170px] bg-[#f4f3f8] flex items-center justify-center p-4 overflow-hidden">
        <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center justify-center relative w-[140px]">
          <svg className="w-full text-zinc-600 drop-shadow-[2px_3px_0px_rgba(26,27,31,1)]" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="27" width="90" height="6" rx="1.5" fill="#3f3f46" stroke="#1a1b1f" strokeWidth="1.5" />
            <rect x="2" y="28" width="3" height="4" rx="1" fill="#be0003" />
            <rect x="95" y="28" width="3" height="4" rx="1" fill="#be0003" />
            <path d="M25 24C35 24 38 10 50 10C62 10 65 24 75 24V32C65 32 62 38 50 38C38 38 35 32 25 32V24Z" fill={hangerFill} stroke="#1a1b1f" strokeWidth="2" />
            <circle cx="50" cy="24" r="5" fill="#be0003" stroke="#1a1b1f" strokeWidth="1.5" />
            <rect x="44" y="20" width="12" height="3" fill="#1a1b1f" />
            <circle cx="50" cy="16" r="3" fill="#3f3f46" />
          </svg>
          <div className="absolute bottom-[-16px] text-[9px] font-mono uppercase bg-brand-dark text-white px-1 tracking-widest scale-90">{label}</div>
        </motion.div>
      </div>
    )
  }

  if (['orbit-wheels', 'spitfire-classics', 'bones-stf'].includes(type)) {
    return (
      <div className="relative w-full h-full min-h-[170px] bg-[#f4f3f8] flex items-center justify-center p-4">
        <motion.div whileHover={{ scale: 1.05 }} className="relative w-28 h-28 flex items-center justify-center p-1">
          <div className="w-20 h-20 rounded-full border-2 border-brand-dark flex items-center justify-center relative select-none"
            style={{ background: 'radial-gradient(circle, #fcfcfd 30%, #e4e2e6 75%, #cccbc1 100%)', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.15), 3px 3px 0px rgba(26,27,31,1)' }}>
            <div className="absolute inset-2 rounded-full border border-brand-red opacity-80" />
            <span className="absolute text-[6px] font-mono text-brand-red tracking-tighter font-bold" style={{ transform: 'rotate(0deg) translateY(-22px)' }}>CO. SKATE</span>
            <span className="absolute text-[5.5px] font-mono text-brand-dark tracking-tighter font-bold" style={{ transform: 'rotate(90deg) translateY(-22px)' }}>52MM 99A</span>
            <span className="absolute text-[6px] font-mono text-brand-red tracking-tighter font-bold" style={{ transform: 'rotate(180deg) translateY(-22px)' }}>STREET</span>
            <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-[#c8c5bc] flex items-center justify-center shadow-inner">
              <div className="w-5 h-5 rounded-full border border-brand-dark bg-zinc-800 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 border border-brand-dark" />
              </div>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center absolute -top-1 -right-1 -z-10 bg-gray-200"
            style={{ background: 'radial-gradient(circle, #fcfcfd 30%, #eeecef 100%)', boxShadow: '2px 2px 0px #1a1b1f' }}>
            <div className="w-6 h-6 rounded-full border border-brand-dark bg-zinc-600" />
          </div>
          <div className="w-12 h-12 rounded-full border border-brand-dark absolute -bottom-1 -left-1 -z-20 bg-gray-300" style={{ boxShadow: '1.5px 1.5px 0px #1a1b1f' }} />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-zinc-100 flex items-center justify-center p-4">
      <span className="text-xs font-mono">{name}</span>
    </div>
  )
}
