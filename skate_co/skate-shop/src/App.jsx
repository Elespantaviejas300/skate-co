import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Sparkles, X } from 'lucide-react'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsStrip from './components/BrandsStrip'
import Categories from './components/Categories'
import GearSection from './components/GearSection'
import Reviews from './components/Reviews'
import Story from './components/Story'
import StoreFinder from './components/StoreFinder'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toasts, setToasts] = useState([])

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      return [...prev, { product, quantity: 1 }]
    })

    const newToast = { id: Math.random().toString(), text: 'ADDED TO DECK COMPARTMENT!', productName: product.name }
    setToasts(prev => [...prev, newToast])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== newToast.id)), 3000)
  }

  const handleUpdateQuantity = (productId, delta) => {
    setCart(prev =>
      prev.map(item => item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item)
          .filter(item => item.quantity > 0)
    )
  }

  const handleRemoveItem = (productId) => setCart(prev => prev.filter(item => item.product.id !== productId))

  const handleCheckout = () => {
    alert('⚡ Skate Co. Order Form: Proceeding to checkout!')
    setCart([])
    setIsCartOpen(false)
  }

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark font-sans relative flex flex-col antialiased" style={{ userSelect: 'none' }}>

      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} onScrollToSection={handleScrollToSection} />

      <main className="flex-1">
        <Hero onAddToCart={handleAddToCart} />
        <BrandsStrip />
        <Categories onSelectCategory={handleScrollToSection} />
        <GearSection onAddToCart={handleAddToCart} />
        <Reviews />
        <Story />
        <StoreFinder />
      </main>

      <Footer onScrollToSection={handleScrollToSection} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Toast notifications */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-brand-dark border-2 border-brand-red text-white p-4 flex items-start gap-3 pointer-events-auto neo-brutal-shadow"
              style={{ minWidth: '260px' }}
            >
              <div className="p-1 bg-brand-red mt-0.5">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-display text-[10px] tracking-widest text-[#eeedf3] font-bold leading-none">{toast.text}</p>
                <p className="font-mono text-[11px] font-black tracking-tight text-brand-red uppercase mt-1 leading-tight">{toast.productName}</p>
              </div>
              <button
                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer pointer-events-auto"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
