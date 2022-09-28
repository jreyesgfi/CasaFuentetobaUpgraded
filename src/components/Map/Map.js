import { Section } from "../../globalStyles";
import { LocationHeading, MapWrapper } from "./MapStyles";

const Map = () => {
    return (
        <Section position="relative">
            <MapWrapper>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716148.2318317466!2d-3.601260032117494!3d42.00718603034794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd44d10b78f81b51%3A0x421983168614fc55!2s42190%20Fuentetoba%2C%20Soria!5e0!3m2!1sen!2ses!4v1660760740955!5m2!1sen!2ses"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
                <LocationHeading>
                    Fuentetoba, Soria
                </LocationHeading>
            </MapWrapper>
        </Section>
    )
}

export default Map;