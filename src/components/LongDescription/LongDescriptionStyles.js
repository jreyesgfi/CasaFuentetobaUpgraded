import styled from "styled-components";
import { MainHeading, Text } from "../../globalStyles";

export const LongDescriptionWrapper = styled.div`
     position:relative;
     width:100%;
     padding-left:2rem;
`;

export const LongDescriptionHeading = styled(MainHeading)`
    text-align:left;
    width:fit-content;
    display:block;
`;

export const LongDescriptionText = styled(Text)`
    text-align:justify;
`;