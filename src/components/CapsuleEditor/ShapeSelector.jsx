import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const shapes = [
  { id: 'wave', name: 'Wave', icon: '〰️', category: 'basic', special: 'bubbles' },
  { id: 'wave2', name: 'Wave 2', icon: '🌊', category: 'basic', special: 'layers' },
  { id: 'doubleWave', name: 'Double Wave', icon: '🏄', category: 'basic' },
  { id: 'blob', name: 'Blob', icon: '🫧', category: 'organic', special: 'morph' },
  { id: 'rounded', name: 'Rounded', icon: '⭕', category: 'basic', special: 'particles' },
  { id: 'hexagon', name: 'Hexagon', icon: '⬡', category: 'geometric' },
  { id: 'diamond', name: 'Diamond', icon: '💎', category: 'geometric' },
  { id: 'arrow', name: 'Arrow', icon: '➜', category: 'geometric' },
  { id: 'cloud', name: 'Cloud', icon: '☁️', category: 'organic' },
  { id: 'star', name: 'Star', icon: '⭐', category: 'geometric' },
  { id: 'heart', name: 'Heart', icon: '❤️', category: 'organic' },
];

const shapeAnimationOptions = [
  { id: 'static', name: 'Static', icon: '⏸️' },
  { id: 'pulse', name: 'Pulse', icon: '💗' },
  { id: 'spin', name: 'Spin', icon: '🔄' },
  { id: 'elasticSpin', name: 'Elastic Spin', icon: '🌀' },
  { id: 'gelatine', name: 'Gelatine', icon: '🍮' },
  { id: 'float', name: 'Float', icon: '🎈' },
  { id: 'wobble', name: 'Wobble', icon: '🏃' },
  { id: 'swing', name: 'Swing', icon: '🎭' },
];

const ShapeSelector = ({ shape, onChange, onAnimationChange }) => {
  const categories = ['all', 'basic', 'geometric', 'organic'];
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredShapes = selectedCategory === 'all' 
    ? shapes 
    : shapes.filter(s => s.category === selectedCategory);

  const getSpecialBadgeColor = (special) => {
    switch(special) {
      case 'bubbles': return 'bg-blue-500';
      case 'layers': return 'bg-indigo-500';
      case 'morph': return 'bg-purple-500';
      case 'particles': return 'bg-gradient-to-r from-cyan-400 to-yellow-400';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-3 dark:text-gray-300">
        Shape Style
      </label>
      
      {/* Category Filter */}
      <div className="flex gap-2 mb-4">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors ${
              selectedCategory === cat
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>
      
      {/* Shape Grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {filteredShapes.map((s) => (
          <motion.button
            key={s.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(s.id)}
            className={`p-3 rounded-lg border-2 transition-all relative overflow-hidden ${
              shape === s.id
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 bg-white dark:bg-gray-800'
            }`}
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-xs font-medium dark:text-gray-300">{s.name}</div>
            {s.special && (
              <div className={`absolute top-1 right-1 text-xs ${getSpecialBadgeColor(s.special)} text-white px-1 rounded`}>
                {s.special}
              </div>
            )}
          </motion.button>
        ))}
      </div>
      
      {/* Special notes for shapes */}
      {shape === 'wave' && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
          <p className="text-blue-700 dark:text-blue-300">
            💧 This shape includes animated bubbles rising from the wave!
          </p>
        </div>
      )}
      
      {shape === 'wave2' && (
        <div className="mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-sm">
          <p className="text-indigo-700 dark:text-indigo-300">
            🌊 This shape features multiple animated wave layers!
          </p>
        </div>
      )}
      
      {shape === 'blob' && (
        <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-sm">
          <p className="text-purple-700 dark:text-purple-300">
            🫧 This organic blob morphs between different shapes with smooth rotation!
          </p>
          <p className="text-xs mt-1 text-purple-600 dark:text-purple-400">
            The blob animation cannot be combined with other shape animations.
          </p>
        </div>
      )}
      
      {shape === 'rounded' && (
        <div className="mb-4 p-3 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg text-sm border border-purple-500/20">
          <p className="text-purple-300">
            ✨ Features diagonal neon bars streaming across the shape!
          </p>
          <p className="text-xs mt-1 text-purple-400">
            Cyan and yellow glowing bars with continuous flow effect.
          </p>
        </div>
      )}
      
      {/* Shape Animation Options - Disable for blob */}
      <div className={shape === 'blob' ? 'opacity-50 pointer-events-none' : ''}>
        <label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">
          Shape Animation {shape === 'blob' && '(Disabled for morphing blob)'}
        </label>
        <div className="grid grid-cols-4 gap-2">
          {shapeAnimationOptions.map(anim => {
            // Extract nested ternary logic
            let buttonClasses = 'p-2 rounded-lg border text-center transition-all ';
            if (shape === 'blob') {
              buttonClasses += 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 cursor-not-allowed';
            } else if (anim.id === 'static') {
              buttonClasses += 'border-gray-200 dark:border-gray-600 hover:border-gray-300';
            } else {
              buttonClasses += 'border-purple-200 dark:border-purple-800 hover:border-purple-300';
            }

            return (
              <motion.button
                key={anim.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAnimationChange?.(anim.id)}
                disabled={shape === 'blob'}
                className={buttonClasses}
              >
                <div className="text-lg">{anim.icon}</div>
                <div className="text-xs mt-1">{anim.name}</div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ShapeSelector.propTypes = {
  shape: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAnimationChange: PropTypes.func
};

export default ShapeSelector;