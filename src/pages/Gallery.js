import React, { useEffect, useRef, useState } from 'react';
import {useInView} from 'react-intersection-observer';
import IndicationIcon from '../components/IndicationIcon/IndicationIcon';
import PhotoSection from '../components/PhotGrid/PhotoSection';
import VideoSection from '../components/VideoSection/VideoSection';

const Gallery = () => {

    //state of indication icon
    const [indicationState, setIndicationState] = useState([{ show: 0 }]);

    // phaseState
    const [phaseState, setPhaseState] = useState(0);

    // allow the indications 
    useEffect(() => {
        async function waitToIndicate() {
            await new Promise(() => {
                setTimeout(() => {
                    setPhaseState(1);
                }, 0);
            });
        }
        waitToIndicate();
    }, [])

    // set the inView detector
    const { ref: topRef, inView: topInView } = useInView({ threshold: 0.2 });
    const { ref: bottomRefCopy, inView: bottomInView } = useInView({ threshold: 0.2 });
    const bottomRef = useRef();
    useEffect(() => bottomRefCopy(bottomRef.current), [bottomRef.current])

    // change if we are reaching other section
    useEffect(() => {
        if (phaseState === 0) {
            return
        }
        var indicationArrow = {
            show: 1,
            iconState: 0,
            navigate:2,
            rotation : -90
        }
        var indicationVideo= {
            show: 1,
            iconState: 1,
            handleClick: () => { bottomRef.current.scrollIntoView({ behavior: 'smooth' }) },
        }
        if (bottomInView) {
            indicationArrow['rotation'] = 180;
            indicationVideo = {show:0}
        }
        setIndicationState([indicationVideo,indicationArrow]);
    }, [topInView, bottomInView, phaseState]);

    return (
        <>
            <PhotoSection ref={topRef}/>
            <VideoSection ref={bottomRef} />
            <IndicationIcon indications={indicationState} />
        </>
    )
}
export default Gallery;