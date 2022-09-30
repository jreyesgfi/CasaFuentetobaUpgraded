import { Heading, Section, Text } from "../../globalStyles"
import { HomeInfoImage, HomeInfoImageWrapper, HomeInfoMotion, HomeInfoWrapper, ImgHomeInfo, PriceInfoBackground, PriceInfoBackgroundContainer, PriceInfoNumber, PriceInfoSubtitle, PriceInfoWrapper } from "./HomeInfoStyles";
import { sumarizedPrice } from "../../data/HomeData";
import DividerWaves from "../Dividers/DividerWave";

import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import { forwardRef, useEffect } from "react";

const HomeInfo = forwardRef((props,ref) => {

    // animation params
    const initial = {y: 30,opacity: 0};
    const transition = {delay:0.3, duration:0.6};
    const animation = useAnimation();

    const {ref:ref2,inView} = useInView({threshold:0.7});
    useEffect(()=> {
        if(inView){
            animation.start({
                opacity:1,
                y:0
            })
        }
    },[inView,animation]);

    return (
        <Section position="relative" inverse padding="0px 0px" smPadding="0px 0px"
            ref={node=>{
                ref.current = node;
                ref2(node);
            }}>
            <HomeInfoWrapper>
                <DividerWaves absolute
                        svg={{viewBox:"600 0 500 150", preserveAspectRatio:"none"}}
                        paths={[{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z", opacity:".25"},
                        {d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z", opacity:".5"},
                        {d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",opacity:"1"}]}
                ></DividerWaves>
                <HomeInfoImageWrapper>
                    <HomeInfoImage src='./assets/images/home/1.jpg'>
                    </HomeInfoImage>
                </HomeInfoImageWrapper>
                <PriceInfoWrapper>
                    <HomeInfoMotion 
                        initial={initial}
                        animate={animation}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        >
                        <PriceInfoNumber inverse>
                            Desde {sumarizedPrice}€
                        </PriceInfoNumber>
                    </HomeInfoMotion>
                    <HomeInfoMotion
                        initial={initial}
                        animate={animation}
                        transition={transition}>
                        <PriceInfoSubtitle> 
                            precio por noche y persona
                        </PriceInfoSubtitle>
                    </HomeInfoMotion>
                </PriceInfoWrapper>
                
            </HomeInfoWrapper>
        </Section>
    )
})
export default HomeInfo;