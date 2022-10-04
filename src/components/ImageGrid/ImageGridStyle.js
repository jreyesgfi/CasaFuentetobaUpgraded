import styled from 'styled-components';
import { globalColors, Row } from '../../globalstyles';



export const ImageGridWrapper = styled(Row)`
	/* border:2pt ${globalColors.grey.primary} solid; */
	min-width: 320px;
	width:97vw;
	height:60vh;
	margin: 3vh auto 5vh;
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
	border-radius: 5pt;
	@media screen and (max-width: 550px) {
		margin-bottom:55px;
		max-height:85%;
		max-width:95%;
	}
`;

export const OtherImagesInGridWrapper = styled(Row)`
	border-left:2pt ${globalColors.grey.light} solid;
	max-height:100%;
	width:clamp(80px,20%, 400px);
	flex-wrap: wrap;
	align-content:flex-start;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: auto;
	padding:1% 0 5%;
	box-sizing:content-box;
	@media screen and (max-width: 550px) {
		border-top:2pt ${globalColors.grey.light} solid;
		border-left:none;
		display:inline-block;
		flex-direction: row;
		width:100%;
		overflow-x: auto;
		height:20%;
		white-space: nowrap;
		overflow-y:hidden;
	}
`;
export const OtherImageHolder = styled.div`
	max-width: 85%;
	min-width:65%;
	width:80%;
	max-height:30%;
	min-height:24%;
	@media screen and (max-width: 550px) {
		display:inline-block;
		min-width:0;
		width:24%;
		max-height:none;
		height:100%;
		object-fit:cover;
	}
`
export const OtherImageInGrid = styled.img`
	max-height:30%;
	min-height:24%;
	width:clamp(80px, 40%, 53%);
	object-fit: cover;
	margin: 2pt;
	
	@media screen and (max-width: 550px) {
		display:inline-block;
		max-height:none;
		height:100%;
		width:clamp(80px, 24%, 200px);
		margin: 0 2pt;
	}
`;