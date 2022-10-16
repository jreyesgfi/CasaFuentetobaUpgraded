import React from "react";
import Link from 'next/link';
import { NextButton, Container, MainHeading } from "../../globalstyles";
import DividerWaves from "../Dividers/DividerWave";
import { HeroMainHeading, HeroSection, HeroText } from "./HeroStyles";

const Hero = (props)=>{
    return (
        <HeroSection inverse= {props?.inverse || null} padding="0px 0px 0px" smPadding='0px 0px 0px' bottomWave>
            <HeroMainHeading>
                Casa de Fuentetoba
            </HeroMainHeading>
            <HeroText>
                Una casa ideal para familia y amigos
            </HeroText>
        </HeroSection>
    )
};
export default Hero;