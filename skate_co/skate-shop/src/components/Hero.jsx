import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroSkaterBowl from '../assets/images/hero_skater_bowl_1780020487313.png'
import heroProDeck from '../assets/images/hero_pro_deck_1780020509535.png'

export default function Hero({ onAddToCart }) {
  const heroProduct = {
    id: 'deck-hero',
    name: 'THE PRO DECK - MAPLE',
    category: 'decks',
    price: 79.99,
    image: 'pro-deck-hero',
    detail: 'Professional grade 7-ply Canadian Maple deck with specialized Hardware Excellence.',
  }

  return (
    <section id="hero" className="relative w-full border-b-2 border-brand-dark overflow-hidden">
      <div className="flex flex-col md:flex-row">

        {/* LEFT COLUMN: Pro Series deck as full background */}
        <div className="relative flex flex-col justify-center bg-brand-bg px-6 py-14 md:w-1/2 md:px-10 md:py-24 overflow-hidden min-h-[560px] md:min-h-[640px]">

          {/* Pro deck background — fills the whole column */}
          <motion.img
            src={heroProDeck}
            alt="The Pro Series — Maple Deck"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover object-right z-0 pointer-events-none select-none"
          />

          {/* Readability scrim — opaque on the left (text side), clear on the right (deck visible) */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-bg via-brand-bg/85 to-brand-bg/40 md:from-brand-bg md:via-brand-bg/80 md:to-transparent pointer-events-none" />

          {/* Hardware Excellence eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-6 left-6 flex items-center space-x-2 font-mono text-[10px] uppercase tracking-widest text-brand-red font-bold z-10"
          >
            <Sparkles className="h-3 w-3" />
            <span>HARDWARE EXCELLENCE</span>
          </motion.div>

          {/* Editorial text — aligned to the left of the column */}
          <div className="relative z-10 w-full md:max-w-[62%] mt-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl md:text-[5rem] font-black italic tracking-tight uppercase text-brand-dark leading-[1.1]"
            >
              THE PRO<br />SERIES.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-5 font-sans text-sm sm:text-base text-zinc-600 leading-relaxed max-w-[300px]"
            >
              Precision engineering for the ultimate ride. Crafted for those who demand performance and durability on every surface.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col items-start gap-4"
            >
              <button
                onClick={() => onAddToCart(heroProduct)}
                className="group relative flex items-center justify-between bg-black text-white px-6 py-4 font-sans text-xs font-bold tracking-widest uppercase border-2 border-black hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer neo-brutal-shadow-red active:translate-y-0.5"
              >
                <span>ADD TO CART - $79.99</span>
                <ArrowRight className="h-4 w-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center space-x-2 font-mono text-[11px] text-zinc-500">
                <span>● PREMIUM FINISH</span>
                <span>/</span>
                <span>● 7-PLY MAPLE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Street action backdrop with overlap lettering */}
        <div className="relative min-h-[350px] md:h-auto bg-zinc-950 md:w-1/2 overflow-hidden flex items-center justify-center">

          <div className="absolute inset-0 z-0">
            <img
              src={heroSkaterBowl}
              alt="Radical Skate Action Bowl"
              className="h-full w-full object-cover opacity-60 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 md:bg-gradient-to-r md:from-brand-bg/20 md:via-transparent md:to-transparent" />
          </div>

          <div className="relative z-10 w-full text-center p-6 select-none font-display uppercase tracking-widest flex flex-col items-center justify-center">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-[64px] sm:text-[90px] md:text-[100px] leading-none text-white font-black tracking-tight"
            >
              RADICAL
            </motion.span>
            <motion.span
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display text-[75px] sm:text-[110px] md:text-[120px] leading-none text-brand-red font-black tracking-tighter"
            >
              SKATE
            </motion.span>
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-display text-[64px] sm:text-[90px] md:text-[100px] leading-none text-white font-black tracking-tight"
            >
              SHOP
            </motion.span>
          </div>

          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-brand-dark z-20" />
        </div>
      </div>
    </section>
  )
}
