import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { motion } from 'framer-motion';
import { globalColors } from '../../globalStyles';


export const HomeImagesWrapper = styled.div`
	position:relative;
	width: 100%;
	border-top: 2px solid ${globalColors.light.primary};
	overflow:hidden;
`;
export const HomeImagesRow = styled(motion.div)`
	position:relative;
	width:fit-content;
	display:flex;
	flex-flow:row;
	justify-content:left;
	transform:translate(0%);
`

export const ImageHome = styled.img`
	position:relative;
	height: 70vh;
	min-width:90vw;
	max-width: 110vw;
	object-fit: cover;
	vertical-align: middle;
	z-index: 50;
	@media screen and (max-width: 450px) {
		height: 65vh;
		max-width: 300vw;
	}
`