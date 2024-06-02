import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Search } from 'lucide-react';

const Sidebar: React.FC = () => {
  const countries = [
    { name: 'Ethiopia', flag: '🇪🇹' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Tanzania', flag: '🇹🇿' },
    { name: 'Rwanda', flag: '🇷🇼' }
  ];

  const categories = [
    'Electronics',
    'Fashion & Clothing',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Beauty & Personal Care',
    'Traditional Wear',
    'Perfumes & Fragrances',
    'Shoes & Accessories'
  ];

  return (
    <div className="w-full lg:w-64 space-y-4">
      {/* Price Range Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Price Range (ETB)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex space-x-2">
            <Input placeholder="Min" className="text-xs" />
            <Input placeholder="Max" className="text-xs" />
            <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600">OK</Button>
          </div>
        </CardContent>
      </Card>

      {/* Min Order Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Min. order</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex space-x-2">
            <Input placeholder="Quantity" className="text-xs" />
            <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600">OK</Button>
          </div>
        </CardContent>
      </Card>

      {/* Supplier Country Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Supplier country/region</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="search" className="pl-8 text-xs" />
          </div>
          
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center space-x-2">
                <Checkbox id={country.name} />
                <label 
                  htmlFor={country.name} 
                  className="text-xs flex items-center space-x-2 cursor-pointer"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xs text-gray-600 space-y-1 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="cursor-pointer hover:text-orange-500 py-1">
                {category}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Supplier Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" />
              <label htmlFor="verified" className="text-xs cursor-pointer">
                ✓ Verified Supplier
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="trade-assurance" />
              <label htmlFor="trade-assurance" className="text-xs cursor-pointer">
                🛡️ Trade Assurance
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;