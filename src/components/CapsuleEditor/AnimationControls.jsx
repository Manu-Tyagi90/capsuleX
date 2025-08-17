import { motion } from 'framer-motion';
import { FaTachometerAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AnimationControls = ({ config, setConfig }) => {
  const speedPresets = [
    { label: '0.25x', value: 0.25 },
    { label: '0.5x', value: 0.5 },
    { label: '1x', value: 1 },
    { label: '1.5x', value: 1.5 },
    { label: '2x', value: 2 },
    { label: '3x', value: 3 },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium dark:text-gray-300">
        Animation Controls
      </h3>
      
      {/* Animation Speed */}
      <div>
        <label className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
          <FaTachometerAlt />
          Animation Speed: {config.animationSpeed || 1}x
        </label>
        
        {/* Speed Presets */}
        <div className="flex gap-1 mb-3">
          {speedPresets.map(preset => (
            <motion.button
              key={preset.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setConfig({...config, animationSpeed: preset.value})}
              className={`px-2 py-1 text-xs rounded transition-all ${
                (config.animationSpeed || 1) === preset.value
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {preset.label}
            </motion.button>
          ))}
        </div>
        
        {/* Speed Slider */}
        <div className="flex items-center gap-3">
          <input
            id="animation-speed-slider"
            type="range"
            min="0.25"
            max="3"
            step="0.25"
            value={config.animationSpeed || 1}
            onChange={(e) => setConfig({...config, animationSpeed: parseFloat(e.target.value)})}
            className="flex-1"
            aria-label="Animation speed slider"
          />
          <span className="text-sm font-medium dark:text-white min-w-[3rem] text-right">
            {config.animationSpeed || 1}x
          </span>
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>Slow</span>
          <span>Normal</span>
          <span>Fast</span>
        </div>
      </div>

      {/* Animation Area (for text animations) */}
      {config.text.animation !== 'none' && (
        <div>
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">
            Text Animation Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="x-range-slider" className="text-xs text-gray-400">X Range</label>
              <input
                id="x-range-slider"
                type="range"
                min="0"
                max="100"
                value={config.animationRange?.x || 50}
                onChange={(e) => setConfig({
                  ...config, 
                  animationRange: {
                    ...config.animationRange,
                    x: parseInt(e.target.value)
                  }
                })}
                className="w-full"
              />
              <div className="text-xs text-center dark:text-gray-300">
                {config.animationRange?.x || 50}px
              </div>
            </div>
            <div>
              <label htmlFor="y-range-slider" className="text-xs text-gray-400">Y Range</label>
              <input
                id="y-range-slider"
                type="range"
                min="0"
                max="100"
                value={config.animationRange?.y || 30}
                onChange={(e) => setConfig({
                  ...config, 
                  animationRange: {
                    ...config.animationRange,
                    y: parseInt(e.target.value)
                  }
                })}
                className="w-full"
              />
              <div className="text-xs text-center dark:text-gray-300">
                {config.animationRange?.y || 30}px
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Glow Effect Toggle */}
      <div className="flex items-center justify-between">
        <label htmlFor="glow-toggle" className="text-sm dark:text-gray-300">Glow Effect</label>
        <motion.button
          id="glow-toggle"
          role="switch"
          aria-checked={config.enableGlow}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setConfig({...config, enableGlow: !config.enableGlow})}
          className={`w-12 h-6 rounded-full p-1 transition-colors ${
            config.enableGlow 
              ? 'bg-purple-500' 
              : 'bg-gray-300 dark:bg-gray-600'
          }`}
        >
          <motion.div 
            className="w-4 h-4 bg-white rounded-full"
            animate={{ x: config.enableGlow ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.button>
      </div>

      {/* Debug Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-800 rounded">
        <div>Current Speed: {config.animationSpeed || 1}x</div>
        <div>Text Animation: {config.text.animation}</div>
        <div>Shape Animation: {config.shapeAnimation}</div>
      </div>
    </div>
  );
};

// PropTypes validation
AnimationControls.propTypes = {
  config: PropTypes.shape({
    animationSpeed: PropTypes.number,
    animationRange: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    enableGlow: PropTypes.bool,
    text: PropTypes.shape({
      animation: PropTypes.string
    }).isRequired,
    shapeAnimation: PropTypes.string
  }).isRequired,
  setConfig: PropTypes.func.isRequired
};

export default AnimationControls;