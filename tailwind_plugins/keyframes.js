const keyframe = {
  'progress-bar-stripes': {
    '0%': {
      'background-position-x': '1rem',
    },
  },
  'move-bg': {
    'to': {
      'background-position': '400% 0',
    },
  },
  'hitZak': {
    '0%': {
      left: 0,
      transform: 'translateX(-1%)',
    },
    '100%': {
      left: '100%',
      transform: 'translateX(-99%)',
    },
  },
  'floating': {
    '0%': {
      transform: 'rotate(0deg) translate(-10px) rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg) translate(-10px) rotate(-360deg)',
    }
  },
  'boatanim': {
    '0%': {
      transform: 'rotate(-10deg) translate(95px, -14px)',
    },
    '50%': {
      transform: 'rotate(5deg) translate(-65px, -14px)',
    },
    '100%': {
      transform: 'rotate(-10deg) translate(95px, -14px)',
    }
  },
  'sunwawe': {
    '0%': {
      transform: 'scale(1)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(4)',
      opacity: 0
    }
  },
  'sparcle': {
    '0%': {
      opacity: .5
    },
    '100%': {
      opacity: 0
    }
  },
  'btn-floating': {
    '0%': {
      'box-shadow': '0 0 0 0 rgba(220, 38, 38, 0.3)',
    },
    '70%': {
      'box-shadow': '0 0 0 20px rgba(220, 38, 38, 0)',
    },
    '100%': {
      'box-shadow': '0 0 0 0 rgba(220, 38, 38, 0)',
    },
  },
  'slit': {
    '50%': {
      transform: 'translateZ(-250px) rotateY(89deg)',
      opacity: 1,
      'animation-timing-function': 'ease-in'
    },
    '100%': {
      transform: 'translateZ(0) rotateY(0deg)',
      opacity: 1
    }
  }
};

export default keyframe;