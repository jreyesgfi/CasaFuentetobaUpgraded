import React from 'react';
import CalendarSection from '../components/CalendarSection/CalendarSection';
import CalendarInstructions from '../components/CalendarInstructions/CalendarInstructions';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const Booking = ()=>{

        return(
            <AnimatedPage>
                <CalendarInstructions></CalendarInstructions>
                <CalendarSection/>
            </AnimatedPage>
        )
}
export default Booking;