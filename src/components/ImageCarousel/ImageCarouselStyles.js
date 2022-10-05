import styled from 'styled-components';
import { globalColors } from '../../GlobalStyles';


export const CarouselImagesWrapper = styled.div`
	position:relative;
	margin:4rem 1rem 4rem;
	width:calc(100vw - 2rem);
	height: 300px;
`;
export const CarouselMainImage = styled.img`
	position:absolute;
	inset:0;
	margin:auto;
    width: 60%;
	height:100%;
	border: 2px solid ${globalColors.light.primary};
	border-radius: 0px 0px 0 0;
	object-fit: cover;
	vertical-align: middle;
	z-index:50;
	@media screen and (max-width: 550px) {
		min-width: 300px;
		min-height: 200px;
	}
`;
export const MaskCarouselImage = styled.div`
	position:absolute;
	height: 85%;
	width:30%;
	object-fit: contain;
	vertical-align: middle;
	inset:${({prev})=> (prev===true?'auto auto 0 5%':'auto 5% 0 auto') };
	background-color: ${globalColors.transparent.light2};
	z-index:20;
	@media screen and (max-width: 500px) {
		display:none;
	}
`

export const CarouselSecondaryImage = styled.img`
	position:absolute;
	height: 85%;
	width:30%;
	object-fit: contain;
	border-radius: 10px 10px 0 0;
	vertical-align: middle;
	inset:${({prev})=> (prev===true?'auto auto 0 5%':'auto 5% 0 auto') };
	z-index:10;
	@media screen and (max-width: 500px) {
		display:none;
	}
`;

export const CarouselControlWrapper = styled.div`
	display:none;
	position:absolute;
	inset: auto auto -3.2rem 0;
	margin-left: clamp(15px, 4rem, 15vw);
	width:30%;
	justify-content: space-between;
	z-index:100;
	@media screen and (max-width: 500px) {
		display: flex;
	}
`
export const ImageExpandedWrapper = styled.div`
	position:relative;
	width: 100vw;
	height:fit-content;
	object-fit: contain;
`

export const ExpandedImage = styled(CarouselMainImage)`
	width:auto;
	height:auto;
	object-fit: contain;
	min-width: 100%;
	min-height: 50vh;
	max-height: 70vh;
	z-index: 80;
	bottom:auto;
`
