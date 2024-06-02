import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import AccountForm from './AccountForm';

interface HeaderProps {
  onBecomeSellerClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBecomeSellerClick }) => {
  const [showAccountForm, setShowAccountForm] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        {/* Top bar */}
        <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>Deliver to: ET</span>
            <div className="flex items-center space-x-4">
              <span>English-ETB</span>
              <span>Sign in</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAccountForm(true)}
                className="text-gray-600 hover:text-orange-500"
              >
                Create account
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-orange-500">Zare Shop</h1>
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" size="sm">Products</Button>
                <div className="flex items-center space-x-2">
                  <Input 
                    placeholder="What are you looking for?" 
                    className="w-64 lg:w-96"
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
          
          {/* Mobile search */}
          <div className="md:hidden mt-3 flex items-center space-x-2">
            <Input 
              placeholder="What are you looking for?" 
              className="flex-1"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="bg-gray-50 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center space-x-4 md:space-x-8 overflow-x-auto">
            <span className="whitespace-nowrap">All categories</span>
            <span className="text-orange-500 whitespace-nowrap">Featured products</span>
            <span className="whitespace-nowrap">Help Center</span>
            <Button 
              variant="ghost" 
              onClick={onBecomeSellerClick}
              className="text-orange-500 hover:text-orange-600 whitespace-nowrap"
            >
              Become a Seller
            </Button>
          </div>
        </div>
      </header>
      
      {showAccountForm && (
        <AccountForm onClose={() => setShowAccountForm(false)} />
      )}
    </>
  );
};

export default Header;