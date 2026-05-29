import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/products'

export default function Reviews() {
  return (
    <section id="community" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16 border-b-2 border-brand-dark bg-brand-bg">

      <div className="flex flex-col items-start justify-between border-b-2 border-brand-dark pb-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark leading-none uppercase">
            COMMUNITY APPROVED
          </h2>
          <p className="mt-2 font-sans text-xs sm:text-sm text-zinc-500 tracking-wide uppercase">
            Hear from the riders who live the lifestyle.
          </p>
        </div>
        <div className="mt-4 bg-brand-red border-2 border-brand-dark text-white p-3 md:mt-0 font-mono text-[11px] font-bold tracking-widest text-center uppercase select-none leading-none neo-brutal-shadow">
          <span className="block text-base font-display font-black tracking-normal">10K+</span>
          <span className="block mt-1">TRUSTED RIDERS</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="group relative border-2 border-brand-dark bg-white p-6 transition-all hover:-translate-y-1 neo-brutal-shadow">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red stroke-[2px]" />
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-zinc-700 italic leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-8 border-t border-dashed border-zinc-300 pt-4 flex flex-col">
              <span className="font-display text-sm font-black tracking-wide text-brand-dark uppercase">{t.author}</span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5 font-bold">{t.role}</span>
            </div>
            <div className="absolute right-0 bottom-0 bg-brand-dark text-white text-[9px] font-mono p-1 select-none font-bold scale-90 opacity-0 group-hover:opacity-100 transition-opacity">
              VERIFIED //
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
