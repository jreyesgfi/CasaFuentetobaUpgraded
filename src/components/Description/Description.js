import { Section, Text } from "../../globalStyles"
import { DescriptionHeading, DescriptionWrapper } from "./DescriptionStyles";
import React from "react";

const Description = () =>{
    return(
        <Section padding="125px 0 40px" smPadding= "120px 0 40px" >
            <DescriptionWrapper>
                <DescriptionHeading>
                    Confort asegurado
                </DescriptionHeading>
                <Text>
                    La Casa de Fuentetoba cuenta con el encanto rústico y las facilidades modernas
                </Text>
            </DescriptionWrapper>
        </Section>
    )
}
export default Description;