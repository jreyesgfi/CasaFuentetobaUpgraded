import styled from "styled-components";
import { globalColors } from "../../globalStyles";

export const LocationWrapper = styled(Row)`
    height:40vh;
    align-items: center;
    justify-content: space-around;
`;

export const LocationImage = styled.img``;

export const LocationText = styled.p`
    margin-left:2rem;
    color:${globalColors.light.primary};
    width:40%;
`;