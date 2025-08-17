export const textAnimations = {
  // Basic Animations
  none: {
    initial: {},
    animate: {},
    transition: {}
  },
  
  // Fade Animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, ease: "linear" }
  },
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { duration: 2, ease: "linear" }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2, ease: "easeOut" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 2, ease: "easeOut" }
  },
  fadeOutDown: {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: 20 },
    transition: { duration: 2, ease: "easeOut" }
  },
  fadeOutRight: {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 0, x: 20 },
    transition: { duration: 2, ease: "easeOut" }
  },
  
  // Bounce Animations
  bounce: {
    initial: {},
    animate: {
      y: [0, 0, 0, 0, -15, 0, -7, 0, -3, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.7, 0.8, 0.9, 0.95, 0.97, 0.99, 1],
      ease: "easeOut",
      repeat: Infinity
    }
  },
  bounce2: {
    initial: {},
    animate: {
      y: [0, 0, -30, 0, -15, 0, 0, 0, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
      ease: "easeOut",
      repeat: Infinity
    }
  },
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { 
      opacity: [0, 1, 1, 1],
      scale: [0.3, 1.05, 0.9, 1]
    },
    transition: {
      duration: 2,
      times: [0, 0.5, 0.7, 1],
      ease: "easeOut",
      repeat: Infinity
    }
  },
  bounceInRight: {
    initial: { opacity: 0, x: 2000 },
    animate: {
      opacity: [0, 1, 1, 1],
      x: [2000, -30, 10, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.6, 0.8, 1],
      ease: "easeOut",
      repeat: Infinity
    }
  },
  bounceOut: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 0.95, 1.1, 0.3],
      opacity: [1, 1, 1, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.25, 0.5, 1],
      ease: "easeOut",
      repeat: Infinity
    }
  },
  bounceOutDown: {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 20],
      opacity: [1, 1, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.2, 1],
      ease: "easeOut",
      repeat: Infinity
    }
  },
  
  // Special Effects
  gelatine: {
    initial: {},
    animate: {
      scaleX: [1, 0.9, 1.1, 0.95, 1],
      scaleY: [1, 1.1, 0.9, 1.05, 1]
    },
    transition: {
      duration: 0.5,
      times: [0, 0.25, 0.5, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  spin: {
    initial: {},
    animate: { rotate: 360 },
    transition: { duration: 1, ease: "linear", repeat: Infinity }
  },
  
  elasticSpin: {
    initial: {},
    animate: { rotate: 720 },
    transition: { duration: 1, ease: "easeOut", repeat: Infinity }
  },
  
  pulse: {
    initial: {},
    animate: { scale: [0.8, 1.2] },
    transition: { 
      duration: 1, 
      ease: "easeInOut", 
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  
  flash: {
    initial: {},
    animate: { opacity: [1, 0] },
    transition: { 
      duration: 0.5, 
      ease: "easeInOut", 
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  
  hithere: {
    initial: {},
    animate: {
      scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1],
      rotate: [0, 0, -20, 20, 0, 0, 0]
    },
    transition: {
      duration: 1,
      times: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  grow: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 2, ease: "easeOut", repeat: Infinity }
  },
  
  shake: {
    initial: {},
    animate: {
      x: [0, -10, 10, -10, 10, -10, 10, -10, 10, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  flip: {
    initial: {},
    animate: {
      rotateY: [0, 170, 190, 360, 360],
      z: [0, 150, 150, 0, 0],
      scale: [1, 1, 1, 0.95, 1]
    },
    transition: {
      duration: 2,
      times: [0, 0.4, 0.5, 0.8, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  swing: {
    initial: {},
    animate: {
      rotate: [0, 15, -10, 5, -5, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  wobble: {
    initial: {},
    animate: {
      x: [0, -25, 20, -15, 10, -5, 0],
      rotate: [0, -5, 3, -3, 2, -1, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  rotateInDownLeft: {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { 
      duration: 2, 
      ease: "easeOut",
      repeat: Infinity
    }
  },
  
  rotateInUpLeft: {
    initial: { rotate: 90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { 
      duration: 2, 
      ease: "easeOut",
      repeat: Infinity
    }
  },
  
  hinge: {
    initial: {},
    animate: {
      rotate: [0, 80, 60, 80, 60, 60],
      y: [0, 0, 0, 0, 0, 700],
      opacity: [1, 1, 1, 1, 1, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  rollIn: {
    initial: { opacity: 0, x: -100, rotate: -120 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 2, ease: "easeOut", repeat: Infinity }
  },
  
  rollOut: {
    initial: { opacity: 1, x: 0, rotate: 0 },
    animate: { opacity: 0, x: 100, rotate: 120 },
    transition: { duration: 2, ease: "easeOut", repeat: Infinity }
  },
  
  // Text-specific animations
  typewriter: {
    initial: { width: 0 },
    animate: { width: "100%" },
    transition: { duration: 2, ease: "steps(20, end)", repeat: Infinity }
  },
  
  glow: {
    initial: {},
    animate: {},
    transition: {}
  },
  
  wave: {
    initial: {},
    animate: { 
      y: [0, -10, 0, 10, 0],
      rotate: [-2, 2, -2]
    },
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const shapeAnimations = {
  static: {
    animate: {},
    transition: {}
  },
  
  pulse: {
    animate: { 
      scale: [1, 1.2, 1],
    },
    transition: { 
      duration: 1, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  
  spin: {
    animate: { 
      rotate: 360
    },
    transition: { 
      duration: 1, 
      repeat: Infinity, 
      ease: "linear" 
    }
  },
  
  elasticSpin: {
    animate: { 
      rotate: 720
    },
    transition: { 
      duration: 1, 
      repeat: Infinity, 
      ease: "easeOut" 
    }
  },
  
  gelatine: {
    animate: {
      scaleX: [1, 0.9, 1.1, 0.95, 1],
      scaleY: [1, 1.1, 0.9, 1.05, 1]
    },
    transition: {
      duration: 0.5,
      times: [0, 0.25, 0.5, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  float: {
    animate: { 
      y: [0, -20, 0],
    },
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  },
  
  wobble: {
    animate: {
      x: [0, -25, 20, -15, 10, -5, 0],
      rotate: [0, -5, 3, -3, 2, -1, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  
  swing: {
    animate: {
      rotate: [0, 15, -10, 5, -5, 0]
    },
    transition: {
      duration: 2,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// Get animation with custom speed and range - FIXED
// Get animation with custom speed and range - FIXED
export const getAnimationWithSpeed = (animation, speed = 1, range = null) => {
  // Use optional chaining instead of logical operators
  if (!animation?.transition) return animation;
  
  // Deep clone the animation to avoid mutating the original
  const modifiedAnimation = {
    initial: { ...animation.initial },
    animate: { ...animation.animate },
    transition: { ...animation.transition }
  };
  
  // Apply speed to duration
  if (modifiedAnimation.transition.duration) {
    modifiedAnimation.transition.duration = modifiedAnimation.transition.duration / speed;
  }
  
  // Apply range modifications if provided
  if (range && modifiedAnimation.animate) {
    // Handle x animations
    if (Array.isArray(modifiedAnimation.animate.x)) {
      modifiedAnimation.animate.x = modifiedAnimation.animate.x.map(val => 
        typeof val === 'number' ? val * (range.x / 50) : val
      );
    } else if (typeof modifiedAnimation.animate.x === 'number') {
      modifiedAnimation.animate.x = modifiedAnimation.animate.x * (range.x / 50);
    }
    
    // Handle y animations
    if (Array.isArray(modifiedAnimation.animate.y)) {
      modifiedAnimation.animate.y = modifiedAnimation.animate.y.map(val => 
        typeof val === 'number' ? val * (range.y / 30) : val
      );
    } else if (typeof modifiedAnimation.animate.y === 'number') {
      modifiedAnimation.animate.y = modifiedAnimation.animate.y * (range.y / 30);
    }
    
    // Also apply to initial values if they exist
    if (modifiedAnimation.initial.x !== undefined) {
      modifiedAnimation.initial.x = modifiedAnimation.initial.x * (range.x / 50);
    }
    if (modifiedAnimation.initial.y !== undefined) {
      modifiedAnimation.initial.y = modifiedAnimation.initial.y * (range.y / 30);
    }
  }
  
  return modifiedAnimation;
};

// Animation categories for better organization
export const animationCategories = {
  fade: ['fadeIn', 'fadeOut', 'fadeInDown', 'fadeInLeft', 'fadeOutDown', 'fadeOutRight', 'flash'],
  bounce: ['bounce', 'bounce2', 'bounceIn', 'bounceInRight', 'bounceOut', 'bounceOutDown'],
  rotate: ['spin', 'elasticSpin', 'flip', 'rotateInDownLeft', 'rotateInUpLeft', 'swing'],
  special: ['gelatine', 'pulse', 'hithere', 'grow', 'shake', 'wobble', 'hinge'],
  slide: ['rollIn', 'rollOut', 'typewriter', 'wave'],
};