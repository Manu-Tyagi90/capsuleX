import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ShapeSelector from './ShapeSelector';
import ColorPicker from './ColorPicker';
import TextEditor from './TextEditor';
import AnimationControls from './AnimationControls';

const CapsuleEditor = ({ config, setConfig }) => {
  return (
    <div className="space-y-6">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
        whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      >
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          🎨 Capsule Editor
        </h2>
        
        <div className="space-y-6">
          <ShapeSelector 
            shape={config.shape} 
            onChange={(shape) => setConfig({...config, shape})}
            onAnimationChange={(shapeAnimation) => setConfig({...config, shapeAnimation})}
          />
          
          <ColorPicker 
            color={config.color} 
            onChange={(color) => setConfig({...config, color})} 
          />
          
          <TextEditor 
            text={config.text} 
            onChange={(text) => setConfig({...config, text})} 
          />
          
          <AnimationControls 
            config={config}
            setConfig={setConfig}
          />
          
          <div>
            <label htmlFor="dimensions" className="block text-sm font-medium mb-2 dark:text-gray-300">
              Dimensions
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="width-input" className="text-xs text-gray-500 dark:text-gray-400">Width</label>
                <input
                  id="width-input"
                  type="number"
                  value={config.width}
                  onChange={(e) => setConfig({...config, width: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="400"
                  max="1200"
                />
              </div>
              <div>
                <label htmlFor="height-input" className="text-xs text-gray-500 dark:text-gray-400">Height</label>
                <input
                  id="height-input"
                  type="number"
                  value={config.height}
                  onChange={(e) => setConfig({...config, height: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="100"
                  max="400"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// PropTypes validation
CapsuleEditor.propTypes = {
  config: PropTypes.shape({
    shape: PropTypes.string.isRequired,
    shapeAnimation: PropTypes.string,
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
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  setConfig: PropTypes.func.isRequired
};

export default CapsuleEditor;