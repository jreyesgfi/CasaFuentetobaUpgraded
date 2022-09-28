import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from "../../data/NavbarData";
import { IndicationIconImg, IndicationIconWrapper } from './IndicationIconStyle';

const IndicationIcon = ({referenceValues}) =>{

    const defaults = {
        show:0,
        iconState:0,
        clickHandler: function(){},
        rotation:0,
    };
    const currentSettings = {
        ...defaults,
        ...referenceValues
    };
    const iconsDictionary = {
        0:'./assets/icons/greenDownArrow.png'
    };

    const iconSelected= iconsDictionary[currentSettings.iconState];

    //navigation
    const navigate = useNavigate();
    if (currentSettings?.navigate){
        const newStep = currentSettings.navigate;
        currentSettings.handleClick = ()=>navigate(data[newStep].to) 
    }

    return (
        <IndicationIconWrapper 
            show={currentSettings.show}
            onClick={currentSettings.handleClick}>
            <IndicationIconImg
                src={iconSelected}
                rotation= {currentSettings.rotation}
            />
        </IndicationIconWrapper>
    )
}

export default IndicationIcon;