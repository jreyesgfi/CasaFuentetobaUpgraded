import { useEffect, useRef, useState } from "react";
import { Section } from "../../globalStyles";
import IDGenerator from "../../util/IdGenerator";
import Calendar from "../Calendar/Calendar"
import CustomAlert from "../CustomAlert/CustomAlert";
import EmailPanel from "../EmailPanel/EmailPanel";
import MonthSelector from "../MonthSelector/MonthSelector"
import React from "react";
import IndicationIcon from "../IndicationIcon/IndicationIcon";
import { SelectionDateWrapper, TotalPrice, TotalPriceWrapper } from "./CalendarSectionStyles";
import {useInView} from 'react-intersection-observer';

const CalendarSection = () => {

    /**
     *  Email panel
     */
    const [emailPanel, setEmailPanel] = useState(false);
    const emailPanelRef = useRef();

    /**
     * states to monitor the activity
     */
    const [dayToFocus, setDayToFocus] = useState(new Date());

    const [selectingDay, setSelectingDay] = useState(false);

    const [totalPrice, setTotalPrice] = useState(null);

    const rangeSelectedRef = useRef();

    const [okSignal, setOkSignal] = useState(0);

    const [alertRefState, setAlertRefState] = useState();
    const alertObjRef = useRef();
    // 'display': true, false,
    // 'severity': 'info',//success, info, warning or error',
    // 'message': 'Seleccione una fecha de llegada.',

    function sendAlert(alertObj) {
        alertObjRef.current = alertObj;
        setAlertRefState(IDGenerator());
    }

    ////////////////////////
    // REFS AND INDICATIONS
    //state of indication icon
    const [indicationState, setIndicationState] = useState({ show: 0 });

    // set the inView detector
    const { ref: topRef, inView: topInView } = useInView({ threshold: 0.8 });
    const { ref: bottomRefCopy, inView: bottomInView } = useInView({ threshold: 0.2 });
    useEffect(() => bottomRefCopy(emailPanelRef.current), [emailPanelRef.current])

    // change if we are reaching other section
    useEffect(() => {
        var indicationArrow = {
            show: 1,
            iconState: 0,
            rotation : 0,
            handleClick: ()=>{emailPanelRef.current.scrollIntoView({ behavior: 'smooth'})}
        }
        if (!topInView) {
            indicationArrow = {show:0};
        }
        setIndicationState([indicationArrow]);
    }, [topInView, bottomInView]);

    return (
        <>
            <SelectionDateWrapper
                inverse smPadding="40px 0 0" position='relative'padding="0"
                ref={topRef}>
                {(okSignal === 1)&&
                    <TotalPriceWrapper>
                        <TotalPrice>Precio total: {totalPrice}€</TotalPrice>
                    </TotalPriceWrapper>
                }
                <MonthSelector
                    onClick={() => { setSelectingDay(!selectingDay) }}
                    selectingDay={selectingDay}
                    currentFocusedDay={dayToFocus}
                    setSelection={(day) => {
                        setDayToFocus(day);
                    }}
                />
                <Calendar
                    dayToFocus={dayToFocus}
                    sendAlert={(alertObject) => { sendAlert(alertObject) }}
                    sendTotalPrice={(price) => { setTotalPrice(price) }}
                    sendOkSignal={(value) => { 
                        setOkSignal(value)
                    }}
                    rangeSelectedRef={rangeSelectedRef}
                />
                {(okSignal === 0) && <Section inverse></Section>}
                <CustomAlert
                    display={alertObjRef?.current?.['display']}
                    message={alertObjRef?.current?.['message']}
                    severity={alertObjRef?.current?.['severity']}
                    reference={alertRefState || null}
                />

                {(okSignal === 1) && emailPanel === false &&
                    <IndicationIcon indications={indicationState}/>
                }
            </SelectionDateWrapper>
            {okSignal === 1 &&
                <EmailPanel
                    ref={emailPanelRef}
                    rangeSelected={rangeSelectedRef?.current}
                    closePanel={() => { setOkSignal(0); }}
                />
            }
        </>
    )
}
export default CalendarSection;