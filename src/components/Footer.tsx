import React from 'react';
import { Button } from '@/components/ui/button';

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
            <div className="flex space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>📱</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>🤖</span>
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