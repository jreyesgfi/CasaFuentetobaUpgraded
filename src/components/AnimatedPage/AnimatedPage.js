import { motion } from 'framer-motion';
import React from 'react';


const animations = {
    initial: { opacity:0, x:200},
    animate: { opacity:1, x:0},
    exit: { opacity:0, x:-100}
}

const AnimatedPage = ({children})=> {
  return (
    <motion.div
        variants= {animations}
        initial= "initial"
        animate="animate"
        exit = "exit"
    >
        {children}
    </motion.div>
  )
}

export default AnimatedPage