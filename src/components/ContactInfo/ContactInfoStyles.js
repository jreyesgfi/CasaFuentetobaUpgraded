import styled from "styled-components";
import { Column, MainHeading, Row, Text } from "../../globalStyles";

export const ContactInfoWrapper = styled(Column)`
    padding:0rem 0 0 5rem;
    width:100%;
    flex-wrap:wrap;
    justify-content: center;

    gap:3rem;
    @media screen and (min-width: 500px) {
        align-items:center;
        padding:0;
    }
`;

export const ElementWrapper = styled.div`
    display:grid;
    grid-template-rows: 7rem auto 40%;
    flex:0 0 min(20%, 180px);
    margin-right:0;
    margin-left:0;

    @media screen and (max-width: 900px) {
        flex:0 0 26%;
    }
    @media screen and (max-width: 700px) {
        flex:0 0 40%;
        margin-left:1rem;
        grid-template-rows: 5.5rem auto 40%;
    }
    @media screen and (max-width: 500px) {
        flex:0 0 70%;
        margin-right:0;
        grid-template-rows: 4rem auto 40%;
    }
`;

export const ContactInfoIcon = styled.img`
    height: fit-content;
    width:fit-content;
    max-height:7rem;
    max-width:7rem;
    margin-top:auto;
    @media screen and (max-width: 700px) {
        max-height:5.5rem;
        max-width:5.5rem;
    }
    @media screen and (max-width: 500px) {
        max-height:4rem;
        max-width:4rem;
    }
    @media screen and (min-width: 500px) {
        margin:auto;
    }
`;

export const ContactInfoHeading = styled(MainHeading)`
    font-size:clamp(0.8rem, 1.5vw, 2rem);
    text-align:left;
    @media screen and (min-width: 700px) {
        text-align:center;
    }
`;

export const ContactInfoText = styled(Text)`
    font-size:10pt;
    width:100%;
`;