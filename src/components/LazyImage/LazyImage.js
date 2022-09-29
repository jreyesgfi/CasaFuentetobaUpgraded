import React, { useEffect, useState } from 'react';
import { DotLottieWrapper } from './LazyImageStyles';
import LazyLoad from "react-lazyload";
import styled from 'styled-components';
import '@dotlottie/player-component';
import { motion } from 'framer-motion';


const LazyImage = ({ src, alt, imageStyle, delayTime, wrapperStyle, handleClick }) => {

    // delay
    const [delayState, setDelayState] = useState(delayTime || 0);
    const [loading, setLoading] = useState(1);

    // const refHolder = React.useRef();
    const refImage = React.useRef();

    // const removeHolder = () => {
    //     refHolder.current.remove();
    // };
    const cssImageStyle = `
        position: relative;
        background-image: url(${src});
        background-color: black;
        background-size: cover;
        background-position: center;
    `;
    const StyledImage =  styled(imageStyle)`${cssImageStyle}`;
    const StyledWrapper = wrapperStyle ?
        styled(wrapperStyle)`position:relative;` :
        styled(imageStyle)`
            ${cssImageStyle}
        `;

    useEffect(() => {
        if (delayTime !== 0 & delayTime !== undefined) {
            async function wait() {
                await new Promise(() => {
                    setTimeout(() => {
                        setDelayState(0)
                    }, delayTime);
                })
            };
            wait();
        }
    }, [])
    return (
        <StyledWrapper
            as={motion.div}
            animate={{ opacity: 1 }}
            onClick={handleClick||function(){}}>
            {wrapperStyle &&(
                <StyledImage as={motion.div}></StyledImage>
            )}
            {delayState !== 0 && (
                <DotLottieWrapper>
                    <dotlottie-player
                        src="./assets/lottie/dotSquaresJumping.lottie"
                        autoplay
                        loop
                        style={{ height: '100%', width: '100%' }}
                    />
                </DotLottieWrapper>
            )}

        </StyledWrapper>
    );
};


export default LazyImage;