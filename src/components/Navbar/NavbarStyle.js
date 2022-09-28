import styled from 'styled-components';
import {Container, globalColors, MainHeading} from '../../globalStyles';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
	position:fixed;
	background: ${globalColors.dark.primary};
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	top: 0;
	z-index: 250;
	width: 100%;
	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	padding:0 calc(6vw - 50px);
	${Container}
`;

export const NavLogo = styled(Link)`
	color: ${globalColors.color.primary};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	z-index: 250;
`;
export const NavTitle = styled(MainHeading)`
	font-size: 10pt;
	font-family: primary-bold, sans-serif;
	text-align:left;
	max-width:40px;
	margin:0;
`;

export const NavIcon = styled.img`
	width: 5rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 250;
	>* >path{
		color: ${globalColors.color.primary};
	}
	@media screen and (max-width: 760px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 760px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 12%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: ${globalColors.dark.primary};
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
	@media screen and (max-width: 760px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: #c8c9d8;
		font-family: primary-bold, sans-serif;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 760px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;