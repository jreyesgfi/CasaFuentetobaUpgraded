import styled from "styled-components";
import { globalColors, MainHeading } from "../../globalStyles";

export const SelectionWheelWrapper = styled.div`
    width:40%;
    padding:0 2rem;
`;

export const SecondaryElementWrapper = styled.div`
    display:block;
    height:35%;
    visibility:${({hidden})=>hidden?'hidden':''};
    cursor:pointer;
`;

export const CurrentElementWrapper = styled.div`
    cursor:pointer;
`;

export const SecondaryElementText = styled.p`
    font-size:clamp(1.2rem, 1.2vw, 2rem);
    user-select: none
`;

export const CurrentElementText = styled(MainHeading)`
    color:${globalColors.dark.primary};
    font-size:clamp(1.7rem, 1.7vw, 2.5rem);
    text-align: left;
`;

export const ArrowIconWrapper = styled.div`
    padding:auto;
    width:fit-content;
    margin-left:1.5rem;
`;

export const ArrowIcon = styled.img`
    object-fit: cover;
    display: block;
    max-height: 1rem;
    margin:auto;
    transform:${({up})=>(up===true?'rotate(180deg)':'')};
`