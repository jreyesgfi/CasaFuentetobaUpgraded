import styled, {createGlobalStyle} from 'styled-components'

export const globalColors = {
    dark:{
        primary:'#012f41',
        second:'#012E40'
    },
    light:{
        primary:'#fcffff',
        second:'#f2fbff'
    },
    grey:{
        primary:'#949a9e',
        light:'#d3d5d7',
        dark:'#5f6368',
    },
    color:{
        primary:'#aed05e',
        second:'#038C8C',
        third:'#03A696',
		light:'#EBF4D8'
    },
    transparent:{
        dark:'#012f4167',
        light:'rgba(252, 255, 255, 0.961)',
		light2:'rgba(252, 255, 255, 0.561)',
        primaryColor:'#aed05e3d',
		full:'#ffffff00'
    },
    green:{
        primary:'#aed05e',
		light:'#EBF4D8'

    },
    red:{
        primary:'#F65050',
		light:'#F7E1E1',
    },
	blue:{
		primary:'#83DAFD',
		light: '#DAF4FE'
	}
}

export const GlobalStyles = createGlobalStyle`
	/* general fonts*/
	@font-face { font-family: primary-light; src: url('/assets/fonts/MPLUS1/MPLUS1-Thin.ttf') }
	@font-face { font-family: primary-normal; src: url('/assets/fonts/MPLUS1/MPLUS1-Light.ttf') }
	@font-face { font-family: primary-bold; src: url('/assets/fonts/MPLUS1/MPLUS1-Bold.ttf') }
	@font-face { font-family: primary-semibold; src: url('/assets/fonts/MPLUS1/MPLUS1-SemiBold.ttf') }
    
    /*general style*/
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
		color:${globalColors.dark.primary};
        font-family: primary-normal, sans-serif;
		font-display: auto;
    }

`;
// sizes general
export const minimunSize = '360px';


export const WaitingContainer = styled.div`
	visibility: ${({ loading }) => (loading==1?'hidden':'visible')}
`

export const Container = styled.div`
    width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
    font-size: clamp(2.3rem, 4vw, 4.5rem);
	margin-bottom: 1rem;
	color: ${({ inverse }) => (inverse ? 
        globalColors.dark.primary : 
        globalColors.light.primary)};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
	user-select: none;
`;
export const Heading = styled.h2`
    font-size: clamp(1.3rem, 13vw, 3.1rem);
	user-select: none;
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? 
        globalColors.dark.primary : 
        globalColors.light.primary)};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`
	position: ${({ position }) => (position ? position : 'relative')};
    color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	height:fit-content;
`;
export const Section = styled.section`
    padding: ${({ padding }) => (padding ? padding : '120px 0')};
	user-select: none;
	overflow-x: hidden;
	overflow-y: hidden;
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ?
        globalColors.light.primary : 
        globalColors.dark.primary)};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '360px')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	padding-bottom: ${({ bottomWave}) => (bottomWave ? 0 : '')};
	margin-bottom: ${({ bottomWave}) => (bottomWave ? 0 : '')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;
export const Row = styled.div`
    display: flex;
	flex-direction: row;
	user-select: none;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;
export const Column = styled.div`
    display: flex;
	flex-direction: column;
	user-select: none;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
export const Button = styled.button`
    border-radius: 4px;
	background-color:${globalColors.blue.light};
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: ${globalColors.dark.primary};
	outline: none;
	border: 2px solid ${globalColors.light.primary};
	cursor: pointer;
	overflow: hidden;
	position: relative;
	user-select: none;
	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
		background-color: ${globalColors.dark.primary};
	}
	&:hover {
		background-color: ${globalColors.transparent.full};
		color: ${globalColors.light.primary};
		border:2px solid ${globalColors.light.primary};
		
	}
`;

export const Text = styled.p`
    color:${({inverse})=>inverse?globalColors.dark.primary:globalColors.light.primary};
    width:${({width})=>width?width:'50%'};
	font-size:${({fontSize})=>fontSize?fontSize:'12pt'};
	user-select: none;
    @media screen and (max-width: 700px) {
		width:${({smWidth})=>smWidth?smWidth:'70%'};
	}
`;


export default GlobalStyles;