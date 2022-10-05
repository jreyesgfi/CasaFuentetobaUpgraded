import { motion } from 'framer-motion';
import { nodeName } from 'jquery';
import styled from 'styled-components';
// , { keyframes }
import { globalColors } from '../../GlobalStyles';

// const loadingAnimation = keyframes`
//   0% {
//     background-color: #fff;
//   }
//   50% {
//     background-color: #ccc;
//   }
//   100% {
//     background-color: #fff;
//   }
// `;
  /* animation: ${loadingAnimation} 1s infinite; */


/* export const Placeholder = styled.div`
  position: absolute;
  inset: 0;
`; */

export const animationVariants = {
  fadeout: { opacitity: 0, transition: { duration: 1000, type: 'spring', damping: 30, stiffness: 300 } },
  fadein: { opacitity: 1, transition: { duration: 1000, type: 'spring', damping: 30, stiffness: 300 } },
  faded: { opacity: 0 },
  visible: { opacity: 1 }
};

export const cssWrapperStyle = {
  position: 'relative',
  height:'100%',
  width:'100%',
  maxHeight:'none',
  maxWidth:'none',
  minHeight:'0',
  minWidth:'0'
};

export const cssImageStyle = {
  position: 'relative',
  height:'100%',
  width:'100%',
  margin:'0',
  maxHeight:'100%',
  maxWidth:'100%',
  minHeight:'100%',
  minWidth:'100%',
  objectFit:'cover',
};

export const LazyImageWrapper = styled.div`
  position: relative;
  /* transition: height 1s ease-out;
  transition: width 1s ease-out;
  transition: position 1s ease-out;
  transition: transform 1s ease-out; */
`;

export const DotLottieWrapper = styled(motion.div)`

`;