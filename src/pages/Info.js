import React, { useEffect, useRef, useState } from 'react';
import Description from '../components/Description/Description';
import Features from '../components/Features/Features';
import LongDescription from '../components/LongDescription/LongDescription';
import NextButton from '../components/NextButton/NextButton';
import IndicationIcon from '../components/IndicationIcon/IndicationIcon';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
import { useInView } from 'react-intersection-observer';


const Info = ()=>{

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
                }, 3000);
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
            navigate:3,
            rotation : -90
        }
        var indicationVideo= {
            show: 1,
            iconState: 2,
            handleClick: () => { bottomRef.current.scrollIntoView({ behavior: 'smooth' }) },
        }
        if (bottomInView) {
            indicationArrow['rotation'] = 180;
            indicationVideo = {show:0}
        }
        setIndicationState([indicationVideo,indicationArrow]);
    }, [topInView, bottomInView, phaseState]);

    
    const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);

    if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
    
    return(
        <AnimatedPage>
            <Description/>
            <Features ref={topRef}/>
            <LongDescription ref={bottomRef}/>
            <IndicationIcon indications={indicationState}/>
        </AnimatedPage>
    )
}
export default Info;