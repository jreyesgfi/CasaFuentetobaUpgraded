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
    }
`;

export const NameInfoWrapper = styled(Column)`
    margin:-1rem 0 2rem;
`;

export const EmailFormWrapper = styled(Column)``;

export const EmailFormButtonsWrapper = styled(Row)`
    padding:1rem 1rem 1rem 0;
    flex-wrap: wrap;
    gap:1rem;
    align-items:center;
    justify-content:left;
    @media screen and (max-width: 500px) {
        flex-direction:column-reverse;
        margin-right:auto;
    }
`;

export const EmailPanelButton = styled(Button)`
    border:none;
    margin-right: 1rem;
    width: fit-content;
    min-width:150px;
`;
export const ConfirmationText = styled(Text)`
    text-align:center;
    margin:auto auto 5rem;
`