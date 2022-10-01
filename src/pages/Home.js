import {useInView} from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero/Hero';
import HomeImages from '../components/HomeImages/HomeImages';
import HomeInfo from '../components/HomeInfo/HomeInfo';
import IndicationIcon from '../components/IndicationIcon/IndicationIcon';
import { Section } from '../globalStyles';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const Home = (props)=>{

    //state of indication icon
    const [indicationState, setIndicationState] = useState([{show:0}]);

    // phaseState
    const [phaseState,setPhaseState] = useState(0)

    // allow the indications 
    useEffect(()=>{
        async function waitToIndicate(){
            await new Promise(() => {
                setTimeout(() => {
                    setPhaseState(1);
                }, 3500);
            });
        }
        waitToIndicate();
    },[])

    // set the inView detector
    const {ref:topRef, inView:topInView} = useInView({threshold:0.2});
    const {ref:bottomRefCopy, inView:bottomInView} = useInView({threshold:0.2});
    const bottomRef = useRef();
    useEffect(()=>bottomRefCopy(bottomRef.current),[bottomRef.current])

    // change if we are reaching other section
    useEffect(() => {
        if (phaseState ===0){
            return
        }
        var indications = {
            show:1,
            iconState:0,
            handleClick:()=>{bottomRef.current.scrollIntoView({behavior:'smooth'})},
        }
        if (bottomInView){
            indications['rotation']=-90;
            indications.navigate=1;
        }

        setIndicationState([indications]);
    },[topInView,bottomInView,phaseState]);
    
    return(
        <AnimatedPage>
           <Section position="relative" padding="0px 0px" smPadding="0px 0px" ref={topRef}>
                <HomeImages/>
                <Hero/>
            </Section>
            <HomeInfo position="relative" inverse ref={bottomRef}/>
            <IndicationIcon indications={indicationState}/>
            {/* <Map></Map> */}
        </AnimatedPage>
    )
}
export default Home;