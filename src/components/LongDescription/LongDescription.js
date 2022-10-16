import { Section, Text } from "../../globalStyles"
import { LongDescriptionHeading, LongDescriptionWrapper,LongDescriptionText } from "./LongDescriptionStyles";
import React, { forwardRef } from "react";
import { descriptionText } from "../../data/DescriptionData";

const LongDescription = forwardRef((props,ref) =>{
    return(
        <Section padding="125px 0 40px" smPadding= "120px 0 40px" ref={ref}>
            <LongDescriptionWrapper>
                <LongDescriptionHeading>
                    Una casa con encanto
                </LongDescriptionHeading>
                <LongDescriptionText width="50%" smWidth="90%">
                    Este edificio, de estilo provenzal, reformado recientemente en 2022. Consta de 190 m2 incluyendo como estancias un salón,
                    una cocina, 5 dormitorios, 2 baños y 1 aseo, balcones, jardín y garaje. Estas se encuentran distribuidas en 4 plantas (incluyendo el nivel inferior del garaje) y están totalmente equipadas
                    incluyendo entre las comodidades un cenador en el exterior, barbacoa, chimenea, televisión de pantalla plana, lavavajillas, lavadora etc.
                    
                </LongDescriptionText>
                <LongDescriptionText width="50%" smWidth="90%">
                    {descriptionText}
                </LongDescriptionText>
            </LongDescriptionWrapper>
        </Section>
    )
})
export default LongDescription;