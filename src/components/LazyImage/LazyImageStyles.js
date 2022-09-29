import styled, { keyframes } from 'styled-components';
import { globalColors } from '../../globalStyles';

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

export const LazyImageWrapper = styled.div`
  position: relative;
  /* transition: height 1s ease-out;
  transition: width 1s ease-out;
  transition: position 1s ease-out;
  transition: transform 1s ease-out; */
`;

export const DotLottieWrapper = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  z-index:100;
  inset:0;
  background:${globalColors.light.primary};
`;