import styled from 'styled-components';
import {globalColors, Button} from '../../globalStyles';

export const NextButtonStyle = styled(Button)`
    position:sticky;
    margin-top:25pt;
    margin-right:4rem;
    top:${({top})=>(top?top:'10vh')};
    right:${({right})=>(right?right:'0')};
	background-color: ${globalColors.color.primary};
    border: none;
    font-family: primary-bold, sans-serif;
    z-index:200;
    @media screen and (max-width: 700px) {
        margin-top:0pt;
        margin-right:2rem;
    }
`;