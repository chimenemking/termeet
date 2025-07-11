// components/ClockWheel.tsx
// components/ClockWheel.tsx
import React from 'react';

interface ClockWheelProps {
  size: number;
  teeth: number;
  color: string;
}

const ClockWheel: React.FC<ClockWheelProps> = ({ size, teeth, color }) => {
  const toothAngle = 360 / teeth;
  const toothWidth = size / 5;
  const toothHeight = size / 3;
  const radius = size / 2 - toothHeight / 2;
  const innerRadius = radius * 0.4; // Add an inner circle

  const teethPaths = Array.from({ length: teeth }, (_, i) => {
    const angle = i * toothAngle;
    const rad = (angle * Math.PI) / 180;
    const x1 = size / 2 + radius * Math.cos(rad);
    const y1 = size / 2 + radius * Math.sin(rad);
    const x2 = size / 2 + (radius + toothHeight) * Math.cos(rad);
    const y2 = size / 2 + (radius + toothHeight) * Math.sin(rad);
    const x3 = size / 2 + (radius + toothHeight) * Math.cos(rad + (toothAngle / 2) * Math.PI / 180);
    const y3 = size / 2 + (radius + toothHeight) * Math.sin(rad + (toothAngle / 2) * Math.PI / 180);

    return `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`;
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill={color} />
      <circle cx={size / 2} cy={size / 2} r={innerRadius} fill="white" /> {/* Inner Circle */}
      {teethPaths.map((path, index) => (
        <path key={index} d={path} fill={color} />
      ))}
    </svg>
  );
};

export default ClockWheel;