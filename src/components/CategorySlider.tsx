import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Smartphone, 
  Sparkles, 
  Shirt, 
  Home, 
  MoreHorizontal,
  Laptop,
  Car,
  Gamepad2,
  Armchair,
  Droplets,
  Dumbbell,
  TreePine,
  Cog,
  Gift,
  Lightbulb,
  ShoppingBag,
  Eye
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: <Smartphone className="h-6 w-6" /> },
  { id: 'beauty', name: 'Beauty', icon: <Sparkles className="h-6 w-6" /> },
  { id: 'clothing', name: 'Clothing', icon: <Shirt className="h-6 w-6" /> },
  { id: 'house-rent', name: 'House Rent', icon: <Home className="h-6 w-6" /> },
  { id: 'furniture', name: 'Furniture', icon: <Armchair className="h-6 w-6" /> },
  { id: 'cleaning', name: 'Cleaning', icon: <Droplets className="h-6 w-6" /> },
  { id: 'sports', name: 'Sports & Fitness', icon: <Dumbbell className="h-6 w-6" /> },
  { id: 'garden', name: 'Home & Garden', icon: <TreePine className="h-6 w-6" /> },
  { id: 'machinery', name: 'Industrial Machinery', icon: <Cog className="h-6 w-6" /> },
  { id: 'gifts', name: 'Gifts & Crafts', icon: <Gift className="h-6 w-6" /> },
  { id: 'lighting', name: 'Lights & Lighting', icon: <Lightbulb className="h-6 w-6" /> },
  { id: 'shoes', name: 'Shoes', icon: <ShoppingBag className="h-6 w-6" /> },
  { id: 'jewelry', name: 'Jewelry & Eyewear', icon: <Eye className="h-6 w-6" /> },
  { id: 'luggage', name: 'Luggages & Bags', icon: <ShoppingBag className="h-6 w-6" /> },
  { id: 'others', name: 'Others', icon: <MoreHorizontal className="h-6 w-6" /> },
];

const CategorySlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll('left')}
            className="flex-shrink-0 p-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center space-y-2 cursor-pointer group min-w-[80px] transition-transform hover:scale-105"
              >
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-full group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                  <div className="text-orange-600 dark:text-orange-400">
                    {category.icon}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll('right')}
            className="flex-shrink-0 p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;