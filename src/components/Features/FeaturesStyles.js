import styled from "styled-components";
import { Column, Heading, Row, Text } from "../../globalStyles";

export const FeaturesWrapper = styled(Row)`
    padding:0rem 0 0 2.5rem;
    width:100%;
    flex-wrap:wrap;
    justify-content: start;

    gap:3rem;
`;

export const FeatureWrapper = styled.div`
    display:grid;
    grid-template-rows: 2.5rem auto 40%;
    flex:0 0 min(20%, 180px);
    margin-right:0;
    margin-left:0;

    @media screen and (max-width: 900px) {
        flex:0 0 26%;
    }
    @media screen and (max-width: 700px) {
        flex:0 0 40%;
        margin-left:1rem;
    }
    @media screen and (max-width: 500px) {
        flex:0 0 70%;
        margin-right:0;
        margin-left:3rem;
    }
`;

export const FeatureIcon = styled.img`
    height: fit-content;
    width:fit-content;
    max-height:2.5rem;
    max-width:2.5rem;
    margin-top:auto;
`;

export const FeatureHeading = styled(Heading)`
    font-size:clamp(1rem, 1.6vw, 1.8rem);
    text-align:left;
    margin: 5pt 0;
`;

export const FeatureText = styled(Text)`
    font-size:10pt;
    width:100%;
`;


