import styled from "styled-components";
import { Column, globalColors, MainHeading } from "../../globalStyles";

export const MapWrapper = styled(Column)`
    margin-right:max(10vw,30px);
    margin-left:auto;
    border:2px solid ${globalColors.dark.primary};
    width:fit-content;
    margin-left:max(10vw,30px);
    align-items:left;
    *{
        width:fit-content;
    }
`;
export const LocationHeading = styled(MainHeading)`
    font-size:1.4rem;
    margin-top:0.5rem;
`;