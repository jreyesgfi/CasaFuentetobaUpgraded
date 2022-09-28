import React, { useEffect, useState } from 'react';
import Description from '../components/Description/Description';
import Features from '../components/Features/Features';
import LongDescription from '../components/LongDescription/LongDescription';
import NextButton from '../components/NextButton/NextButton';
import IndicationIcon from '../components/IndicationIcon/IndicationIcon';


const Info = ()=>{
    //state of indication icon
    const [indicationState, setIndicationState] = useState({show:0});

    // change if we are reaching other section
    useEffect(() => {
        var indications = {
            show:1,
            iconState:0,
            rotation:-90,
            navigate:3,
        }
        setIndicationState({...indications});
    },[]);
    
    return(
        <>
            <Description/>
            <Features/>
            <LongDescription/>
            <IndicationIcon referenceValues={indicationState}/>
        </>
    )
}
export default Info;