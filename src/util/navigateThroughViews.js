import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import React from "react";

// scroll to an element
export const scrollTo = (id) => {
    try {
        const element = document.getElementById(id);

        element.scrollIntoView(
            { behavior: 'smooth' }
        )
    }
    catch (error) {
        console.log(error)
    }
}

export const scrollToRef = (ref) => {
    try {
        window.scrollTo(0, ref.current.offsetTop)  
    }
    catch (error) {
        console.log(error)
    }
}

// export const ScrollToTop = (props) => {
//     const location = useLocation();
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [location]);
  
//     return <>{props.children}</>
//   };