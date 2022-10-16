import React, { useEffect, useRef, useState } from 'react';
import { animationVariants, cssImageStyle, cssWrapperStyle, DotLottieWrapper } from './LazyImageStyles';
// import LazyLoad from "react-lazyload";
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ('@dotlottie/player-component')


export const NormalDiv = styled(motion.div)`
    position: absolute;
    inset:0;
    width: 300px;
    height: 300px;
    min-width: 300px;
    min-height: 300px;
    max-width:none;
    max-height: none;
    background-color: rgba(155, 155, 155);
    z-index:100;
`

const LazyImage = ({ src, alt, imageStyle, delayTime, wrapperStyle, handleClick }) => {

    const [loading, setLoading] = useState(2);
    useEffect(() => {
        async function wait() {
            await new Promise(() => {
                setTimeout(() => {
                    setLoading(1)
                }, delayTime);
            })
        };
        wait();
    }, [])

    src = src.default.src

    // Load the animation asynchronously

    const ref = useRef();

    const loadedDone = () => {
        const animationTime = 1000
        async function wait() {
            await new Promise(() => {
                setTimeout(() => {

                    setLoading(0)
                }, animationTime);
            })
        };
        wait();
    }

    const animationVariants = {
        0: {
            backgroundColor: '#ffffff',
            opacity: 0,
            transition: { duration: 0.5 },
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            minWidth: '100%',
            zIndex: 100,
        },
        1: {
            opacity: 1,
            backgroundColor: '#ffffff',
            transition: { duration: 0.5 }
        }
    }

    const StyledImage = styled(imageStyle)`
        ${cssImageStyle};
        visibility: ${({ loading }) => (loading === 0 ? 'visible' : 'hidden')};
        `
        ;
    const StyledWrapper = motion.div
    return (
        <StyledWrapper
            initial={cssWrapperStyle}
            onClick={handleClick || function () { }}>
            <AnimatePresence>
                {loading > 0 && (
                    <motion.div
                        initial='0'
                        animate='1'
                        variants={animationVariants}
                        exit='0'
                        key={'holder'}
                        ref={ref}
                    >

                        <dotlottie-player
                            src="./assets/lottie/dotSquaresJumping.lottie"
                            autoplay
                            loop
                            style={{ height: '100%', width: '100%' }}
                        />
                    </motion.div>)
                }
                {(loading < 2) && (
                    <StyledImage
                        key={'image'}
                        onLoad={() => {
                            loadedDone()
                        }}
                        loading={loading}
                        src={src}
                        alt={alt??'Imagen casa en fuentetoba'}
                    />
                )}
            </AnimatePresence>
        </StyledWrapper>
    )
};


export default LazyImage;