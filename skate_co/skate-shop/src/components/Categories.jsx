import { motion } from 'motion/react'
import categoryTee from '../assets/images/category_tee_1780020533099.png'
import categoryShorts from '../assets/images/category_shorts_1780020559997.png'
import categoryPromo from '../assets/images/category_promo_1780020584289.png'

const customTags = [
  { title: 'ZAPATILLAS', bg: 'rgba(238,237,243,0.8)' },
  { title: 'COMPLEMENTOS', bg: 'rgba(227,189,182,0.4)' },
  { title: 'SKATEBOARDS', bg: 'rgba(218,51,53,0.15)' },
  { title: 'OFERTAS %', bg: 'rgba(226,223,222,0.8)' },
  { title: 'NUEVO', bg: 'rgba(26,27,31,0.06)' },
]

export default function Categories({ onSelectCategory }) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-16 border-b-2 border-brand-dark">

      {/* 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left: two stacked category tiles */}
        <div className="flex flex-col gap-6">
          <div className="group relative h-[190px] w-full border-2 border-brand-dark bg-brand-gray overflow-hidden cursor-pointer neo-brutal-shadow">
            <img src={categoryTee} alt="Streetwear T-Shirts" className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/35 hover:bg-black/20 transition-all" />
            <div className="absolute bottom-4 left-4 z-10 flex flex-col">
              <span className="font-mono text-[9px] font-bold text-brand-red tracking-widest uppercase bg-white px-1 w-max">NUEVAS</span>
              <span className="font-display text-2xl font-black italic tracking-wide text-white uppercase mt-1 leading-none drop-shadow-md">CAMISETAS</span>
            </div>
          </div>

          <div className="group relative h-[190px] w-full border-2 border-brand-dark bg-brand-gray overflow-hidden cursor-pointer neo-brutal-shadow">
            <img src={categoryShorts} alt="Denim Shorts" className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/35 hover:bg-black/20 transition-all" />
            <div className="absolute bottom-4 left-4 z-10 flex flex-col">
              <span className="font-mono text-[9px] font-bold text-brand-red tracking-widest uppercase bg-white px-1 w-max">NUEVOS</span>
              <span className="font-display text-2xl font-black italic tracking-wide text-white uppercase mt-1 leading-none drop-shadow-md">SHORTS</span>
            </div>
          </div>
        </div>

        {/* Right: big promo banner */}
        <div className="group relative min-h-[400px] border-2 border-brand-dark bg-brand-red overflow-hidden cursor-pointer neo-brutal-shadow">
          <img src={categoryPromo} alt="15% Discount Promo" className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-brand-red/30 hover:opacity-90 transition-opacity" />

          <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
            <div className="bg-brand-red border-2 border-brand-dark text-white px-3 py-1 font-display hover:scale-110 tracking-widest rotate-[-4deg] text-base font-black neo-brutal-shadow leading-none uppercase select-none mb-3">
              15% DISCOUNT
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-none drop-shadow-lg">
              EN UNA SELECCIÓN DE ROPA URBANA!
            </h3>
            <p className="font-mono text-[10px] text-zinc-300 tracking-wide uppercase mt-2">EXCLUSIVO OFF-GRID SKATERS ACCORD</p>
          </div>
        </div>
      </div>

      {/* Category filter strip */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-between sm:gap-4">
        {customTags.map((tag) => (
          <button
            key={tag.title}
            onClick={() => { if (tag.title.includes('SKATEBOARD')) onSelectCategory('catalog') }}
            className="group relative flex-1 min-w-[120px] select-none text-center border-2 border-brand-dark py-3 px-4 font-display text-xs tracking-widest uppercase cursor-pointer transition-all hover:bg-brand-dark hover:text-white hover:translate-y-[-2px] neo-brutal-shadow-red"
            style={{ backgroundColor: tag.bg }}
          >
            <span className="relative z-10 font-black">{tag.title}</span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all group-hover:w-full" />
          </button>
        ))}
      </div>
    </section>
  )
}
