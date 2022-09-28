import styled from "styled-components";
import { MainHeading, Text } from "../../globalStyles";


export const CalendarInstructionsHeading = styled(MainHeading)`
    text-align:left;
    font-size:clamp(1.3rem, 4vw, 3rem);
`;
export const CalendarInstructionsText = styled(Text)`
    width:80%;
    font-size:clamp(0.9rem, 2vw, 1.5rem);
`;