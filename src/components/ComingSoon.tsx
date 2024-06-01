import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-pink-400 py-8 mb-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-bounce">
          <h2 className="text-4xl font-bold text-white mb-2">
            🚀 Coming Soon
          </h2>
        </div>
        <p className="text-white text-lg animate-pulse">
          Exciting new features are on the way!
        </p>
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;