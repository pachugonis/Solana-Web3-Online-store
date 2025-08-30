import React from 'react';
import { Zap, Shield, Globe, Coins, Users, Smartphone } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Transactions complete in under 1 second with minimal fees'
    },
    {
      icon: Shield,
      title: 'Secure & Trustless',
      description: 'Built on Solana blockchain for maximum security and transparency'
    },
    {
      icon: Globe,
      title: 'Global Marketplace',
      description: 'Shop from anywhere in the world with borderless payments'
    },
    {
      icon: Coins,
      title: 'Low Fees',
      description: 'Pay fraction of traditional payment processor fees'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a growing community of Web3 enthusiasts and early adopters'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Seamless experience across all devices and wallet apps'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Choose SolanaStore?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the next generation of e-commerce with blockchain technology, 
            designed for speed, security, and global accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};