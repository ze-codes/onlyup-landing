"use client";
import React, { useState, useEffect } from "react";
import { Instagram, TrendingUp, Twitter, Music } from "lucide-react";

export default function SocialTradingTeaser() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [animatedElements, setAnimatedElements] = useState<
    Array<{
      delay: number;
      duration: number;
      emoji: string;
    }>
  >([]);

  useEffect(() => {
    // Generate random elements only on the client side
    setAnimatedElements(
      Array(48)
        .fill("")
        .map(() => ({
          delay: Math.random() * 5,
          duration: 1 + Math.random() * 5,
          emoji: ["💰", "📈", "🚀", "💎", "🔥"][Math.floor(Math.random() * 5)],
        }))
    );
  }, []);

  const socialButtons = [
    {
      id: "instagram",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      className:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500",
    },
    {
      id: "tiktok",
      icon: <Music className="h-5 w-5" />,
      label: "TikTok",
      className:
        "bg-gradient-to-r from-black to-gray-800 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-500",
    },
    {
      id: "twitter",
      icon: <Twitter className="h-5 w-5" />,
      label: "X",
      className: "bg-blue-400 hover:bg-gray-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden grid grid-cols-8 grid-rows-6">
        {animatedElements.map((element, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-4xl animate-float"
            style={{
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden relative z-10">
        <div className="p-8 text-center">
          <div className="mb-4 flex justify-center">
            <TrendingUp className="h-16 w-16 text-pink-500 animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">OnlyUp</h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
            Join the fun! Trade, share, and grow together in our social trading
            community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {socialButtons.map((button) => (
              <div
                key={button.id}
                className="relative"
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <button
                  className={`w-44 h-12 inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 ${button.className}`}
                >
                  <div className="relative w-full text-center">
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredButton === button.id
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {button.icon}
                        {button.label}
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredButton === button.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      Coming Soon
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-pink-100 p-4">
          <p className="text-sm text-pink-800 text-center font-semibold">
            Coming soon! Stay tuned for the coolest way to trade.
          </p>
        </div>
      </div>
    </div>
  );
}
