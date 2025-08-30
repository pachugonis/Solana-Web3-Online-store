import React, { useState } from 'react';
import { X, Minus, Plus, CreditCard, Loader } from 'lucide-react';
import { CartItem } from '../types';
import { useWallet } from '../hooks/useWallet';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  totalPrice: number;
  onClearCart: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
  onClearCart
}) => {
  const { wallet } = useWallet();
  const [processing, setProcessing] = useState(false);

  const handleCheckout = async () => {
    if (!wallet.connected) {
      alert('Please connect your wallet first');
      return;
    }

    if (wallet.balance < totalPrice) {
      alert('Insufficient SOL balance');
      return;
    }

    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    alert('Payment successful! Your order has been placed.');
    onClearCart();
    onClose();
    setProcessing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-slate-900 to-blue-900 border-l border-blue-700/30 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-blue-700/30">
            <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-slate-800/50 backdrop-blur-sm border border-blue-700/30 rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-sm">
                          {item.product.name}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {item.product.price} SOL
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-white font-semibold">
                        {(item.product.price * item.quantity).toFixed(2)} SOL
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-blue-700/30 p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span className="text-white">Total:</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {totalPrice.toFixed(2)} SOL
                </span>
              </div>
              
              {wallet.connected && (
                <div className="text-sm text-gray-400">
                  Wallet Balance: {wallet.balance} SOL
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={!wallet.connected || processing || wallet.balance < totalPrice}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {processing ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>
                      {!wallet.connected 
                        ? 'Connect Wallet to Pay' 
                        : wallet.balance < totalPrice 
                        ? 'Insufficient Balance'
                        : 'Pay with Solana'
                      }
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};