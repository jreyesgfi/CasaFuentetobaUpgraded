import styled from "styled-components";
import { globalColors } from "../../globalStyles";
import { motion } from 'framer-motion';

const severityStyle = (severity)=>
    {
        switch (severity){
            case 'error':
                return globalColors.red.light
            case 'info':
                return globalColors.blue.light
            case 'success':
                return globalColors.green.light
        }
    }

export const AlertWrapper = styled(motion.div)`
    display:flex;
    flex-direction: row;
    justify-content: start;
    height:fit-content;
    width:43%;
    position:fixed;
    inset:120px 0 0 auto;
    z-index:200;
    background-color: ${({severity})=>severityStyle(severity)};
    padding:1rem 1.5rem;
    @media screen and (max-width: 600px) {
        width:70%;
    }
`;