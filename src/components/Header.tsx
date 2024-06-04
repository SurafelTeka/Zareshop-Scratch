import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AccountForm from './AccountForm';
import CartDropdown from './CartDropdown';
import AccountDropdown from './AccountDropdown';
import LocationDisplay from './LocationDisplay';

interface HeaderProps {
  onBecomeSellerClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBecomeSellerClick }) => {
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const { isAuthenticated, getTotalItems } = useAuth();

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        {/* Top bar */}
        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <LocationDisplay />
            <div className="flex items-center space-x-4">
              <span>English-ETB</span>
              {!isAuthenticated ? (
                <>
                  <span>Sign in</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowAccountForm(true)}
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    Create account
                  </Button>
                </>
              ) : null}
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
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCartDropdown(!showCartDropdown)}
                  className="relative p-2"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
                <CartDropdown 
                  isOpen={showCartDropdown} 
                  onClose={() => setShowCartDropdown(false)} 
                />
              </div>
              
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (isAuthenticated) {
                      setShowAccountDropdown(!showAccountDropdown);
                    } else {
                      setShowAccountForm(true);
                    }
                  }}
                  className="p-2"
                >
                  <User className="w-6 h-6" />
                </Button>
                <AccountDropdown 
                  isOpen={showAccountDropdown} 
                  onClose={() => setShowAccountDropdown(false)} 
                />
              </div>
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
        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2">
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