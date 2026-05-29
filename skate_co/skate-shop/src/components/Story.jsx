import storySkater from '../assets/images/story_skater_1780020810188.png'

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16 border-b-2 border-brand-dark bg-brand-bg">
      <div className="flex flex-col md:flex-row gap-12 items-center">

        {/* Left: framed photo */}
        <div className="relative w-full md:w-1/2">
          <div className="border-2 border-brand-dark bg-white overflow-hidden p-3 neo-brutal-shadow-red transform -rotate-1">
            <div className="relative aspect-[4/3] w-full bg-zinc-900 border border-brand-dark overflow-hidden">
              <img
                src={storySkater}
                alt="Story Skate Culture"
                className="h-full w-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-brand-red opacity-10 mix-blend-color" />
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-brand-dark text-white px-2 py-0.5 font-mono text-[8px] tracking-widest uppercase rotate-2 z-10 font-bold select-none">
            EST. 1994 // NYC
          </div>
        </div>

        {/* Right: text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-red uppercase">OUR STORY</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark uppercase leading-none">
            BUILT IN THE STREETS.
          </h2>
          <div className="mt-6 space-y-4 font-sans text-sm text-zinc-600 leading-relaxed">
            <p>Founded in 1994, SKATE CO. started as a small garage operation fueled by an uncompromised passion for pure skateboarding culture. We weren&apos;t looking to build an empire; we just wanted a robust wooden board that wouldn&apos;t snap on the first 10-stair set.</p>
            <p>Three decades later, our mission remains unchanged: to provide authentic, high-performance hardware for skaters who are out there every single day, pushing their limits. We don&apos;t just sell skateboards; we preserve the grit, texture, and heritage of the pavement.</p>
          </div>
          <div className="mt-8 border-t-2 border-dashed border-zinc-200 pt-6 flex flex-row gap-12 select-none">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-black tracking-tight text-brand-red leading-none">30+</span>
              <span className="font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1.5">YEARS EXPERIENCE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-3xl font-black tracking-tight text-brand-red leading-none">500+</span>
              <span className="font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1.5">SHOP PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
