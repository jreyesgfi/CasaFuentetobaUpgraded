import React, { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
    Nav,
    NavbarContainer,
    NavLogo, NavIcon,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavTitle
} from './NavbarStyle.js'
import { useNavigate } from 'react-router-dom';

import data from '../../data/NavbarData';
import { globalColors } from "../../globalStyles.js";

const Navbar = () => {

    // state for the mobileMenu
    const [show, setShow] = useState(false);

    //
    let navigate = useNavigate();

    // click to open/close the menu
    const handleMenuClick = () => {
        setShow(!show);
    }

    // // scroll to an element
    // const scrollTo = (id) => {
    //     const element = document.getElementById(id);

    //     element.scrollIntoView(
    //         { behavior: 'smooth' }
    //     )
    // }

    // click on item 
    const handleItemClick = (id,to) => {
        // add the track of the view
        navigate(to);

        // close the menu
        setShow(false)
    }


    return (
        <IconContext.Provider value={{ color: `${globalColors.light.primary}` }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon src='./assets/icons/black-app-icon.svg' alt='logo'>
                        </NavIcon>
                        <NavTitle>
                            Casa Fuentetoba
                        </NavTitle>
                    </NavLogo>
                    <MobileIcon onClick={() => handleMenuClick()}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        {data.map((element, index) => {
                            return (
                                <NavItem key={index}>
                                    <NavLinks onClick={()=>handleItemClick(element.id,element.to)}>
                                        {element.text}
                                    </NavLinks>
                                </NavItem>
                            )
                        })
                        }
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}
export default Navbar