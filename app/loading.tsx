'use client';

import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full">
        {/* Animated document */}
        <div className="relative mx-auto w-64 h-80 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 transform rotate-1 animate-pulse">
          {/* Document header */}
          <div className="h-8 bg-primary/10 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
          
          {/* Document content */}
          <div className="p-6 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-4/6 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse" />
            <div className="h-8" />
            <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-4/6 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse" />
            <div className="h-8" />
            <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-5/6 animate-pulse" />
            <div className="h-2 bg-gray-100 rounded w-4/6 animate-pulse" />
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-100">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-in-out"
              style={{
                animation: 'progress 2s ease-in-out infinite',
                width: '0%',
              }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2 animate-pulse">
            Crafting Your Resume
          </h2>
          <p className="text-muted-foreground">
            Almost there! Your professional resume is being prepared...
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Loading;