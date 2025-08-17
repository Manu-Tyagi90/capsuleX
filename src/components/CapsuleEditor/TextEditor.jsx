import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { animationCategories } from '../../utils/animations';

const TextEditor = ({ text, onChange }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const fontSizes = ['12', '16', '20', '24', '28', '32', '36', '40', '48', '56'];
  const fontFamilies = [
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Roboto', value: 'Roboto, sans-serif' },
    { name: 'Montserrat', value: 'Montserrat, sans-serif' },
    { name: 'Playfair', value: 'Playfair Display, serif' },
    { name: 'Courier', value: 'Courier New, monospace' },
    { name: 'Poiret One', value: 'Poiret One, cursive' },
  ];
  
  const animationIcons = {
    none: { icon: '⏹️', name: 'None' },
    // Fade animations
    fadeIn: { icon: '💫', name: 'Fade In' },
    fadeOut: { icon: '🌙', name: 'Fade Out' },
    fadeInDown: { icon: '⬇️', name: 'Fade Down' },
    fadeInLeft: { icon: '⬅️', name: 'Fade Left' },
    fadeOutDown: { icon: '⏬', name: 'Fade Out Down' },
    fadeOutRight: { icon: '⏩', name: 'Fade Out Right' },
    flash: { icon: '⚡', name: 'Flash' },
    // Bounce animations
    bounce: { icon: '⚾', name: 'Bounce' },
    bounce2: { icon: '🏀', name: 'Bounce 2' },
    bounceIn: { icon: '📥', name: 'Bounce In' },
    bounceInRight: { icon: '➡️', name: 'Bounce Right' },
    bounceOut: { icon: '📤', name: 'Bounce Out' },
    bounceOutDown: { icon: '⬇️', name: 'Bounce Down' },
    // Rotate animations
    spin: { icon: '🔄', name: 'Spin' },
    elasticSpin: { icon: '🌀', name: 'Elastic Spin' },
    flip: { icon: '🔃', name: 'Flip' },
    rotateInDownLeft: { icon: '↙️', name: 'Rotate Down' },
    rotateInUpLeft: { icon: '↖️', name: 'Rotate Up' },
    swing: { icon: '🎭', name: 'Swing' },
    // Special effects
    gelatine: { icon: '🍮', name: 'Gelatine' },
    pulse: { icon: '💗', name: 'Pulse' },
    hithere: { icon: '👋', name: 'Hi There' },
    grow: { icon: '🌱', name: 'Grow' },
    shake: { icon: '🫨', name: 'Shake' },
    wobble: { icon: '🏃', name: 'Wobble' },
    hinge: { icon: '🚪', name: 'Hinge' },
    // Slide animations
    rollIn: { icon: '🎲', name: 'Roll In' },
    rollOut: { icon: '🎯', name: 'Roll Out' },
    typewriter: { icon: '⌨️', name: 'Typewriter' },
    glow: { icon: '✨', name: 'Glow' },
    wave: { icon: '〰️', name: 'Wave' }
  };

  const categories = ['all', 'fade', 'bounce', 'rotate', 'special', 'slide'];
  
  const getFilteredAnimations = () => {
    if (selectedCategory === 'all') {
      return Object.keys(animationIcons);
    }
    return ['none', ...(animationCategories[selectedCategory] || [])];
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="text-content" className="block text-sm font-medium mb-2 dark:text-gray-300">
          Text Content
        </label>
        <textarea
          id="text-content"
          value={text.content}
          onChange={(e) => onChange({ ...text, content: e.target.value })}
          placeholder="Enter your capsule text..."
          rows="3"
          className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {text.content.length} characters
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="font-size" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
            Font Size
          </label>
          <select
            id="font-size"
            value={text.fontSize}
            onChange={(e) => onChange({ ...text, fontSize: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            {fontSizes.map(size => (
              <option key={size} value={size}>{size}px</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="text-color-input" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
            Text Color
          </label>
          <div className="flex items-center gap-2">
            <input
              id="text-color-picker"
              type="color"
              value={text.color}
              onChange={(e) => onChange({ ...text, color: e.target.value })}
              className="w-12 h-9 rounded border cursor-pointer"
            />
            <input
              id="text-color-input"
              type="text"
              value={text.color}
              onChange={(e) => onChange({ ...text, color: e.target.value })}
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">
          Animation Effect
        </label>
        
        {/* Category Filter */}
        <div className="flex gap-1 mb-3 flex-wrap">
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
        
        {/* Animation Grid */}
        <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto p-1">
          {getFilteredAnimations().map(animKey => {
            const anim = animationIcons[animKey];
            return (
              <motion.button
                key={animKey}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onChange({ ...text, animation: animKey })}
                className={`p-2 text-sm rounded-lg border transition-all ${
                  text.animation === animKey
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 bg-white dark:bg-gray-800'
                }`}
                title={anim.name}
              >
                <div className="text-lg">{anim.icon}</div>
                <div className="text-xs mt-1">{anim.name}</div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Advanced Options */}
      <motion.div className="border-t pt-4 dark:border-gray-700">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700"
        >
          {showAdvanced ? '− Hide' : '+ Show'} Advanced Options
        </button>
        
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 space-y-4"
          >
            <div>
              <label htmlFor="font-family" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                Font Family
              </label>
              <select
                id="font-family"
                value={text.fontFamily || 'Arial, sans-serif'}
                onChange={(e) => onChange({ ...text, fontFamily: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                {fontFamilies.map(font => (
                  <option key={font.value} value={font.value}>{font.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="letter-spacing" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                Letter Spacing
              </label>
              <input
                id="letter-spacing"
                type="range"
                min="-2"
                max="10"
                value={text.letterSpacing || 0}
                onChange={(e) => onChange({ ...text, letterSpacing: e.target.value })}
                className="w-full"
              />
              <div className="text-xs text-gray-500 text-center">{text.letterSpacing || 0}px</div>
            </div>
            
            <div>
              <label htmlFor="font-weight" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                Font Weight
              </label>
              <select
                id="font-weight"
                value={text.fontWeight || 'bold'}
                onChange={(e) => onChange({ ...text, fontWeight: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="100">Thin</option>
                <option value="300">Light</option>
                <option value="500">Medium</option>
                <option value="700">Bold</option>
                <option value="900">Black</option>
              </select>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// PropTypes validation
TextEditor.propTypes = {
  text: PropTypes.shape({
    content: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    animation: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextEditor;