import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        >
          Contact supplier
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;