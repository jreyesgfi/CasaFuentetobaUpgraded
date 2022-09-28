import { IconContext } from 'react-icons/lib/esm/iconContext';
import { useEffect, useRef, useState } from 'react';
import { AlertWrapper } from './CustomAlertStyle';
import {MdDone}  from "react-icons/md";
import {MdInfo}  from "react-icons/md";
import {MdError}  from "react-icons/md";
import { globalColors } from '../../globalStyles';
import React from 'react';


const CustomAlert = (props) => {

    /**
    * Alert config
    */

    const [alertDisplayLocal, setAlertDisplayLocal] = useState(true);
    const alertDisplay = props?.display || false;
    const alertMessage = props?.message || '';
    const alertSeverity = props?.severity || 'info';
    const alertRef = useRef();
    alertRef.current = props?.reference || 0;

    const [fadingState, setFadingState] = useState(false)

    /**
    * init the timer
    */
    async function initTheTimer(time = 6000) {

        // track this alert
        const id = alertRef.current;

        //define a function to wait 
        await new Promise(() => {
            setTimeout(() => {
                // check if the current alert is the one seted
                if (alertRef.current === id) {

                    // start the fading out
                    setFadingState(true);
                }
            }, time);

            setTimeout(() => {
                // check if the current alert is the one seted
                if (alertRef.current === id) {
                    // make it dessapear
                    setAlertDisplayLocal(false);
                }
            }, 2000 + time);
        });
        return
    }

    /***
     * Each time the alert change
     */
    function resetAlert() {
        setAlertDisplayLocal(true);
        setFadingState(false)
        initTheTimer();
    }

    useEffect(
        () => {
            resetAlert();
        }
        , [alertRef.current])


    /**
     * display it
     */
    if (!alertDisplay === true || !alertDisplayLocal === true) {
        return null;
    }

    /**
     * animation
     */
    const initial = {opacity:1}
    const animate = {opacity:0}

    /**
     * choose the appropriate icon
     */
    const iconChosen = () =>{
        switch (alertSeverity){
            case 'success': return(
                <MdDone/>
            )
            case 'info': return(
                <MdInfo/>
            )
            case 'error':return(
                <MdError/>
            )
        }
    }

    return (
        <AlertWrapper
            severity={`${alertSeverity}`}
            animate={fadingState===true?animate:{}}
            transition-duration="2s"
            onClose={() => { setAlertDisplayLocal(false); alertRef.current = 0; }}>
            {alertMessage}
            <IconContext.Provider value={{ size: '4rem', color: `${globalColors.dark.primary}`}}>
                {iconChosen()}
            </IconContext.Provider>
        </AlertWrapper>
    )
}

export default CustomAlert;