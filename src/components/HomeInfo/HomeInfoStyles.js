import styled from "styled-components";
import GlobalStyles, { Heading, Column, Row, globalColors } from "../../globalstyles";
import {motion} from 'framer-motion';


export const HomeInfoWrapper = styled(Row)`
    position:relative;
    height:fit-content;
    width:100vw;
    min-width:360px;
`

export const PriceInfoWrapper = styled(Column)`
    position:absolute;
    width:fit-content;
    height:fit-content;
    inset:0 auto 0 0;
    margin:auto auto auto 2.2rem;
    padding:1rem;
    backdrop-filter: blur(5px) brightness(82%);
    @media screen and (min-width: 650px) {
        position:relative;
        max-width:30vw;
        inset:auto auto auto auto;
		margin:auto auto auto 7vw;
        backdrop-filter: none;
	}
`;
export const HomeInfoMotion = styled(motion.div)`
`

export const PriceInfoNumber = styled(Heading)`
    margin-bottom:0;
    text-align:left;
    z-index:60;
    font-size:clamp(2.5rem, 4.5vw, 4rem);
    @media screen and (max-width: 650px) {
        font-family:primary-normal;
        color:${globalColors.light.primary};
	}
    
`;
export const PriceInfoSubtitle = styled.p`
    z-index:60;
    font-size:max(14pt,1.5vw);
    
    @media screen and (max-width: 650px) {
        font-family:primary-bold;
        color:${globalColors.light.primary};
	}
`;

export const HomeInfoImageWrapper = styled.div`
    position: relative;
    height: 80vh;
    width:60vw;
    min-width:360px;
    overflow-x: hidden;
    @media screen and (max-width: 650px) {
        width:100vw;
	}

`
export const HomeInfoImage = styled.img`
    position: absolute;
    object-fit: cover;
    height: 100%;
    min-width:360px;
    left:-20vw;
    margin:auto auto auto 0;
    filter:brightness(115%);
    max-width: 100vw;
    @media screen and (max-width: 650px) {
        left:clamp(-70vw);
        max-width:none;
	}
`;