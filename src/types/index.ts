export interface Product {
  id: string;
  name: string;
  price: number; // Price in SOL
  image: string;
  description: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WalletState {
  connected: boolean;
  publicKey: string | null;
  balance: number;
}