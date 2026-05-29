import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  if (!isOpen) return null

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
        <div className="w-screen max-w-md border-l-2 border-brand-dark bg-brand-bg text-brand-dark flex flex-col">

          {/* Header */}
          <div className="h-16 border-b-2 border-zinc-200 px-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-brand-red" />
              <h3 className="font-display text-xl font-black uppercase tracking-tight">
                YOUR CART ({cartItems.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center border-2 border-transparent hover:border-brand-dark bg-white hover:text-brand-red transition-all"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-2 border-dashed border-zinc-400 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-zinc-400" />
                </div>
                <p className="font-display text-sm font-bold uppercase tracking-wider text-zinc-500">CART IS EMPTY</p>
                <p className="font-sans text-xs text-zinc-400 uppercase mt-1">Add some hardware or custom decks to start.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="flex border-2 border-brand-dark bg-white p-3 relative neo-brutal-shadow">
                  <div className="h-16 w-16 bg-[#f4f3f8] border border-brand-dark p-1 shrink-0 flex items-center justify-center font-mono font-bold text-[10px]">
                    <span className="text-brand-red font-display text-[11px]">{item.product.name.split(' ')[0]}</span>
                  </div>
                  <div className="ml-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-sm font-black tracking-wide leading-none uppercase">{item.product.name}</h4>
                      <p className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mt-1 leading-none">${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="h-6 w-6 border border-brand-dark hover:bg-zinc-100 flex items-center justify-center">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-mono text-xs font-bold px-2">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="h-6 w-6 border border-brand-dark hover:bg-zinc-100 flex items-center justify-center">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => onRemoveItem(item.product.id)} className="absolute right-3 bottom-3 text-zinc-400 hover:text-brand-red transition-colors cursor-pointer">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t-2 border-brand-dark bg-white p-6 space-y-4">
              <div className="flex justify-between items-center font-display text-base font-black uppercase tracking-tight">
                <span>SUBTOTAL</span>
                <span className="text-brand-red text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest leading-normal">
                TAX & SHIPPING INCLUDED AT CHECKOUT.
              </p>
              <button
                onClick={onCheckout}
                className="w-full cursor-pointer bg-brand-red text-white py-4 text-center font-display text-xs tracking-widest uppercase font-black hover:bg-brand-dark transition-all border border-brand-dark"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
