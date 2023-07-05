import {motion} from 'framer-motion'

export const fadeIn = {
    init: {
        opacity: 0
    },

    final: {
        opacity: 1,
        transition: {
            duration: 0.75
        },
    },
    
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75
        },
    }
}

export const popup = {
    init: {
        opacity: 0,
        scale: 0.5
    },

    final: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75
        },
    },
    
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75
        },
    }
}

export function Wave() {
    
    const wrapper = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const loadingContainer = {
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around"
      };
      
      const loadingCircle = {
        display: "block",
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: "white",
        borderRadius: "0.25rem"
      };
      
      const loadingContainerVariants = {
        start: {
          transition: {
            staggerChildren: 0.2
          }
        },
        end: {
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      
      const loadingCircleVariants = {
        start: {
          y: "50%"
        },
        end: {
          y: "150%"
        }
      };
      
      const loadingCircleTransition = {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      };
      

    return (
        <motion.div
            style={wrapper}>
            <motion.div
                style={loadingContainer}
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
            >
                <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                />
                <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                />
                <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                />
            </motion.div>
        </motion.div>
    )
}

export function Loader () {
    const wrapper = {
        overflowX: 'hidden',
        width: '100%',
        height: '100%'
    }

    const mover = {
        width: '50%',
        height: '100%',
        background: 'linear-gradient(to right, #1b1b1bb2, #e2e2e26e, #1b1b1bb2)'
    }

    const moving = {
        start: {
            x: '-150%'
        },

        end: {
            x: '200%'
        }
    }

    const movingTransition = {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut'
    }

    return (
        <motion.div style={wrapper}>
            <motion.div 
                style={mover} 
                variants={moving} 
                transition={movingTransition} 
                initial='start' animate='end'>
            </motion.div>
        </motion.div>
    )
}