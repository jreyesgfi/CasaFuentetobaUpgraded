import styled from 'styled-components';
import { globalColors, Row } from '../../globalStyles';



export const ImageGridWrapper = styled(Row)`
	border:1px ${globalColors.blue.primary} solid;
	min-width: 320px;
	width:97vw;
	height:60vh;
	margin: 4vh auto;
	align-content:flex-start;
	@media screen and (max-width: 550px) {
		flex-wrap:wrap;
	}
`;

export const MainImageInGridWrapper = styled.div`
	width:80%;
	position:relative;
	@media screen and (max-width: 550px) {
		height:80%;
		width:100%;
	}
`;
export const MainImageInGrid = styled.img`
	position:absolute;
	inset:0;
	margin: auto;
	max-width:85%;
	min-width:240px;
	min-height:70%;
	max-height:100%;
	object-fit:cover;
	@media screen and (max-width: 550px) {
		margin-bottom:55px;
		max-height:85%;
		max-width:95%;
	}
`;

export const OtherImagesInGridWrapper = styled(Row)`
	border:1px ${globalColors.blue.primary} solid;
	max-height:100%;
	width:clamp(80px,20%, 400px);
	flex-wrap: wrap;
	align-content:flex-start;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: auto;
	@media screen and (max-width: 550px) {
		display:inline-block;
		flex-direction: row;
		width:fit-content;
		overflow-x: auto;
		height:20%;
		white-space: nowrap;
	}
`;
export const OtherImageHolder = styled.div`
	max-width: 85%;
	min-width:65%;
	width:80%;
	max-height:30%;
	min-height:24%;
	@media screen and (max-width: 550px) {
		width:clamp(80px, 24%, 200px);
		height:100%;
	}
`
export const OtherImageInGrid = styled.img`
	background-color: ${globalColors.grey.light};
	max-height:30%;
	min-height:24%;
	width:clamp(80px, 40%, 53%);
	object-fit: cover;
	margin:1%;
	@media screen and (max-width: 550px) {
		display:inline-block;
		max-height:none;
		height:100%;
		width:clamp(80px, 24%, 200px);
	}
`;