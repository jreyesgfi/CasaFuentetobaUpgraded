import { useEffect, useRef, useState } from "react";
import { daysOfEachMonth, daysOfWeekDict, monthsDict, priceMin } from "../../data/CalendarData";
import { MainHeading, Section } from "../../globalStyles"
import { changeDateFormat, dateToString } from "../../util/dataParser";
import IDGenerator from "../../util/IdGenerator";
import { uploadDaysData } from "../../data/CalendarData";
import { CalendarWrapper, DayCell, DayCellBody, DayCellHeader, DayCellsWrapper, DayCellWrapper, WeekDayCell, WeekDaysWrapper } from "./CalendarStyles";
import React from "react";

const Calendar = (props) => {

    /**
     *  Important states
     */

    // today
    const today = new Date();

    // state to keep the processed data
    const [daysData, setDaysData] = useState({});

    // day that points the month to display
    const dayToFocus = props?.dayToFocus || new Date();

    // selected days
    const [selectedDays, setSelectedDays] = useState({});
    const firstLastSelectedRef = props?.rangeSelectedRef;

    // range state
    const [rangeState, setRangeState] = useState(0);//-1 wrong range; 0 pending; 1 approved

    // total price
    const minTotalPrice = priceMin;
    const totalPriceRef = useRef(0);

    /**
     * Displayed period
     */
    // first date needed calculated
    const rangeToDisplay = (arbitraryDay) => {
        // 1 of these month
        const firstOfMonth = new Date(arbitraryDay.getTime());
        firstOfMonth.setDate(1);

        // last of month
        const lastOfMonth = new Date(arbitraryDay.getTime());

        lastOfMonth.setDate(daysOfEachMonth[arbitraryDay.getMonth() + 1]);

        // complete the week with previous days
        const prevMonday = new Date(firstOfMonth.getTime());
        prevMonday.setDate(2 - firstOfMonth.getDay()); //1 cause you are currently in the first and 1 cause monday is 0 not 1

        // firstLastDays.current = [firstOfMonth, lastOfMonth];

        return [prevMonday, [firstOfMonth, lastOfMonth]];
    }

    // generate the whole bunch of days needed to display
    const displayedDates = (firstDayCalculatedLocal) => {

        // variables that takes a place into the loop
        const dayThatChanges = new Date(firstDayCalculatedLocal.getTime());
        const list = [];

        // add all the days
        for (let i = 0; i < 42; i++) {
            list.push(dateToString(dayThatChanges, "dd/mm/yyyy"));
            dayThatChanges.setDate(dayThatChanges.getDate() + 1);
        }
        return list
    };

    // obtain the objects related to the data
    /**
     * 
     * @param {*} displayedDatesArrayLocal 
     * @param {*} firstLastDayInMonth: [firstDayInMont,lastDayInMonth]
     * @returns 
     */
    const displayedObjects = (displayedDatesArrayLocal) => {

        // //make a copy of the data dict
        // const objDict = {...daysData};

        // fill the objDataArray and objDict
        const objList = displayedDatesArrayLocal.map((date) => {
            //recover the data
            const dayInData = daysData?.[date]
                || { 'dia': date, 'precio': whatIsPrice(date), 'ocupado': 0 };

            //return
            return dayInData;
        });
        return objList
    };

    /**
     * Functions to select
     */

    function selectDay(dateObj) {
        const selectedDaysCopy = { ...selectedDays };
        selectedDaysCopy[dateObj['dia']] = dateObj;
        setSelectedDays(selectedDaysCopy);

        // check if is occupied
        if (dateObj['ocupado'] == 1 || 
        // day has been passed
        new Date(changeDateFormat(dateObj['dia'])) <= today ) {
            console.log('occupied')
            occupiedDate(dateObj['dia']);
            return null;
        }
    }

    function selectRange(dateObj) {
        selectDay(dateObj)

        // order the days
        const selectedDay = selectedDays[Object.keys(selectedDays)[0]];
        var firstDate = selectedDay;
        var secondDate = dateObj;
        if (new Date(changeDateFormat(dateObj['dia'])) < new Date(changeDateFormat(selectedDay['dia']))) {
            firstDate = dateObj;
            secondDate = selectedDay;
        }


        // keep the track of the setOfDays
        var totalRange = {};

        // manage each iteration and break the loop params
        var currentDay = new Date(changeDateFormat(firstDate['dia']));
        const limitDay = new Date(changeDateFormat(secondDate['dia']));
        var iterNum = 0;

        while (limitDay >= currentDay) {
            // security break
            if (iterNum > 30) {
                break;
            }

            // save as an string
            const currentDayStr = dateToString(currentDay, "dd/mm/yyyy");

            // add the current day to the list of rangeSelected
            totalRange[currentDayStr] = currentDayStr;

            // check if it is occupied
            if (isOccupied(currentDayStr) == 1) {
                // totalRange = {};
                // break;
                occupiedDate(currentDayStr);
            }

            // pass to the next day
            currentDay.setDate(currentDay.getDate() + 1);
        }

        setSelectedDays(totalRange);
        firstLastSelectedRef.current = [firstDate['dia'], secondDate['dia']];
    }

    function unSelectAll() {
        setSelectedDays({});
        setRangeState(0);
    }


    /*************
     * Functions to import the data with rules
     */

    function isOccupied(dayText) {
        // check if data says is occupied
        var answer = daysData?.[dayText]?.['ocupado'] || 0;

        // check if the day has passed
        if (new Date(changeDateFormat(dayText)) < new Date()) {
            answer = 1;
        }

        if (answer === '1') {
            occupiedDate(dayText);
        }
        return answer
    }

    function whatIsPrice(dayText) {
        const dayOfWeek = new Date(changeDateFormat(dayText)).getDay();
        const answer = daysData?.[dayText]?.['precio']
            || ((dayOfWeek === 0 || dayOfWeek === 6) ? 300 : 150);
        return answer
    }

    function whatIsTotalPrice() {
        if (Object?.keys(selectedDays).length < 2) {
            return null
        }

        const totalPrice =
            // change to its price
            Object.keys(selectedDays).map((day) => {
            
            return (parseInt(whatIsPrice(selectedDays[day])))}).
                
            // add to the total
            reduce((p1, p2) => p1 + p2)

        // safe the total price
        totalPriceRef.current = totalPrice;

        return totalPrice;
    }

    /**
     * plot all days
     */

    /**
     * 
     * @param {*} daysArrayLocal 
     * @returns calendar plot
     */
    const plotDayTiles = (daysArrayLocal, [firstDayInMonth, lastDayInMonth]) => {
        // check if have data
        if (!daysArrayLocal) {
            return null
        }

        // create the array of tilesToPlot
        const tilesToPlot = daysArrayLocal.map((dayLocal) => {
            const dayDateFormat = new Date(changeDateFormat(dayLocal['dia']));

            const previousToggle = dayDateFormat < firstDayInMonth && dayDateFormat.getDate() !== 1 ? 'previous' : '';
            const incomingToggle = dayDateFormat > lastDayInMonth ? true : '';
            const todayToggle = dayDateFormat.toDateString() === today.toDateString() ? true : '';
            
            const occupiedToggle = dayLocal['ocupado'] == 1 || dayDateFormat < new Date() ? true : '';
            const selectedToggle = selectedDays[dayLocal['dia']] ? true : '';


            return ( /*day container*/
                <DayCellWrapper
                    key={IDGenerator()}
                    onClick={() => { clickInDay(dayLocal) }}
                     /* style it */
                    selected = {[selectedToggle,rangeState]}
                    today= {todayToggle}>
                    <DayCell
                        /* style it */
                        previous = {previousToggle}
                        incoming = {incomingToggle}

                        occupied = {occupiedToggle}
                        >

                        {/*content*/}
                        <DayCellHeader inverse>
                            {dayLocal['dia'][0] === '0' ? dayLocal['dia'].slice(1, 2) : dayLocal['dia'].slice(0, 2)}
                        </DayCellHeader>
                        <DayCellBody
                            occupied = {occupiedToggle}
                        >
                            {dayLocal['precio']}€
                        </DayCellBody>
                    </DayCell>
                </DayCellWrapper>
            )
        }
        )

        //return the tiles array
        return (
            <>
                {tilesToPlot}
            </>
        )
    }

    /**
     * funtions to update the selected range
     */

     function occupiedDate(dateText) {

        // the alert
        const message = `El día ${dateToString(new Date(changeDateFormat(dateText)))} está ocupado, selecciona una fecha disponible.`;
        sendAlert(message, 'error');

        // wrong range
        setRangeState(-1);


        return null;
    }

    function finalCheck() {

        // check if we are pending for final check
        if (rangeState !== 0 || Object.keys(selectedDays).length < 2) {
            return null
        }


        //determine if pass
        var pass = true;

        // check the price
        const totalPrice = whatIsTotalPrice();
        if (totalPrice < minTotalPrice) {
            pass = false;

            // send an alert
            sendAlert(`Precio mínimo no cubierto. El plazo solicitado es de ${totalPriceRef.current}€
                y deber ser de al menos ${minTotalPrice}€`, 'error')
        }

        //act depending on the pass value
        if (pass === true) {
            setRangeState(1);
            sendTotalPrice();

            //send an alert
            const [firstSelected, lastSelected] = firstLastSelectedRef?.current || [,];
            const message = `Periodo del ${dateToString(new Date(changeDateFormat(firstSelected)))} al ${dateToString(new Date(changeDateFormat(lastSelected)))} seleccionado correctamente.`
            sendAlert(message, 'success');
        }
        else {
            setRangeState(-1);
        }

        return null
    }

    /**
    * Interactions with the container
    */
         function sendAlert(message = '', severity = 'info', display = true,) {
            props?.sendAlert({
                'display': display,
                'severity': severity,//'success, info, warning or error',
                'message': message,
            });
        }
        function sendTotalPrice() {
            if (props?.sendTotalPrice) {
                props.sendTotalPrice(totalPriceRef?.current);
            }
        }
        function sendOkSignal() {
            if (props?.sendOkSignal) {
                props.sendOkSignal(rangeState);
            }
        }

    /*********************
     *  functions to define the interaction
     *******************/

    //click function
    const clickInDay = (dateObj) => {
        //check if is an unselect click
        if (rangeState !== 0) {
            unSelectAll();
        }

        //check if is first click
        else if (Object.keys(selectedDays).length === 0) {
            selectDay(dateObj);
        }

        // check if second click
        else if (Object.keys(selectedDays).length === 1) {
            selectRange(dateObj);
        }

        // otherwise is a click after select a range
        else {
            unSelectAll();
        }
    }

    /**
    * check for changes
    */

    // check for last validation every time the range changes
    useEffect(
        () => { finalCheck() }
        , [selectedDays])

    // call the sendOkSignal each time the rangeState changes
    useEffect(
        () => {
            // console.log(rangeState)
            sendOkSignal(rangeState)
        }
        , [rangeState])

    /**
     *  Calls to functions and data flow
     */

    // a call to the function at the beggining
    useEffect(() => {
        uploadDaysData().then(data=>{
            setDaysData(data)}) ; //saved in daysData
    }, [])
    useEffect(() => {
        // console.log(daysData) ; //saved in daysData
    }, [daysData])

    // pipeline to the flow
    function flowPipeline(dayToFocusLocal) {
        // 1 determine firstDateCalculated
        const [firstDateCalculatedLocal, firstLastRange] = rangeToDisplay(dayToFocusLocal);

        // 2 needed days to evaluate (string format)
        const displayedDatesArray = displayedDates(firstDateCalculatedLocal);

        // #3 obtain its asociated objects (dict format)
        const displayedObjArray = displayedObjects(displayedDatesArray);

        // #4 plot the days
        return plotDayTiles(displayedObjArray, firstLastRange)
    }


    return (
        <>
            <CalendarWrapper>
                <WeekDaysWrapper>
                    {[...Array(7).keys()].map((n) => (
                        <WeekDayCell key={n}>
                            {daysOfWeekDict[(n + 1) % 7].slice(0, 3)}
                        </WeekDayCell>
                    )
                    )}
                </WeekDaysWrapper>
                <DayCellsWrapper>
                    {flowPipeline(dayToFocus)}
                </DayCellsWrapper>
            </CalendarWrapper>
        </>
    )
}

export default Calendar;