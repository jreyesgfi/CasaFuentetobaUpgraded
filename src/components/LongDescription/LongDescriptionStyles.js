import styled from "styled-components";
import { Heading, Text } from "../../globalStyles";

export const LongDescriptionWrapper = styled.div`
     position:relative;
     width:100%;
     padding-left:2rem;
`;

export const LongDescriptionHeading = styled(Heading)`
    text-align:left;
    width:fit-content;
    display:block;
    margin-bottom:3rem;
`;

export const LongDescriptionText = styled(Text)`
    text-align:justify;
`;