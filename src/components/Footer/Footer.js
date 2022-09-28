import React from 'react';
import { mailContact, phoneContact } from '../../data/ContactData';
import { FooterWrapper } from './FooterStyles';

const Footer = ()=>{
    return(
        <FooterWrapper>
            {phoneContact} | {mailContact}
        </FooterWrapper>
    )
}
export default Footer;