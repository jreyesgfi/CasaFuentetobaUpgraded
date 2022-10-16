import { MainHeading, Section } from "../../globalStyles";
import { fillWithZero } from "../../util/dataParser";
import { monthsDict } from "../../data/CalendarData";
import { MonthSelectorHeading, MonthSelectorIcon, MonthSelectorWrapper, SelectionPanel } from "./MonthSelectorStyles";
import SelectionWheel from "../SelectionWheel/SelectionWheel";
import React from "react";


const MonthSelector=(props)=>{
    const currentMonth = props?.currentFocusedDay?.getMonth() + 1 || 1;
    const currentYear = props?.currentFocusedDay?.getFullYear() || 2022;
    const initialYear = new Date().getFullYear()||2022;
    const setSelection = props?.setSelection || (()=>null);

    var monthList = [...Array(12).keys()];
    monthList = monthList.map((e)=>monthsDict[e+1]);

    function adjustMonth(date){
        const month = fillWithZero((date['month']+1 || currentMonth).toString());
        const year = (date['year'] || currentYear).toString();
        const newSelection = new Date(`${month}-01-${year}`);
        setSelection(newSelection);
    }

    return(
        <MonthSelectorWrapper>
            <MonthSelectorHeading 
                onClick={()=>{props.onClick()}}>
                    <>
                        {`${monthsDict[currentMonth]}, ${currentYear}`}
                    </>
            </MonthSelectorHeading>
            {props?.selectingDay === true &&
            <SelectionPanel>
                <SelectionWheel
                    elementsArray={monthList}
                    width={55}
                    initialPos={currentMonth-1}
                    callback={(month)=>{adjustMonth({'month':month})}}
                    clickCallback={()=>{props.onClick()}}/>
                <SelectionWheel 
                    elementsArray={[initialYear,initialYear+1]}
                    width={35}
                    initialPos={currentYear}
                    callback={(year)=>{adjustMonth({'year':[initialYear,initialYear+1][year]})}}/>
            </SelectionPanel>
            }
             <MonthSelectorIcon 
                src='/assets/icons/darkDownArrow.png'
                open={props?.selectingDay === true}
                onClick={()=>{props.onClick()}}/>
        </MonthSelectorWrapper>
    )
}

export default MonthSelector