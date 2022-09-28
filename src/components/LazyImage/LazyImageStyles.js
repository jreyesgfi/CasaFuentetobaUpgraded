import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;


export const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

export const LazyImageWrapper = styled.div`
  position: relative;
  width:fit-content;
  height: fit-content;
  min-width:1px;
  min-height:1px;
  /* transition: height 1s ease-out;
  transition: width 1s ease-out;
  transition: position 1s ease-out;
  transition: transform 1s ease-out; */
`;