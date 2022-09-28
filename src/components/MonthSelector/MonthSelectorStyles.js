import styled from "styled-components";
import { globalColors, MainHeading, Row } from "../../globalStyles";

export const MonthSelectorWrapper = styled.div`
    max-width:800px;
`;

export const MonthSelectorIcon = styled.img`
    object-fit: cover;
    display: block;
    max-height: 2rem;
    margin:auto;
    transform:${({open})=>(open===true?'rotate(180deg)':'')};
`;

export const MonthSelectorHeading = styled(MainHeading)`
    color:${globalColors.dark.primary};
    cursor:pointer;
    font-size:clamp(1.8rem, 1.8vw, 2.6rem);
    margin-bottom:0;
`;

export const SelectionPanel = styled(Row)`
    width:100%;
    justify-content:center;
    >:first-child{
        *{
            text-align:end;
            margin:auto 0 auto auto;
        }
    }
    >:nth-child(2){
        *{
            text-align:start;
            margin:auto auto auto 0;
        }
    }
`;