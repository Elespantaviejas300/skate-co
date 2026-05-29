import { useState } from 'react'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'

export default function Navbar({ cartCount, onOpenCart, onScrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('HOME')

  const navLinks = [
    { label: 'HOME', target: 'hero' },
    { label: 'SHOP', target: 'catalog' },
    { label: '% SALE', target: 'categories' },
    { label: 'COLLECTION', target: 'story' },
    { label: 'CONTACT', target: 'storefinder' },
  ]

  const handleNavClick = (label, target) => {
    setActiveTab(label)
    setIsMobileMenuOpen(false)
    onScrollToSection(target)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-brand-dark bg-brand-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-16">

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center border-2 border-transparent hover:border-brand-dark md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-brand-dark" /> : <Menu className="h-6 w-6 text-brand-dark" />}
        </button>

        {/* Logo */}
        <div
          onClick={() => handleNavClick('HOME', 'hero')}
          className="cursor-pointer text-2xl font-display uppercase tracking-tighter text-brand-dark select-none"
        >
          SKATE CO.
        </div>

        {/* Desktop nav */}
        <nav className="hidden space-x-8 md:flex">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleNavClick(label, target)}
              className={`relative py-1 font-sans text-xs font-bold uppercase tracking-widest transition-colors select-none
                ${activeTab === label ? 'text-brand-red' : 'text-brand-dark hover:text-brand-red'}`}
            >
              {label}
              {activeTab === label && (
                <span className="absolute bottom-[-10px] left-0 h-[3px] w-full bg-brand-red" />
              )}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="flex h-10 w-10 items-center justify-center text-brand-dark hover:text-brand-red transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden h-10 w-10 items-center justify-center text-brand-dark hover:text-brand-red transition-colors sm:flex">
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={onOpenCart}
            className="relative flex h-10 w-10 items-center justify-center border-2 border-transparent hover:border-brand-dark text-brand-dark transition-all"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center bg-brand-red text-[9px] font-mono font-bold text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t-2 border-brand-dark bg-brand-bg px-4 py-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map(({ label, target }) => (
              <button
                key={label}
                onClick={() => handleNavClick(label, target)}
                className={`py-2 text-left font-sans text-sm font-bold tracking-widest uppercase border-l-4 pl-3
                  ${activeTab === label ? 'border-brand-red text-brand-red bg-brand-gray/50' : 'border-transparent text-brand-dark hover:text-brand-red'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
