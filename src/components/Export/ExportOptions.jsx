import { motion } from 'framer-motion';
import { FaCopy, FaDownload, FaCode } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ExportOptions = ({ config }) => {
  const [copied, setCopied] = useState(false);

  const generateAPIUrl = () => {
    const params = new URLSearchParams({
      type: config.shape,
      color: config.color.colors.join(','),
      text: config.text.content,
      fontSize: config.text.fontSize,
      fontColor: config.text.color.replace('#', ''),
      width: config.width,
      height: config.height,
      animation: config.text.animation
    });
    
    return `https://capsule-x.vercel.app/api/capsule?${params.toString()}`;
  };

  const generateMarkdown = () => {
    const url = generateAPIUrl();
    return `![CapsuleX](${url})`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadSVG = () => {
    // This will be implemented in the next part
    alert('SVG download will be implemented in Part 2!');
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        📤 Export Options
      </h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="markdown-code" className="block text-sm font-medium mb-2 dark:text-gray-300">
            Markdown Code
          </label>
          <div className="relative">
            <pre 
              id="markdown-code"
              className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg text-sm overflow-x-auto"
            >
              <code>{generateMarkdown()}</code>
            </pre>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md"
              aria-label="Copy to clipboard"
            >
              {copied ? '✓' : <FaCopy />}
            </motion.button>
          </div>
          {copied && (
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">
              Copied to clipboard!
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadSVG}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium"
          >
            <FaDownload /> Download SVG
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-purple-500 text-purple-500 dark:text-purple-400 rounded-lg font-medium"
          >
            <FaCode /> View API
          </motion.button>
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
            📋 Quick Info
          </h3>
          <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
            <li>• Copy the markdown code and paste it in your README.md</li>
            <li>• The capsule will be dynamically generated from the API</li>
            <li>• All animations and styles will be preserved</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// PropTypes validation
ExportOptions.propTypes = {
  config: PropTypes.shape({
    shape: PropTypes.string.isRequired,
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
      animation: PropTypes.string
    }).isRequired
  }).isRequired
};

export default ExportOptions;