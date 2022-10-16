import { useState } from "react";
import { FormInputDesign, FormInputWrapper, FormLabelDesign, FormTextArea } from "./FormInputStyles"
import React from "react";

const FormInput = (props)=>{
    const [text, SetText] = useState(props?.originalValue);
    // handle phone change
    const handleChange = (event) => {
        var value = event?.target?.value;
        console.log(value)
        console.log(props?.phone)
        if (props?.phone === true){
            value = value.slice(0, 9)
        }
        console.log(value)
        SetText(value);
        //set the information to the form
        props?.['setValue'](value);
    }
    
    return(
       <FormInputWrapper longText={props?.longText} filled = {text?.[0]}>
            <FormLabelDesign>
                {props?.['label']||props?.['class']||'Escriba aquí'}
            </FormLabelDesign>
            {props?.longText===undefined && <FormInputDesign 
                type={props?.['type']||'text'}
                onChange={handleChange}
                value={text}
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
                value={text}
            />
            }  
       </FormInputWrapper> 
    )
}

export default FormInput;