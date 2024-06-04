import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Product {
  id: number;
  name: string;
  price: string;
  minOrder: string;
  supplier: string;
  years: string;
  country: string;
  image: string;
  verified: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, updateCartQuantity, cart } = useAuth();
  
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;
  
  const priceNumber = parseFloat(product.price.replace(/[^\d.]/g, ''));
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image
    });
  };
  
  const handleIncrement = () => {
    updateCartQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    updateCartQuantity(product.id, quantity - 1);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <div className="text-lg font-bold text-gray-900 mb-1">
          {product.price}
        </div>
        
        <div className="text-xs text-gray-500 mb-2">
          Min. order: {product.minOrder}
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {product.verified && (
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                ✓ Verified
              </Badge>
            )}
          </div>
          <span className="text-xs text-gray-500">
            {product.years} {product.country}
          </span>
        </div>
        
        <div className="text-xs text-gray-600 mb-3 truncate">
          {product.supplier}
        </div>
        
        {quantity === 0 ? (
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            size="sm"
          >
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between">
            <Button
              onClick={handleDecrement}
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white p-2"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-medium text-lg px-4">{quantity}</span>
            <Button
              onClick={handleIncrement}
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white p-2"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;