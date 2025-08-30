import React from 'react';
import { ShoppingCart, Wallet, LogOut } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const { wallet, connecting, connectWallet, disconnectWallet } = useWallet();

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-sm border-b border-blue-800/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SolanaStore
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              Categories
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Wallet Connection */}
            {wallet.connected ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm text-gray-300">
                    {wallet.publicKey?.slice(0, 8)}...
                  </div>
                  <div className="text-xs text-blue-400">
                    {wallet.balance} SOL
                  </div>
                </div>
                <button
                  onClick={disconnectWallet}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={connecting}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Wallet className="w-4 h-4" />
                <span>{connecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};