import styled, { css } from "styled-components";
import { globalColors } from "../../globalStyles";

const changeTheLabel = css`
    transition:0.1s ease;
    font-size:0.5rem;
    font-family: primary-bold, sans-serif;
    color:${globalColors.blue.primary};
    transform: translate(0.3rem,-0.7rem);
    z-index:50;
    height: fit-content;
    width:fit-content;
    background-color: ${globalColors.dark.primary};
    padding:3px 10px;
`;

const inputCSS = css`
    position:absolute;
    inset:0;
    outline:none;
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
    height:100%;
    border-radius: 4pt;
    padding-left:1rem;
    padding-top:5px;
    background-color: ${globalColors.transparent.full};
    color:${globalColors.light.primary};
    ${({filled}) => (filled) && changeTheLabel};
`;

export const FormInputDesign = styled.input`
    ${inputCSS}
`;

export const FormInputWrapper = styled.div`
    position:relative;
    width:min(50%, 300px);
    height:${({longText})=>(longText? '6rem' : '2.2rem')};
    margin:0.5rem 0;
    @media screen and (max-width: 600px) {
        width:max(70%, 200px);
    }
    /*when you were writting*/
    &:hover, &:focus-within {
        ${FormLabelDesign}{
            ${changeTheLabel};
        }
    }
`;

export const FormTextArea = styled.textarea`
    ${inputCSS}
`;