import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
  const { cart, updateCartQuantity, removeFromCart, getTotalPrice } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Shopping Cart</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                  <p className="text-orange-600 font-semibold">{item.price} ETB</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    className="p-1 h-6 w-6"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="p-1 h-6 w-6"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {cart.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg text-orange-600">
              {getTotalPrice().toFixed(2)} ETB
            </span>
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;