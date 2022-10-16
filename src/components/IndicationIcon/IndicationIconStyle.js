import styled, { keyframes } from "styled-components";
import { globalColors, minimunSize, Row } from "../../globalstyles";

const loadingAnimation = keyframes`
  0% {
    opacity:0
  }

  100% {
    opacity:1
  }
`;
export const IndicationsWrapper = styled(Row)`
  height: fit-content;
  width: fit-content;
  position: fixed;
  inset:auto 0 5vh 0;
  margin:auto;
  justify-content: center;
  align-items: center;
  z-index:200;
`;

export const IndicationIconWrapper = styled.div`
    display:${({show})=>(show===1?'inline':'none')};
    position:relative;
    height: clamp(50px,12vh, 18rem);
    width:12vh;
    margin:0 5pt;
    /* border: 1px solid ${globalColors.blue.primary}; */
    animation:0.9s ${loadingAnimation} ease-out;
    animation-delay:${({animationDelay})=>(animationDelay?animationDelay:0)};
    transition: transform 1.3s cubic-bezier(.21,1.66,.52,.81); 
`;

export const IndicationIconImg = styled.img`
    position:absolute;
    inset:0;
    object-fit:cover;
    margin:auto;
    max-width: 90%;
    max-height:90%;
    z-index:200;
    transition: transform 1.3s cubic-bezier(.21,1.66,.52,.81); 
    transform:${({rotation})=>(rotation!==0?'rotate(-90deg)':'')};
`;