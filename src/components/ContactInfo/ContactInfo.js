import { contactData } from "../../data/ContactData"
import { Section } from "../../globalStyles"
import React from "react";
import { ContactInfoWrapper, ContactInfoIcon, ElementWrapper, ContactInfoHeading } from "./ContactInfoStyles";

const ContactInfo = () =>{
    return(
        <Section inverse padding='60px 0' smPadding='80px 0'>
            <ContactInfoWrapper>
                {contactData.map(
                    (element,index)=>{
                    return(
                        <ElementWrapper key={index}>
                            <ContactInfoIcon src= {element.url}/>
                            {/* <FeatureHeading inverse>{element.title}</FeatureHeading> */}
                            <ContactInfoHeading inverse>{element.text.toLowerCase()}</ContactInfoHeading>
                        </ElementWrapper>
                    )}  
                )}
            </ContactInfoWrapper>
        </Section>
    )
}
export default ContactInfo