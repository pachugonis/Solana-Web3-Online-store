import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';

function App() {
  const {
    items,
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={() => setIsOpen(true)} 
      />
      <Hero />
      <ProductGrid 
        products={products} 
        onAddToCart={addToCart} 
      />
      <Features />
      <Footer />
      <Cart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;