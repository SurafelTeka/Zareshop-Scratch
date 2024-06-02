import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ComingSoon from './ComingSoon';
import ProductCard from './ProductCard';
import Footer from './Footer';
import SellerForm from './SellerForm';
import { products } from '@/data/products';

const AppLayout: React.FC = () => {
  const [showSellerForm, setShowSellerForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onBecomeSellerClick={() => setShowSellerForm(true)} />
      
      <ComingSoon />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-64 flex-shrink-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
              <p className="text-gray-600">({products.length} products available)</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {showSellerForm && (
        <SellerForm onClose={() => setShowSellerForm(false)} />
      )}
    </div>
  );
};

export default AppLayout;