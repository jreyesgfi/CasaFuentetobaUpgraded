import React from 'react';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import { Section } from '../globalStyles';

const Contact = ()=>{
    return(
        <AnimatedPage>
            <Section inverse>
                <ContactInfo/>
            </Section>
        </AnimatedPage>
    )
}
export default Contact;