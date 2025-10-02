'use client';

import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-blob"></div>
        <div className="absolute top-80 right-20 w-48 h-48 bg-pink-400/20 rounded-full animate-blob animation-delay-2s"></div>
        <div className="absolute bottom-40 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full animate-blob animation-delay-4s"></div>
      </div>

      {/* Glassmorphism container */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
        {/* Animated resume icon SVG */}
        <svg
          className="w-24 h-24 mx-auto mb-6"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="5"
            stroke="white"
            strokeWidth="2"
            className="animate-draw"
          />
          <line
            x1="20"
            y1="25"
            x2="80"
            y2="25"
            stroke="white"
            strokeWidth="1"
            className="animate-draw delay-200"
          />
          <line
            x1="20"
            y1="40"
            x2="80"
            y2="40"
            stroke="white"
            strokeWidth="1"
            className="animate-draw delay-400"
          />
          <circle
            cx="25"
            cy="55"
            r="3"
            fill="white"
            className="animate-bounce delay-600"
          />
          <path
            d="M20 70 L35 70 L35 75 L20 75 Z"
            fill="white"
            className="animate-slide-up delay-800"
          />
        </svg>

        {/* 404 heading with glitch effect */}
        <h1 className="text-8xl font-black text-white mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        <p className="text-2xl font-semibold text-white/90 mb-4 animate-fade-in">
          Oops! Page Not Found
        </p>

        <p className="text-lg text-white/70 mb-8 animate-fade-in delay-200">
          It looks like this resume blueprint got lost in the shuffle. 
          Let's get back to crafting your story.
        </p>

        {/* Animated button */}
        <Link
          href="/builder"
          className="inline-block bg-gradient-to-r from-white to-gray-100 text-indigo-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-all duration-300 hover:from-gray-100 hover:to-white hover:shadow-xl hover:translate-y-1 animate-float"
        >
          Build Your Resume
        </Link>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2s {
          animation-delay: 2s;
        }
        .animation-delay-4s {
          animation-delay: 4s;
        }
        @keyframes draw {
          from {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          stroke-dasharray: 200;
          animation: draw 1.5s ease-in-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;