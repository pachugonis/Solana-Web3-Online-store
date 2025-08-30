import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our curated collection of premium tech products, all available for purchase with Solana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-slate-900/80 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs">4.8</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400">SOL</span>
                  </div>
                  
                  <button
                    onClick={() => onAddToCart(product)}
                    className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-110"
                  >
                    <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};