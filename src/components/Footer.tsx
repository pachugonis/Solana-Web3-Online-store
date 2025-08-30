import React from 'react';
import { Twitter, Github, MessageCircle, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 border-t border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SolanaStore
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The future of e-commerce is here. Shop with confidence using Solana's 
              fast, secure, and low-cost blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Wallet Setup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SolanaStore. Built on Solana blockchain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};