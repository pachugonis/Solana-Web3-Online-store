import { useState, useEffect } from 'react';
import { WalletState } from '../types';

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    publicKey: null,
    balance: 0
  });
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async () => {
    setConnecting(true);
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock wallet data
      setWallet({
        connected: true,
        publicKey: 'DemoWallet123...xyz',
        balance: 2.5 // Mock SOL balance
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWallet({
      connected: false,
      publicKey: null,
      balance: 0
    });
  };

  return {
    wallet,
    connecting,
    connectWallet,
    disconnectWallet
  };
};