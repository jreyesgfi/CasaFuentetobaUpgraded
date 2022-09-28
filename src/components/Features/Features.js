import { characteristicDetails } from "../../data/FeaturesData"
import { Section, Text } from "../../globalStyles"
import { FeatureHeading, FeatureIcon, FeaturesWrapper, FeatureText, FeatureWrapper } from "./FeaturesStyles"
import React from "react";

const Features = () =>{
    return(
        <Section inverse padding='60px 0' smPadding='80px 0'>
            <FeaturesWrapper>
                {Object.keys(characteristicDetails).map(
                    (name,index)=>{
                    const feature = characteristicDetails[name]
                    return(
                        <FeatureWrapper key={index}>
                            <FeatureIcon src= {feature.url}/>
                            <FeatureHeading inverse>{feature.title}</FeatureHeading>
                            <FeatureText inverse>{feature.text.toLowerCase()}</FeatureText>
                        </FeatureWrapper>
                    )}  
                )}
            </FeaturesWrapper>
        </Section>
    )
}
export default Features