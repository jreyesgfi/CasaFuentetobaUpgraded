import styled, { keyframes } from "styled-components";
import { globalColors } from "../../globalStyles";

const loadingAnimation = keyframes`
  0% {
    opacity:0
  }

  100% {
    opacity:1
  }
`;

export const IndicationIconWrapper = styled.div`
    display:${({show})=>(show===1?'':'none')};
    height: 12vh;
    width:12vh;
    position: fixed;
    inset:auto 0 5vh 0;
    margin:auto;
    /* border: 1px solid ${globalColors.blue.primary}; */
    z-index:200;
    animation:0.9s ${loadingAnimation} ease-out;
`;

export const IndicationIconImg = styled.img`
    position:absolute;
    inset:0;
    margin:auto;
    object-fit: cover;
    width: 90%;
    height:90%;
    z-index:200;
    transition: transform 1.3s cubic-bezier(.21,1.66,.52,.81); 
    transform:${({rotation})=>(rotation!==0?'rotate(-90deg)':'')};
`;