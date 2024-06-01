import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Search } from 'lucide-react';

const Sidebar: React.FC = () => {
  const countries = [
    { name: 'China', flag: '🇨🇳' },
    { name: 'Hong Kong SAR', flag: '🇭🇰' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Germany', flag: '🇩🇪' }
  ];

  return (
    <div className="w-64 space-y-4">
      {/* Min Order Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Min. order</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex space-x-2">
            <Input placeholder="Less than" className="text-xs" />
            <Button variant="outline" size="sm">OK</Button>
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
          
          <div className="space-y-2">
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
          <div className="text-xs text-gray-600 space-y-1">
            <div className="cursor-pointer hover:text-orange-500">Electronics</div>
            <div className="cursor-pointer hover:text-orange-500">Fashion</div>
            <div className="cursor-pointer hover:text-orange-500">Home & Garden</div>
            <div className="cursor-pointer hover:text-orange-500">Sports</div>
            <div className="cursor-pointer hover:text-orange-500">Tools</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;