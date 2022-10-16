import styled, { css } from "styled-components";
import { globalColors } from "../../globalStyles";

const changeTheLabel = css`
    transition:0.1s ease;
    font-size:10pt;
    font-family: primary-bold, sans-serif;
    color:${globalColors.green.primary};
    transform: translate(0.3rem,-0.75rem);
    z-index:50;
    margin:0;
    height: fit-content;
    width:fit-content;
    background-color: ${globalColors.dark.primary};
    padding:3px 10px;
`;

const inputCSS = css`
    position:absolute;
    inset:0;
    outline:none;
    font-size: min(15pt,2.5vw);
    width:100%;
    height:100%;
    padding-left:1rem;
    user-select: text;
    border-radius: 4pt;
    border:2px solid ${globalColors.grey.light};
    background-color: ${globalColors.transparent.full};
    color:${globalColors.light.primary};
    z-index:30;
`


export const FormLabelDesign = styled.label`
    position:absolute;
    inset:0;
    width:100%;
    height:fit-content;
    margin:auto;
    border-radius: 4pt;
    padding-left:1rem;
    background-color: ${globalColors.transparent.full};
    color:${globalColors.light.primary};
`;

export const FormInputDesign = styled.input`
    ${inputCSS}
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`;

export const FormInputWrapper = styled.div`
    position:relative;
    width:min(50%, 300px);
    min-height:min(36pt,6vw);
    height:fit-content;
    margin:0.5rem 0;
    @media screen and (max-width: 600px) {
        width:max(70%, 200px);
    }
    /*when you were writting*/
    &:hover, &:focus-within {
        ${FormInputDesign}{
            border-color:${globalColors.green.primary};
        }
        ${FormLabelDesign}{
            ${changeTheLabel};
        }
    }
    /* when you have wrote*/
    ${FormLabelDesign}{
        ${({filled}) => (filled) && changeTheLabel};
    }
    ${FormInputDesign}{
        border-color:${({filled}) => (filled && globalColors.green.primary)};
    }
`;

export const FormTextArea = styled.textarea`
    ${inputCSS}
    min-height: 5rem;
    max-width:max(70vw, 150px);
    position: relative;
    padding-top: 0.5rem;
`;