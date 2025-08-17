import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChromePicker } from 'react-color';
import PropTypes from 'prop-types';

const presetGradients = [
  { name: 'Purple Dream', colors: ['#667eea', '#764ba2'] },
  { name: 'Ocean Blue', colors: ['#2E3192', '#1BFFFF'] },
  { name: 'Sunset', colors: ['#FF512F', '#F09819'] },
  { name: 'Fresh Green', colors: ['#11998e', '#38ef7d'] },
  { name: 'Pink Love', colors: ['#ee9ca7', '#ffdde1'] },
  { name: 'Dark Night', colors: ['#0F2027', '#2C5364'] }
];

const ColorPicker = ({ color, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  const handleColorChange = (newColor, index) => {
    const updatedColors = [...color.colors];
    updatedColors[index] = newColor.hex;
    onChange({ ...color, colors: updatedColors });
  };

  const selectPreset = (preset) => {
    onChange({ type: 'gradient', colors: preset.colors });
  };

  return (
    <div>
      <div className="text-sm font-medium mb-3 dark:text-gray-300">
        Color Theme
      </div>
      
      {/* Preset Gradients */}
      <fieldset>
        <legend className="sr-only">Preset color gradients</legend>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {presetGradients.map((preset) => (
            <motion.button
              key={preset.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => selectPreset(preset)}
              className="h-12 rounded-lg relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${preset.colors[0]}, ${preset.colors[1]})`
              }}
              aria-label={`Select ${preset.name} gradient`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium opacity-0 group-hover:opacity-100 bg-black bg-opacity-30 transition-opacity">
                {preset.name}
              </span>
            </motion.button>
          ))}
        </div>
      </fieldset>

      {/* Custom Colors */}
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          {color.colors.map((c, index) => (
            <div key={`${c}-${index}`} className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setActiveColor(index);
                  setShowPicker(!showPicker);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveColor(index);
                    setShowPicker(!showPicker);
                  }
                }}
                className="w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ backgroundColor: c }}
                aria-label={`Select color ${index + 1}: ${c}`}
              />
              {showPicker && activeColor === index && (
                <div className="absolute z-50 mt-2">
                  <button 
                    className="fixed inset-0 bg-transparent"
                    onClick={() => setShowPicker(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setShowPicker(false);
                    }}
                    tabIndex={-1}
                    aria-label="Close color picker"
                  />
                  <ChromePicker
                    color={c}
                    onChange={(newColor) => handleColorChange(newColor, index)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Click to customize
        </span>
      </div>
    </div>
  );
};

// PropTypes validation
ColorPicker.propTypes = {
  color: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorPicker;