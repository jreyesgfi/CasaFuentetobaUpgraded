import { Section} from "../../globalStyles"
import { CalendarInstructionsHeading, CalendarInstructionsText } from "./CalendarInstructionsStyles";
import React from "react";

const CalendarInstructions = () =>{
    return(
        <Section padding="100px 4rem 40px" smPadding="90px 2.5rem 30px">
            <CalendarInstructionsHeading>
                Bienvenido/a a la pantalla de reserva
            </CalendarInstructionsHeading>
            <CalendarInstructionsText>
                Seleccione los días de entrada y salida deseados clickando
                en el calendario. También puede modificar el mes/año al clickar sobre el mes y año actual.
            </CalendarInstructionsText>
        </Section>
    )
}

export default CalendarInstructions;