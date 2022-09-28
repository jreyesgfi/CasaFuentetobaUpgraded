import { useState } from "react";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import {BsFillCaretUpFill} from "react-icons/bs";
import {BsFillCaretDownFill} from "react-icons/bs";
import { globalColors } from "../../globalStyles";
import { ArrowIcon, ArrowIconWrapper, CurrentElementText, CurrentElementWrapper, SecondaryElementText, SecondaryElementWrapper, SelectionWheelWrapper } from "./SelectionWheelStyles";
import limitText from "../../util/setTextLimit";

import React from "react";

const SelectionWheel=(props)=>{
    var elementsArray = props?.elementsArray||[];
    //limit the size
    elementsArray = elementsArray.map((element)=>{
        return (element.length > 10 & typeof(element)=='string') ? element.slice(0,7) +'':element;
    })

    // elements array props
    const size = elementsArray.length;
    const [selectedPos, setSelectedPos] = useState(size + (props.initialPos|| 0));

    // material ui props
    //width and infinitiveLoop
    
    // function to remit the selection
    //props.callback()

    // check if next entry has to be active
    const nextEntryHidden = ()=> (props?.infiniteLoop != true && (selectedPos)%size===(size-1));
    const previousEntryHidden = ()=> (props?.infiniteLoop != true && (selectedPos)%size===0);

    useEffect(
        ()=>{props?.callback((selectedPos)%size)}
    ,[selectedPos]);

    return(
        <SelectionWheelWrapper>
            <SecondaryElementWrapper 
                onClick={()=>{
                    setSelectedPos(selectedPos+1)} }
                hidden={nextEntryHidden()}
                >
                <ArrowIconWrapper>
                    <ArrowIcon src='/assets/icons/darkDownArrow.png' up={true}/>
                </ArrowIconWrapper>
                <SecondaryElementText>
                    {elementsArray[(selectedPos+1)%size]}
                </SecondaryElementText>
            </SecondaryElementWrapper>
            <CurrentElementWrapper onClick={()=>{props?.clickCallback()}}>
                <CurrentElementText>
                    {limitText(elementsArray[(selectedPos)%size],6,3) }
                </CurrentElementText>
            </CurrentElementWrapper>
            <SecondaryElementWrapper
                onClick={()=>{setSelectedPos(selectedPos+size-1)}}
                hidden={previousEntryHidden()}
            >
                <SecondaryElementText>
                    {elementsArray[(selectedPos-1)%size]}
                </SecondaryElementText>
                <ArrowIconWrapper>
                    <ArrowIcon src='/assets/icons/darkDownArrow.png' up={false}/>
                </ArrowIconWrapper>
            </SecondaryElementWrapper>
        </SelectionWheelWrapper>
    )
}

export default SelectionWheel