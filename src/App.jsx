import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Layout/Header';
import CapsuleEditor from './components/CapsuleEditor/CapsuleEditor';
import LivePreview from './components/Preview/LivePreview';
import ExportOptions from './components/Export/ExportOptions';

function App() {
  const [capsuleConfig, setCapsuleConfig] = useState({
    shape: 'wave',
    shapeAnimation: 'pulse',
    color: {
      type: 'gradient',
      colors: ['#667eea', '#764ba2']
    },
    text: {
      content: 'Welcome to my GitHub Profile!',
      fontSize: '24',
      color: '#ffffff',
      animation: 'fadeIn',
      fontFamily: 'Arial, sans-serif',
      letterSpacing: 0,
      fontWeight: 'bold'
    },
    width: 800,
    height: 200,
    section: 'header',
    enableGlow: false,
    animationSpeed: 1, // Ensure this is set
    animationRange: { x: 50, y: 30 }
  });

  // Debug log to track speed changes
  console.log('Current animation speed:', capsuleConfig.animationSpeed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            CapsuleX
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Dynamic GitHub Profile Visualizer - Enhanced Edition ✨
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <motion.div 
              className="flex items-center gap-2 text-sm bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="dark:text-gray-200">Live Preview Active</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-sm bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow"
              whileHover={{ scale: 1.05 }}
            >
              <span className="dark:text-gray-200">Speed: {capsuleConfig.animationSpeed}x</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CapsuleEditor 
              config={capsuleConfig} 
              setConfig={setCapsuleConfig} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <LivePreview config={capsuleConfig} />
            <ExportOptions config={capsuleConfig} />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;