import React from 'react';
import { useRouter } from 'next/router';
import data from "../../data/NavbarData";
import { IndicationIconImg, IndicationIconWrapper, IndicationsWrapper } from './IndicationIconStyle';

const IndicationIcon = (props) => {
    const defaults = [{
        show: 0,
        iconState: 0,
        handleClick: function () { },
        rotation: 0,
    }];
    const currentSettings = props?.indications || defaults;
    const iconsDictionary = {
        0: '../assets/icons/greenDownArrow.png',
        1: '../assets/icons/redVideoRound.png',
        2: '../assets/icons/blueInfo.png'
    };


    //navigation
    const navigate = useRouter();
    const correctHandleClick = (indication)=>{
        var handleClick = indication?.handleClick;
        if (indication.navigate !== undefined){
            const newStep = indication.navigate;
            handleClick = () => navigate.replace(data[newStep].to)
        }
        return handleClick;
    }
    return (
        <IndicationsWrapper>
            {currentSettings.map((indication,index) => {
                const handleClick = correctHandleClick(indication);
                return (
                    <IndicationIconWrapper
                        key={index}
                        show={indication?.show || 0}
                        onClick={handleClick||function(){}}>
                        <IndicationIconImg
                            src={iconsDictionary[indication?.iconState||0]}
                            rotation={indication?.rotation||0}
                        />
                    </IndicationIconWrapper>
                )
            })}
        </IndicationsWrapper>
    )
}

export default IndicationIcon;