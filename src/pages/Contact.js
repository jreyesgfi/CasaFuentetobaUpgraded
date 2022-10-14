import React from 'react';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import { Section } from '../globalStyles';

const Contact = ()=>{
    const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);

    if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
    return(
        <AnimatedPage>
            <Section inverse>
                <ContactInfo/>
            </Section>
        </AnimatedPage>
    )
}
export default Contact;