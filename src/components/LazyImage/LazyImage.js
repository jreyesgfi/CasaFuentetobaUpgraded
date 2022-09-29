import React, { useEffect, useState } from 'react';
import { Placeholder, LazyImageWrapper, DotLottieWrapper } from './LazyImageStyles';
import LazyLoad from "react-lazyload";
import styled from 'styled-components';
import '@dotlottie/player-component';


const LazyImage = ({ src, alt, imageStyle, imagesHolder, delayTime, wrapperStyle, handleClick }) => {

    // delay
    const [delayState, setDelayState] = useState(delayTime || 0);
    const [loading, setLoading] = useState(1);

    // const refHolder = React.useRef();
    const refImage = React.useRef();

    // const removeHolder = () => {
    //     refHolder.current.remove();
    // };
    const StyledImage = imageStyle ? styled(imageStyle)`` : styled.img``;
    const StyledWrapper = wrapperStyle ? styled(wrapperStyle)`position:relative;` :
        (imagesHolder? styled(imagesHolder)`position:relative;`:LazyImageWrapper);

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
    if (loading === 0 && !wrapperStyle) {
        return (
            <StyledImage
                ref={refImage}
                onLoad={() => {
                }}
                src={src}
                alt={alt}
                onClick={handleClick||function(){}} />
        )
    }
    return (
        <StyledWrapper>
            {delayState === 0 &&
                <LazyLoad>
                    <StyledImage
                        ref={refImage}
                        onLoad={() => {
                            setLoading(0);
                        }}
                        src={src}
                        alt={alt} />
                </LazyLoad>
            }
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