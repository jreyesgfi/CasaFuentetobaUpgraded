import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


const animations = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

const AnimatedPage = ({ children, router }) => {
  return (
    <motion.div
        key={router.route}
        variants={animations}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", stiffness: 25 }}
        exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage