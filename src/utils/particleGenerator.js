// Generate neon bars for rounded shape
export const generateNeonBars = (width, height, count = 15) => {
  const bars = [];
  
  for (let i = 0; i < count; i++) {
    const type = Math.random() > 0.5 ? 's1' : 's2';
    const barHeight = Math.random() * 6 + 2; // 2-8px height
    const barWidth = Math.random() * 250 + 50; // 50-300px width
    
    bars.push({
      id: i,
      type,
      width: barWidth,
      height: barHeight,
      // Starting position (left side, random vertical)
      startX: -width * 0.3 + Math.random() * width * 0.7,
      startY: -height * 0.3 + Math.random() * height * 1.6,
      // Duration based on height (smaller = faster)
      duration: 7 - barHeight / 2,
      delay: i * 0.5, // Stagger the animations
      opacity: 0
    });
  }
  
  return bars;
};

// Generate continuous neon bars
export const generateContinuousNeonBars = (width, height) => {
  const type = Math.random() > 0.5 ? 's1' : 's2';
  const barHeight = Math.random() * 6 + 2;
  const barWidth = Math.random() * 250 + 50;
  
  return {
    type,
    width: barWidth,
    height: barHeight,
    startX: -width * 0.3 + Math.random() * width * 0.7,
    startY: -height * 0.3 + Math.random() * height * 1.6,
    duration: 7 - barHeight / 2,
  };
};

// Particle colors and glow configurations
export const particleStyles = {
  s1: {
    color: 'rgb(94, 254, 255)',
    glow: 'rgba(94, 254, 255, 0.7)',
    name: 'Cyan'
  },
  s2: {
    color: 'rgb(255, 255, 62)',
    glow: 'rgba(255, 255, 62, 0.7)',
    name: 'Yellow'
  }
};