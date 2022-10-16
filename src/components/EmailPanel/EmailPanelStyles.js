import styled from "styled-components";
import { Button, Column, globalColors, MainHeading, Row, Text } from "../../globalStyles";

export const EmailPanelWrapper = styled(Column)`
    position:relative;
    margin-top:5vh;
    min-height:50vh;
`;

export const EmailPanelHeader = styled(MainHeading)`
    font-size: clamp(1.6rem, 4.5vw, 4.5rem);
`;

export const BookingInfoWrapper = styled(Column)`
    margin:1rem 0 2rem;
    >*{
        color:${globalColors.light.primary};
        font-size:min(18pt,3vw);
    }
`;

export const NameInfoWrapper = styled(Column)`
    margin:-1rem 0 2rem;
    >*{
        font-size:min(18pt,3vw);
    }
`;

export const EmailFormWrapper = styled(Column)``;

export const EmailFormButtonsWrapper = styled(Row)`
    padding:1rem 1rem 1rem 0;
    flex-wrap: wrap;
    gap:1rem;
    align-items:space-evently;
    justify-content:left;
    @media screen and (max-width: 500px) {
        margin-right:0;
    }
`;

export const EmailPanelButton = styled(Button)`
    border:none;
    min-width:max(40%, 100px);
    margin:0;
    padding: 0.8rem 0.7rem;
`;
export const ConfirmationText = styled(Text)`
    text-align:center;
    margin:auto auto 5rem;
`