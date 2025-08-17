import { generateBlobPath, blobMorphPaths } from './blobPaths';
import { generateNeonBars } from './particleGenerator';

export const generateShapePath = (shape, width, height) => {
  const shapes = {
    wave: {
      path: `M0,${height/2} Q${width/4},${height/3} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z`,
      textPosition: { x: width/2, y: height * 0.7 },
      hasBubbles: true
    },
    
    wave2: {
      path: `M0,${height*0.5} C${width*0.1},${height*0.4} ${width*0.2},${height*0.6} ${width*0.3},${height*0.5} C${width*0.4},${height*0.4} ${width*0.5},${height*0.6} ${width*0.6},${height*0.5} C${width*0.7},${height*0.4} ${width*0.8},${height*0.6} ${width*0.9},${height*0.5} C${width*0.95},${height*0.45} ${width},${height*0.5} ${width},${height*0.5} L${width},${height} L0,${height} Z`,
      textPosition: { x: width/2, y: height * 0.75 },
      hasWaveAnimation: true
    },
    
    doubleWave: {
      path: `M0,${height*0.4} Q${width*0.25},${height*0.2} ${width*0.5},${height*0.4} T${width},${height*0.4} L${width},${height*0.6} Q${width*0.75},${height*0.8} ${width*0.5},${height*0.6} T0,${height*0.6} Z`,
      textPosition: { x: width/2, y: height/2 }
    },
    
    blob: {
      // Use the first blob path as default
      path: `M${width/2 + generateBlobPath(0, width, height).split('M')[1]}`,
      textPosition: { x: width/2, y: height/2 },
      hasMorphAnimation: true,
      morphPaths: blobMorphPaths.map((_, index) => 
        `M${width/2},${height/2} m${generateBlobPath(index, width, height).split('M')[1]}`
      )
    },
    
    // Updated rounded with neon bars
    rounded: {
      path: `M${width*0.1},${height*0.1} L${width*0.9},${height*0.1} Q${width*0.95},${height*0.1} ${width*0.95},${height*0.15} L${width*0.95},${height*0.85} Q${width*0.95},${height*0.9} ${width*0.9},${height*0.9} L${width*0.1},${height*0.9} Q${width*0.05},${height*0.9} ${width*0.05},${height*0.85} L${width*0.05},${height*0.15} Q${width*0.05},${height*0.1} ${width*0.1},${height*0.1} Z`,
      textPosition: { x: width/2, y: height/2 },
      hasNeonBars: true,
      neonBars: generateNeonBars(width, height, 20)
    },
    
    hexagon: {
      path: `M${width*0.25},0 L${width*0.75},0 L${width},${height*0.5} L${width*0.75},${height} L${width*0.25},${height} L0,${height*0.5} Z`,
      textPosition: { x: width/2, y: height/2 }
    },
    
    diamond: {
      path: `M${width*0.5},0 L${width},${height*0.5} L${width*0.5},${height} L0,${height*0.5} Z`,
      textPosition: { x: width/2, y: height/2 }
    },
    
    arrow: {
      path: `M0,${height*0.3} L${width*0.7},${height*0.3} L${width*0.7},0 L${width},${height*0.5} L${width*0.7},${height} L${width*0.7},${height*0.7} L0,${height*0.7} Z`,
      textPosition: { x: width*0.35, y: height/2 }
    },
    
    cloud: {
      path: `M${width*0.2},${height*0.8} Q${width*0.05},${height*0.8} ${width*0.05},${height*0.6} Q${width*0.05},${height*0.4} ${width*0.2},${height*0.4} Q${width*0.25},${height*0.2} ${width*0.4},${height*0.25} Q${width*0.5},${height*0.1} ${width*0.65},${height*0.2} Q${width*0.8},${height*0.15} ${width*0.85},${height*0.35} Q${width*0.95},${height*0.4} ${width*0.95},${height*0.6} Q${width*0.95},${height*0.8} ${width*0.8},${height*0.8} Z`,
      textPosition: { x: width/2, y: height*0.55 }
    },
    
    star: {
      path: `M${width*0.5},0 L${width*0.6},${height*0.35} L${width},${height*0.35} L${width*0.7},${height*0.6} L${width*0.8},${height} L${width*0.5},${height*0.75} L${width*0.2},${height} L${width*0.3},${height*0.6} L0,${height*0.35} L${width*0.4},${height*0.35} Z`,
      textPosition: { x: width/2, y: height*0.5 }
    },
    
    heart: {
      path: `M${width*0.5},${height*0.25} C${width*0.5},${height*0.1} ${width*0.35},0 ${width*0.25},0 C${width*0.1},0 0,${height*0.1} 0,${height*0.25} C0,${height*0.4} ${width*0.5},${height*0.9} ${width*0.5},${height} C${width*0.5},${height*0.9} ${width},${height*0.4} ${width},${height*0.25} C${width},${height*0.1} ${width*0.9},0 ${width*0.75},0 C${width*0.65},0 ${width*0.5},${height*0.1} ${width*0.5},${height*0.25} Z`,
      textPosition: { x: width/2, y: height*0.45 }
    }
  };

  return shapes[shape] || shapes.rounded;
};

// Generate bubble positions for wave animation
export const generateBubbles = (width, height, count = 8) => {
  const bubbles = [];
  for (let i = 0; i < count; i++) {
    bubbles.push({
      id: i,
      position: Math.random() * 100,
      size: Math.random() * 2 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 4,
      distance: Math.random() * 5 + 5
    });
  }
  return bubbles;
};

// Generate wave layers for wave2
export const generateWaveLayers = (width, height) => {
  const waveHeight = height * 0.3;
  const wavePath = `M 0,${waveHeight} 
    C ${width*0.25},${waveHeight*0.5} ${width*0.75},${waveHeight*1.5} ${width},${waveHeight}
    L ${width},0 L 0,0 Z`;
  
  return {
    path: wavePath,
    layers: [
      { delay: 0, duration: 5, opacity: 0.7 },
      { delay: -2, duration: 7, opacity: 0.5 },
      { delay: -4, duration: 10, opacity: 0.3 }
    ]
  };
};

export const calculateTextBoundingBox = (text, fontSize) => {
  const avgCharWidth = fontSize * 0.6;
  const textWidth = text.length * avgCharWidth;
  const textHeight = fontSize * 1.2;
  
  return {
    width: textWidth,
    height: textHeight
  };
};

export const getOptimalTextPosition = (shape, width, height, textWidth, textHeight) => {
  const shapeData = generateShapePath(shape, width, height);
  let { x, y } = shapeData.textPosition;
  
  const padding = 20;
  const minX = textWidth/2 + padding;
  const maxX = width - textWidth/2 - padding;
  const minY = textHeight/2 + padding;
  const maxY = height - textHeight/2 - padding;
  
  x = Math.max(minX, Math.min(maxX, x));
  y = Math.max(minY, Math.min(maxY, y));
  
  return { x, y };
};