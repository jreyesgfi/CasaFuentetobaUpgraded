import styled, { keyframes } from 'styled-components';
import { globalColors, MainHeading, Section } from '../../globalStyles';

const paddingLeft= '30pt';

const expandingText = keyframes`
  0% {
    letter-spacing:0;
    opacity:0;
  }
  35%{
    letter-spacing:0;
    opacity:0;
  }
  65%{
    opacity:1;
  }

  100% {
    letter-spacing:4;
  }
`;


export const HeroSection = styled(Section)`
    position:relative;
    height:30vh;
    @media screen and (max-width: 450px) {
        height:35vh;
    }
`

export const HeroMainHeading = styled(MainHeading)`

    margin-bottom:0.2rem;
    font-size: clamp(2.3rem, 5.5vw, 6rem);
    color:${globalColors.blue.primary};
    text-align: left;
    padding-left:${paddingLeft};
    max-width:70%;
    animation: 2.5s ${expandingText};
`
export const HeroText = styled.p`

    margin-bottom: 20px;
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    line-height: 24px;
    text-align: left;
    letter-spacing: 2px;
    color: #fff;
    color:${globalColors.light.primary};
    padding-left:${paddingLeft};
    max-width:80%;
    animation: 2.5s ${expandingText};
`;