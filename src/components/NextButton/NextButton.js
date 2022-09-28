// import { NextButtonStyle } from "./NextButtonStyles";
// import { useNavigate } from 'react-router-dom';
// import data from "../../data/NavbarData";
// import React from "react";

// const NextButton = (props)=>{

    
//     const navigate = useNavigate();
//     const newStep = (props?.step ||0) + 1;

//     const handleClick = () =>{
//         if (props?.handleClick){
//             props.handleClick()
//         }
//         else{
//             navigate(data[newStep].to)
//         }
//     }

//     return(
//         <NextButtonStyle onClick={handleClick}>
//             Siguiente
//         </NextButtonStyle>
//     )
// }

// export default NextButton;