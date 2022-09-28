import { useState } from "react";
import { FormInputDesign, FormInputWrapper, FormLabelDesign, FormTextArea } from "./FormInputStyles"
import React from "react";

const FormInput = (props)=>{
    const [text, SetText] = useState('');
    return(
       <FormInputWrapper longText={props?.longText}>
            <FormLabelDesign
                filled = {text?.[0]}
            >
                {props?.['label']||props?.['class']||'Escriba aquí'}
            </FormLabelDesign>
            {props?.longText===undefined && <FormInputDesign 
                type={props?.['type']||'text'}
                onChange={(event)=>{
                    const value = event?.target?.value;
                    SetText(value);
                    //set the information to the form
                    props?.['setValue'](value);
                }}
            />
            }
            {props?.longText && <FormTextArea
                type={props?.['type']||'text'}
                onChange={(event)=>{
                    const value = event?.target?.value;
                    SetText(value);
                    //set the information to the form
                    props?.['setValue'](value);
                }}
            />
            }  
       </FormInputWrapper> 
    )
}

export default FormInput;