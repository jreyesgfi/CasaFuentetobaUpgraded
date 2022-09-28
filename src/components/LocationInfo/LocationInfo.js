import { Section } from "../../globalStyles"
import { LocationInfoImage, LocationInfoText, LocationInfoWrapper } from "./LocationInfoStyles";

const LocationInfo = () =>{
    return(
        <Section>
            <LocationInfoWrapper>
                <LocationInfoImage/>
                <LocationInfoText>
                    La casa de Fuentetoba es una casa rural situada a la falta del monte "Pico Frentes". Se encuentra en el pueblo de Fuentetoba a 5km de Soria.
                </LocationInfoText>
            </LocationInfoWrapper>
        </Section>
    )
}
export default LocationInfo;