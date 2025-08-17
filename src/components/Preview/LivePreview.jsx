import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { generateShapePath, getOptimalTextPosition, calculateTextBoundingBox, generateBubbles, generateWaveLayers } from '../../utils/shapeGenerator';
import { textAnimations, shapeAnimations, getAnimationWithSpeed } from '../../utils/animations';
import { generateBlobKeyframes } from '../../utils/blobPaths';
import { particleStyles, generateContinuousNeonBars } from '../../utils/particleGenerator';
import * as htmlToImage from 'html-to-image';

const LivePreview = ({ config }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [textPosition, setTextPosition] = useState({ x: config.width/2, y: config.height/2 });
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [neonBars, setNeonBars] = useState([]);
  const [barIdCounter, setBarIdCounter] = useState(0);
  
  const gradientId = `gradient-${Math.random().toString(36).substring(2, 9)}`;
  const shapeData = generateShapePath(config.shape, config.width, config.height);
  
  useEffect(() => {
    const textBounds = calculateTextBoundingBox(config.text.content, parseInt(config.text.fontSize));
    const optimalPosition = getOptimalTextPosition(
      config.shape, 
      config.width, 
      config.height, 
      textBounds.width, 
      textBounds.height
    );
    setTextPosition(optimalPosition);
    
    // Generate bubbles for wave shape
    if (config.shape === 'wave' && shapeData.hasBubbles) {
      setBubbles(generateBubbles(config.width, config.height));
    }
  }, [config.shape, config.width, config.height, config.text, shapeData.hasBubbles]);

  // Reset animation when changed
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [config.text.animation, config.shapeAnimation]);

  // Create continuous neon bars for rounded shape
  useEffect(() => {
    if (config.shape === 'rounded' && isAnimating && shapeData.hasNeonBars) {
      const interval = setInterval(() => {
        const newBar = generateContinuousNeonBars(config.width, config.height);
        setNeonBars(prev => [...prev, { ...newBar, id: barIdCounter, createdAt: Date.now() }]);
        setBarIdCounter(prev => prev + 1);
      }, 500 / (config.animationSpeed || 1)); // Speed affects generation rate

      return () => clearInterval(interval);
    } else {
      setNeonBars([]); // Clear bars when shape changes
    }
  }, [config.shape, config.width, config.height, isAnimating, config.animationSpeed, barIdCounter, shapeData.hasNeonBars]);

  // Clean up completed neon bars
  useEffect(() => {
    const cleanup = setInterval(() => {
      setNeonBars(prev => prev.filter(bar => {
        const age = Date.now() - (bar.createdAt || Date.now());
        return age < (bar.duration * 1000 / (config.animationSpeed || 1));
      }));
    }, 1000);

    return () => clearInterval(cleanup);
  }, [config.animationSpeed]);

  const downloadSVG = async () => {
    setIsAnimating(false);
    setTimeout(async () => {
      if (containerRef.current) {
        const dataUrl = await htmlToImage.toSvg(containerRef.current, {
          backgroundColor: 'transparent',
        });
        
        const link = document.createElement('a');
        link.download = 'capsule.svg';
        link.href = dataUrl;
        link.click();
      }
      setIsAnimating(true);
    }, 100);
  };

  const getTextAnimation = () => {
    if (!isAnimating) return {};
    
    const animation = textAnimations[config.text.animation] || textAnimations.none;
    const speed = config.animationSpeed || 1;
    const range = config.animationRange || { x: 50, y: 30 };
    
    // Debug log
    console.log('Applying text animation with speed:', speed);
    
    return getAnimationWithSpeed(animation, speed, range);
  };

  const getShapeAnimation = () => {
    if (!isAnimating) return {};
    const speed = config.animationSpeed || 1;
    
    // Debug log
    console.log('Applying shape animation with speed:', speed);
    
    return getAnimationWithSpeed(
      shapeAnimations[config.shapeAnimation] || shapeAnimations.static,
      speed
    );
  };

  const getTransformOrigin = () => {
    switch(config.text.animation) {
      case 'swing':
      case 'hinge':
        return 'top center';
      case 'rotateInDownLeft':
      case 'rotateInUpLeft':
        return 'left bottom';
      default:
        return 'center';
    }
  };

  const renderWaveShape = () => {
    // Wave shape with bubbles
    if (config.shape === 'wave' && shapeData.hasBubbles) {
      return (
        <>
          {/* Main wave shape */}
          <motion.path 
            d={shapeData.path} 
            fill={`url(#${gradientId})`}
            filter={config.enableGlow ? "url(#glow)" : ""}
            {...getShapeAnimation()}
          />
          
          {/* Bubbles */}
          {isAnimating && bubbles.map((bubble) => (
            <circle
              key={bubble.id}
              cx={`${bubble.position}%`}
              cy={config.height}
              r="0"
              fill={config.color.colors[1]}
              opacity="0.6"
            >
              <animate
                attributeName="cy"
                from={config.height}
                to={config.height - (bubble.distance * config.height / 10)}
                dur={`${bubble.duration / (config.animationSpeed || 1)}s`}
                begin={`${bubble.delay / (config.animationSpeed || 1)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`0;${bubble.size * 4};${bubble.size * 4};0`}
                keyTimes="0;0.25;0.75;1"
                dur={`${bubble.duration / (config.animationSpeed || 1)}s`}
                begin={`${bubble.delay / (config.animationSpeed || 1)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.6;0"
                keyTimes="0;0.25;0.75;1"
                dur={`${bubble.duration / (config.animationSpeed || 1)}s`}
                begin={`${bubble.delay / (config.animationSpeed || 1)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </>
      );
    } 
    
    // Wave2 shape with layers
    else if (config.shape === 'wave2' && shapeData.hasWaveAnimation) {
      const waveLayers = generateWaveLayers(config.width, config.height);
      return (
        <>
          {/* Background wave layers */}
          {waveLayers.layers.map((layer, index) => (
            <g key={`wave-layer-${layer.delay}-${layer.duration}`} opacity={layer.opacity}>
              <path
                d={shapeData.path}
                fill={config.color.colors[0]}
              >
                {isAnimating && (
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="-90 0"
                    to="90 0"
                    dur={`${layer.duration / (config.animationSpeed || 1)}s`}
                    begin={`${layer.delay}s`}
                    repeatCount="indefinite"
                  />
                )}
              </path>
            </g>
          ))}
          
          {/* Main wave shape */}
          <motion.path 
            d={shapeData.path} 
            fill={`url(#${gradientId})`}
            filter={config.enableGlow ? "url(#glow)" : ""}
            {...getShapeAnimation()}
          />
        </>
      );
    }
    
    // Blob shape with morphing
    else if (config.shape === 'blob' && shapeData.hasMorphAnimation) {
      const blobPaths = generateBlobKeyframes(config.width, config.height);
      const centerX = config.width / 2;
      const centerY = config.height / 2;
      
      return (
        <g transform={`translate(${centerX}, ${centerY})`}>
          <path 
            fill={`url(#${gradientId})`}
            filter={config.enableGlow ? "url(#glow)" : ""}
          >
            {isAnimating && (
              <>
                <animate
                  attributeName="d"
                  values={blobPaths.join(';')}
                  dur={`${7 / (config.animationSpeed || 1)}s`}
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur={`${53 / (config.animationSpeed || 1)}s`}
                  repeatCount="indefinite"
                />
              </>
            )}
            {!isAnimating && (
              <animate
                attributeName="d"
                to={blobPaths[0]}
                dur="0.1s"
                fill="freeze"
              />
            )}
          </path>
        </g>
      );
    }
    
    // Rounded shape with neon bars
    else if (config.shape === 'rounded' && shapeData.hasNeonBars) {
      return (
        <>
          {/* Background gradient shape - darker for contrast */}
          <defs>
            <linearGradient id={`${gradientId}-dark`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#13043B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#580DE7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          <motion.path 
            d={shapeData.path} 
            fill={`url(#${gradientId}-dark)`}
            {...getShapeAnimation()}
          />
          
          {/* Neon bars container with rotation */}
          <g 
            transform={`rotate(-30 ${config.width/2} ${config.height/2})`}
            style={{ mixBlendMode: 'screen' }}
          >
            {/* Initial neon bars */}
            {isAnimating && shapeData.neonBars.map((bar) => {
              const style = particleStyles[bar.type];
              return (
                <rect
                  key={`initial-${bar.id}`}
                  x={bar.startX}
                  y={bar.startY}
                  width={bar.width}
                  height={bar.height}
                  rx={bar.height / 2}
                  fill={style.color}
                  opacity="0"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.9;1"
                    dur={`${bar.duration / (config.animationSpeed || 1)}s`}
                    begin={`${bar.delay / (config.animationSpeed || 1)}s`}
                    fill="freeze"
                  />
                  <animate
                    attributeName="x"
                    from={bar.startX}
                    to={bar.startX + config.width * 0.8}
                    dur={`${bar.duration / (config.animationSpeed || 1)}s`}
                    begin={`${bar.delay / (config.animationSpeed || 1)}s`}
                    fill="freeze"
                  />
                </rect>
              );
            })}
            
            {/* Continuous neon bars */}
            {neonBars.map((bar) => {
              const style = particleStyles[bar.type];
              
              return (
                <g key={`continuous-${bar.id}`}>
                  <rect
                    x={bar.startX}
                    y={bar.startY}
                    width={bar.width}
                    height={bar.height}
                    rx={bar.height / 2}
                    fill={style.color}
                    filter={`url(#${bar.type}Glow)`}
                  >
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.1;0.9;1"
                      dur={`${bar.duration / (config.animationSpeed || 1)}s`}
                      fill="freeze"
                    />
                    <animate
                      attributeName="x"
                      from={bar.startX}
                      to={bar.startX + config.width * 0.8}
                      dur={`${bar.duration / (config.animationSpeed || 1)}s`}
                      fill="freeze"
                    />
                  </rect>
                </g>
              );
            })}
          </g>
        </>
      );
    }
    
    // Default shape rendering
    return (
      <motion.path 
        d={shapeData.path} 
        fill={`url(#${gradientId})`}
        filter={config.enableGlow ? "url(#glow)" : ""}
        {...getShapeAnimation()}
      />
    );
  };

  const renderText = () => {
    const baseProps = {
      x: textPosition.x,
      y: textPosition.y,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fill: config.text.color,
      fontSize: config.text.fontSize,
      fontWeight: config.text.fontWeight || "bold",
      fontFamily: config.text.fontFamily || 'Arial, sans-serif',
      letterSpacing: config.text.letterSpacing || 0,
      style: {
        filter: config.text.animation === 'glow' && config.enableGlow && isAnimating 
          ? 'drop-shadow(0 0 10px currentColor)' 
          : '',
        transformOrigin: getTransformOrigin(),
      }
    };

    // Special handling for typewriter animation
    if (config.text.animation === 'typewriter' && isAnimating) {
      return (
        <text {...baseProps}>
          <tspan>
            {config.text.content}
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="0.01s"
              fill="freeze"
            />
          </tspan>
          <animate
            attributeName="textLength"
            from="0"
            to={config.text.content.length * parseInt(config.text.fontSize) * 0.6}
            dur={`${config.text.content.length * 0.1 / (config.animationSpeed || 1)}s`}
            fill="freeze"
            repeatCount="indefinite"
          />
        </text>
      );
    }

    return (
      <motion.text
        key={animationKey}
        {...baseProps}
        {...getTextAnimation()}
      >
        {config.text.content}
      </motion.text>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">
          👁️ Live Preview
        </h2>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAnimating(!isAnimating)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isAnimating 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
            }`}
          >
            {isAnimating ? '⏸️ Pause' : '▶️ Play'} Animation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadSVG}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium"
          >
            💾 Save SVG
          </motion.button>
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 overflow-auto">
        <div ref={containerRef} className="flex justify-center items-center min-h-[300px]">
          <svg
            ref={svgRef}
            width={config.width}
            height={config.height}
            viewBox={`0 0 ${config.width} ${config.height}`}
            className="max-w-full h-auto"
            style={{ backgroundColor: 'transparent' }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={config.color.colors[0]}>
                  {isAnimating && (
                    <animate
                      attributeName="stop-color"
                      values={`${config.color.colors[0]};${config.color.colors[1]};${config.color.colors[0]}`}
                      dur={`${4 / (config.animationSpeed || 1)}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </stop>
                <stop offset="100%" stopColor={config.color.colors[1]}>
                  {isAnimating && (
                    <animate
                      attributeName="stop-color"
                      values={`${config.color.colors[1]};${config.color.colors[0]};${config.color.colors[1]}`}
                      dur={`${4 / (config.animationSpeed || 1)}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </stop>
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Blob filter for wave bubbles */}
              <filter id="blob">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>
              
              {/* Neon glow filters */}
              <filter id="s1Glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="rgb(94, 254, 255)" floodOpacity="0.7"/>
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="rgb(94, 254, 255)" floodOpacity="0.7"/>
                <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="rgb(94, 254, 255)" floodOpacity="0.7"/>
                <feDropShadow dx="0" dy="0" stdDeviation="30" floodColor="rgb(94, 254, 255)" floodOpacity="0.7"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="s2Glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="rgb(255, 255, 62)" floodOpacity="0.7"/>
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="rgb(255, 255, 62)" floodOpacity="0.7"/>
                <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="rgb(255, 255, 62)" floodOpacity="0.7"/>
                <feDropShadow dx="0" dy="0" stdDeviation="30" floodColor="rgb(255, 255, 62)" floodOpacity="0.7"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <motion.g
              key={animationKey}
              style={{ transformOrigin: 'center' }}
            >
              {renderWaveShape()}
            </motion.g>
            
            <AnimatePresence mode="wait">
              {renderText()}
            </AnimatePresence>
          </svg>
        </div>
      </div>
      
      {/* Preview Info */}
      <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-gray-500 dark:text-gray-400 text-xs">Shape</div>
          <div className="font-medium dark:text-white capitalize">{config.shape}</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-gray-500 dark:text-gray-400 text-xs">Text Anim</div>
          <div className="font-medium dark:text-white capitalize text-xs">{config.text.animation}</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-gray-500 dark:text-gray-400 text-xs">Shape Anim</div>
          <div className="font-medium dark:text-white capitalize text-xs">{config.shapeAnimation}</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <div className="text-gray-500 dark:text-gray-400 text-xs">Speed</div>
          <div className="font-medium dark:text-white">{config.animationSpeed || 1}x</div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
LivePreview.propTypes = {
  config: PropTypes.shape({
    shape: PropTypes.string.isRequired,
    shapeAnimation: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.shape({
      type: PropTypes.string,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    text: PropTypes.shape({
      content: PropTypes.string.isRequired,
      fontSize: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      animation: PropTypes.string,
      fontFamily: PropTypes.string,
      fontWeight: PropTypes.string,
      letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }).isRequired,
    enableGlow: PropTypes.bool,
    animationSpeed: PropTypes.number,
    animationRange: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    section: PropTypes.string
  }).isRequired
};

export default LivePreview;