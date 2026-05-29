import { BRAND_TAGS } from '../data/products'

export default function BrandsStrip() {
  return (
    <div className="w-full bg-brand-dark border-b-2 border-brand-dark overflow-hidden py-4 select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee space-x-12 shrink-0">
          {BRAND_TAGS.concat(BRAND_TAGS).map((tag, idx) => (
            <span key={`${tag}-${idx}`} className="font-display text-sm tracking-widest text-[#eeedf3] hover:text-brand-red transition-colors block italic font-black">
              ★ {tag}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee space-x-12 shrink-0" aria-hidden="true">
          {BRAND_TAGS.concat(BRAND_TAGS).map((tag, idx) => (
            <span key={`${tag}-dup-${idx}`} className="font-display text-sm tracking-widest text-[#eeedf3] hover:text-brand-red transition-colors block italic font-black">
              ★ {tag}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
