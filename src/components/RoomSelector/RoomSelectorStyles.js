import styled from "styled-components";
import { motion } from 'framer-motion';
import { globalColors, Row } from "../../globalstyles";

export const RoomButtonsContainer = styled(Row)`
    flex-wrap:wrap;
    height:auto;
    width:70%;
    margin-left: 2rem;
`;

export const RoomButtonContainer = styled(motion.div)`
    /* flex: 15%; */
    height:6.5rem;
    margin:5pt;
    padding:0 0.5rem;
    background-color: ${globalColors.light.second};
    position:relative;
`;

export const RoomSelectorImage = styled.img`
    height: 70%;
    max-width:100px;
    border:2px solid ${({selected})=>(selected?globalColors.dark.primary:globalColors.grey.primary)};
    object-fit: cover;
    opacity: ${({selected})=>(selected?1:0.3)};
    image-resolution: 100dpi;
    &:hover {
        transition: all 0.3s ease;
        opacity:1;
	}
`;

export const RoomSelectorText = styled.p`
`