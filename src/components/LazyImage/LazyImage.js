import React, { useEffect, useState } from 'react';
import { Placeholder, LazyImageWrapper } from './LazyImageStyles';
import LazyLoad from "react-lazyload";
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, imageStyle, delayTime }) => {

    // delay
    const [delayState, setDelayState] = useState(delayTime);

    const refPlaceholder = React.useRef();

    const removePlaceholder = () => {
        refPlaceholder.current.remove();
    };
    const StyledImage = styled(imageStyle)``

    useEffect(() => {
        console.log(delayTime)
        async function wait() {
            await new Promise(() => {
                setTimeout(() => {
                    setDelayState(0)
                }, delayTime);
            })
        };
        if (delayTime !== 0) {
            wait()
        }
    }, [])

    return (
        <LazyImageWrapper>
            <Placeholder ref={refPlaceholder} />
            {delayState === 0 &&
                <LazyLoad>
                    <StyledImage
                        onLoad={removePlaceholder}
                        onError={removePlaceholder}
                        src={src}
                        alt={alt} />
                </LazyLoad>
            }
        </LazyImageWrapper>
    );
};


export default LazyImage;