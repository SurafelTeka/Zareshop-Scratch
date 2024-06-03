import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  user_id: number;
  name: string;
  phone_number: string;
  fayda_id_photo_url?: string;
  user_role: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface AuthContextType {
  user: User | null;
  cart: CartItem[];
  location: string;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  setLocation: (location: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [location, setLocationState] = useState<string>('Getting location...');

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const setLocation = (newLocation: string) => {
    setLocationState(newLocation);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <AuthContext.Provider value={{
      user,
      cart,
      location,
      isAuthenticated: !!user,
      login,
      logout,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      setLocation,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};