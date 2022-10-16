import styled from "styled-components";
import { Column, globalColors, MainHeading, minimunSize, Row } from "../../globalStyles";

const baseStyle = {
    'background':globalColors.light.primary,
    'fontColor':globalColors.dark.primary
}

const occupiedStyle = {
    'textDecoration':`line-through ${globalColors.dark.primary}`,
    'bodyVisibility':'hidden',
    'opacity':0.6
}

//styles depending on the time
const previousStyle = {
    'opacity':0.3
}

const todayStyle = {
    'border':`1px solid ${globalColors.dark.primary}`,
    'background':globalColors.blue.light,
}

const incomingStyle = {
    'opacity':0.3
}

// styles for range
const selectedStyle = {
    'background':globalColors.green.light,
    'fontColor':globalColors.dark.primary
}
const correctRangeStyle = {
    'background':globalColors.green.light,
    'fontColor':globalColors.dark.primary
}
const incorrectRangeStyle = {
    'background':globalColors.red.light,
    'fontColor':globalColors.dark.primary
}

const fillSelected = (selected, selectionType)=>{
    if (selected!==true){
        return ''
    }
    switch(selectionType){
        case -1:
            return incorrectRangeStyle.background;
        case 0:
            return selectedStyle.background;
        case 1:
            return correctRangeStyle.background;
    }
}


export const CalendarWrapper = styled.div`
    padding:2rem 2.5rem;
    margin:auto;
    max-width:min(1000px, 100vw);
    min-width:${minimunSize};
    @media screen and (max-width: 600px) {
        padding:1.5rem;
    }
`;

export const WeekDaysWrapper = styled(Row)``;

export const WeekDayCell = styled.div`
    flex:0 0 14%;
    color:${globalColors.dark.primary};
`;

export const DayCellsWrapper = styled(Row)`
    flex-wrap: wrap;
`;

export const DayCellWrapper = styled(Row)`
    flex:0 0 14%;
    background-color: ${({selected})=>fillSelected(selected[0],selected[1])};
    background-color:${({today})=>(today?todayStyle.background:'')};
    cursor:pointer;
`;

export const DayCell = styled(Column)`
    width:70%;
    margin:auto;
    color:${globalColors.dark.primary};
    opacity: ${({occupied})=>(occupied?occupiedStyle.opacity:'')};
    opacity:${({previous})=>(previous?previousStyle.opacity:'')};
    opacity:${({incoming})=>(incoming?incomingStyle.opacity:'')};
    text-decoration: ${({occupied})=>(occupied?occupiedStyle.textDecoration:'')};
`;

export const DayCellHeader = styled(MainHeading)`
    text-align: left;
    margin:0;
    font-size:clamp(1.5rem, 1.5vw, 2.6rem);
    @media screen and (max-width: 600px) {
        font-size:clamp(1.3rem, 1.3vw, 2.4rem)
    }
`;
export const DayCellBody = styled.p`
    visibility: ${({occupied})=>(occupied?occupiedStyle.bodyVisibility:'')};
    font-size: clamp(9pt, 2vw, 1.5rem);
`;