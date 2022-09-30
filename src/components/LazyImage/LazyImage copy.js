import React, { useEffect, useState } from 'react';
import { animationVariants, DotLottieWrapper } from './LazyImageStyles';
// import LazyLoad from "react-lazyload";
import styled from 'styled-components';
import '@dotlottie/player-component';
import { AnimatePresence } from 'framer-motion';
import IDGenerator from '../../util/IdGenerator';


const LazyImage = ({ src, alt, imageStyle, delayTime, wrapperStyle, handleClick }) => {

    // animation
    const animationStyle = {
        initial: { opacity: 1 },
        transition: { delay: 0.3, duration: 0.6 },
        end: { opacity: 0 }
    }

    // delay
    const [delayState, setDelayState] = useState(delayTime || 0);
    const [loading, setLoading] = useState(1);


    // loaded
    const loadedDone = () => {
        const animationTime = Math.ceil(animationStyle.transition.delay + animationStyle.transition.duration) * 1000;
        async function wait() {
            await new Promise(() => {
                setTimeout(() => {
                    setLoading(0)
                }, animationTime + 3000);
            })
        };
        wait();
    }

    // const refHolder = React.useRef();
    const refImage = React.useRef();

    // const removeHolder = () => {
    //     refHolder.current.remove();
    // };
    const cssImageStyle = `
        position: relative;
        background-image: url(${src});
        background-size: cover;
        background-position: center;
    `;
    const StyledImage = styled(imageStyle)`object-fit:cover;${cssImageStyle}`;
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
    const LazyImage = styled.img`
        z-index:50;
        visibility:hidden;
        width:100%;
        height:100%;
    `;

    const normalDiv = styled.div``;

    return (
        <StyledWrapper
            as={normalDiv}
            onClick={handleClick || function () { }}
        >
            <AnimatePresence>
                {(loading === 1) && (
                    <DotLottieWrapper
                        key={IDGenerator()}
                        animate={{ y: +10, transition: { duration: 0.9 } }}
                        exit={{ y: +10, transition: { duration: 0.9 } }}
                    >
                        <dotlottie-player
                            src="./assets/lottie/dotSquaresJumping.lottie"
                            autoplay
                            loop
                            style={{ height: '100%', width: '100%' }}
                        />
                    </DotLottieWrapper>
                )}

                {(delayState === 0 && loading < 11 || wrapperStyle) && (
                    <StyledImage
                        key={IDGenerator()}
                        onLoad={() => {
                            loadedDone()
                        }}
                        src={src}
                    />
                )}
            </AnimatePresence>
        </StyledWrapper>
    );
};


export default LazyImage;