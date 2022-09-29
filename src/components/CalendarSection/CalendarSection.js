import { createRef, useEffect, useRef, useState } from "react";
import { Section } from "../../globalStyles";
import IDGenerator from "../../util/IdGenerator";
import Calendar from "../Calendar/Calendar"
import CustomAlert from "../CustomAlert/CustomAlert";
import EmailPanel from "../EmailPanel/EmailPanel";
import MonthSelector from "../MonthSelector/MonthSelector"
import React from "react";
import IndicationIcon from "../IndicationIcon/IndicationIcon";
import { SelectionDateWrapper, TotalPrice, TotalPriceWrapper } from "./CalendarSectionStyles";

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


    //state of indication icon
    const [indicationState, setIndicationState] = useState({ show: 0 });

    // change if we are reaching other section
    useEffect(() => {
        var indications = {
            show: 1,
            iconState: 0,
            handleClick: ()=>{emailPanelRef.current.scrollIntoView({ behavior: 'smooth'})},
            rotation: 0,
        }
        setIndicationState([indications]);
    }, []);

    return (
        <>
            <SelectionDateWrapper inverse smPadding="40px 0 0" position='relative'padding="0">
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