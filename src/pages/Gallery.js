import React, { useEffect, useState } from 'react';
import IndicationIcon from '../components/IndicationIcon/IndicationIcon';
import PhotoSection from '../components/PhotGrid/PhotoSection';
import VideoSection from '../components/VideoSection/VideoSection';

const Gallery = ()=>{

    //state of indication icon
    const [indicationState, setIndicationState] = useState({show:0});

    // change if we are reaching other section
    useEffect(() => {
        var indications = {
            show:1,
            iconState:0,
            rotation:-90,
            navigate:2,
        }
        setIndicationState({...indications});
    },[]);

    return(
        <>
            <PhotoSection/>
            <VideoSection/>
            <IndicationIcon referenceValues={indicationState}/>
        </>
    )
}
export default Gallery;