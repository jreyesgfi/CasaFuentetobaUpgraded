import React from 'react';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import CalendarInstructions from '../components/CalendarInstructions/CalendarInstructions';


const Booking = ()=>{
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
        <>
            <CalendarInstructions></CalendarInstructions>
            <CalendarSection/>
        </>
    )
}
export default Booking;