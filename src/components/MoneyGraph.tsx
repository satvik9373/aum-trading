
import { useEffect, useState } from 'react';

const MoneyGraph = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const data = [
    { x: 0, y: 50 },
    { x: 50, y: 30 },
    { x: 100, y: 60 },
    { x: 150, y: 40 },
    { x: 200, y: 80 },
    { x: 250, y: 65 },
    { x: 300, y: 90 },
  ];

  const pathData = data
    .map((point, index) => {
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    })
    .join(' ');

  return (
    <div className="w-full h-32 relative">
      <svg
        viewBox="0 0 300 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="50" height="20" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Gradient */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB5E20" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#1E2134" />
          </linearGradient>
        </defs>

        {/* Main line */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          className={isAnimating ? 'money-line' : ''}
        />

        {/* Data points */}
        {data.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#FB5E20"
            className={`transition-all duration-500 ${
              isAnimating ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </svg>
      
      {/* Floating dollar sign */}
      <div className="absolute top-2 right-4 text-orange text-2xl font-bold animate-float">
        $
      </div>
    </div>
  );
};

export default MoneyGraph;
