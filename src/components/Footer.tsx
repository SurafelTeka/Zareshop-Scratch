import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Get Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Live chat</a></li>
              <li><a href="#" className="hover:text-orange-500">Check order status</a></li>
              <li><a href="#" className="hover:text-orange-500">Refunds</a></li>
              <li><a href="#" className="hover:text-orange-500">Report abuse</a></li>
            </ul>
          </div>

          {/* Trade Assurance */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Trade Assurance</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Safe and easy payments</a></li>
              <li><a href="#" className="hover:text-orange-500">Money-back policy</a></li>
              <li><a href="#" className="hover:text-orange-500">On-time shipping</a></li>
              <li><a href="#" className="hover:text-orange-500">After-sales protections</a></li>
            </ul>
          </div>

          {/* Source */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Source on Zare Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Request for Quotation</a></li>
              <li><a href="#" className="hover:text-orange-500">Membership program</a></li>
              <li><a href="#" className="hover:text-orange-500">Zare Shop Logistics</a></li>
              <li><a href="#" className="hover:text-orange-500">Sales tax and VAT</a></li>
            </ul>
          </div>

          {/* Sell */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sell on Zare Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Start selling</a></li>
              <li><a href="#" className="hover:text-orange-500">Seller Central</a></li>
              <li><a href="#" className="hover:text-orange-500">Become a Verified Supplier</a></li>
              <li><a href="#" className="hover:text-orange-500">Partnerships</a></li>
            </ul>
          </div>

          {/* Get to know us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get to know us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">About Zare Shop</a></li>
              <li><a href="#" className="hover:text-orange-500">Corporate responsibility</a></li>
              <li><a href="#" className="hover:text-orange-500">News center</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              Trade on the go with the Zare Shop app
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center space-x-3 px-6 py-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center space-x-3 px-6 py-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;