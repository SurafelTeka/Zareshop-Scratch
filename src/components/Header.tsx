import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
  onBecomeSellerClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBecomeSellerClick }) => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Deliver to: ET</span>
          <div className="flex items-center space-x-4">
            <span>English-USD</span>
            <span>Sign in</span>
            <span>Create account</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-orange-500">Zare Shop</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Products</Button>
              <div className="flex items-center space-x-2">
                <Input 
                  placeholder="What are you looking for?" 
                  className="w-96"
                />
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ShoppingCart className="w-6 h-6" />
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center space-x-8">
          <span>All categories</span>
          <span className="text-orange-500">Featured products</span>
          <span>Help Center</span>
          <Button 
            variant="ghost" 
            onClick={onBecomeSellerClick}
            className="text-orange-500 hover:text-orange-600"
          >
            Become a Seller
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;