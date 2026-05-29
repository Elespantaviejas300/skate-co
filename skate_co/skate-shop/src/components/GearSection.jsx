import { useState } from 'react'
import { Heart, ArrowUpRight } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import ProductImage from './ProductImage'

export default function GearSection({ onAddToCart }) {
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (id) => setFavorites(prev => ({ ...prev, [id]: !prev[id] }))

  const decks  = PRODUCTS.filter(p => p.category === 'decks')
  const trucks = PRODUCTS.filter(p => p.category === 'trucks')
  const wheels = PRODUCTS.filter(p => p.category === 'wheels')

  const renderCard = (product) => {
    const isFav = !!favorites[product.id]
    return (
      <div key={product.id} className="group relative flex flex-col border-2 border-brand-dark bg-white transition-all hover:translate-y-[-4px] neo-brutal-shadow">
        {/* Badge */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.badge && (
            <span className="bg-brand-red text-white text-[9px] font-mono font-bold tracking-widest px-1.5 py-0.5 border border-brand-dark select-none">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white hover:bg-neutral-50 flex items-center justify-center border border-brand-dark text-brand-dark hover:text-brand-red transition-all"
        >
          <Heart className={`h-4 w-4 ${isFav ? 'fill-brand-red text-brand-red' : 'text-brand-dark'}`} />
        </button>

        {/* Product illustration */}
        <div className="relative aspect-square w-full border-b-2 border-brand-dark bg-brand-gray overflow-hidden">
          <ProductImage type={product.image} name={product.name} />
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1 bg-white">
          <h4 className="font-display text-[15px] sm:text-[18px] font-black tracking-wide text-brand-dark leading-none">
            {product.name}
          </h4>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
              {product.detail.split(',')[0]}
            </span>
            <span className="font-display text-[16px] sm:text-[18px] font-black text-brand-red tracking-wide">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-4 w-full cursor-pointer bg-black text-white py-3 text-center font-display text-[11px] tracking-widest uppercase font-black transition-all hover:bg-brand-red border border-black active:translate-y-0.5"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    )
  }

  const CategoryRow = ({ title, products }) => (
    <div className="mt-12">
      <h3 className="font-display text-2xl font-black italic tracking-tight text-brand-dark border-l-4 border-brand-red pl-3 mb-6 uppercase">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(renderCard)}
      </div>
    </div>
  )

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16 border-b-2 border-brand-dark bg-brand-bg">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b-2 border-brand-dark pb-6">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-black italic tracking-tighter text-brand-dark leading-none uppercase">
            OUR NEW GEAR
          </h2>
          <p className="mt-2 font-sans text-xs sm:text-sm text-zinc-500 tracking-wide uppercase">
            Latest arrivals from the underground.
          </p>
        </div>
        <button className="group mt-4 sm:mt-0 flex items-center space-x-1 font-mono text-xs font-bold text-brand-dark hover:text-brand-red uppercase tracking-widest leading-none border-b-2 border-transparent hover:border-brand-red pb-1 w-max cursor-pointer">
          <span>VIEW ALL GEAR</span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <CategoryRow title="DECKS"  products={decks} />
      <CategoryRow title="TRUCKS" products={trucks} />
      <CategoryRow title="WHEELS" products={wheels} />
    </section>
  )
}
