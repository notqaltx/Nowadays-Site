// src/pages/Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce1"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce2"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce3"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
