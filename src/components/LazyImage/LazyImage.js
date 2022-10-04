import React, { useEffect, useState } from 'react';
import { animationVariants, cssImageStyle, cssWrapperStyle, DotLottieWrapper } from './LazyImageStyles';
// import LazyLoad from "react-lazyload";
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import dynamic from 'next/dynamic';



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
    useEffect(()=>{
        async function wait() {
            await new Promise(() => {
                setTimeout(() => {
                    setLoading(1)
                }, delayTime);
            })
        };
        wait();
    },[])

    const loadedDone = () => {
        const animationTime = 1500
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
            position:'absolute',
            inset:0,
            width:'100%',
            height:'100%',
            maxHeight:'100%',
            maxWidth:'100%',
            minHeight:'100%',
            minWidth:'100%',
            zIndex:100,
        },
        1: {
            opacity: 1,
            backgroundColor: '#ffffff',
            transition: { duration: 0.5 }
        }
    }

    const StyledImage = styled(imageStyle)`
        ${cssImageStyle};
        visibility: ${({loading})=>(loading===0?'visible':'hidden')};
        `
    ;
    const StyledWrapper = motion.div
    return (
        <StyledWrapper
            initial={cssWrapperStyle}
            onClick={handleClick||function(){}}>
            <AnimatePresence>
                {loading > 0 && (
                    <motion.div
                        initial='0'
                        animate='1'
                        variants={animationVariants}
                        exit='0'
                        key={'holder'}
                    >
                        
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
                    />
                )}
            </AnimatePresence>
        </StyledWrapper>
    )
};


export default LazyImage;