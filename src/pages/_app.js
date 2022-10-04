import React, { useEffect, useState } from "react";
// import './globalFonts.css';
import {GlobalStyles} from "./../globalstyles";

function App({Component, pageProps}) {
  console.log(globalThis?.window)
  if (globalThis?.window === undefined){
    return (
    <>
    </>)
  }
  return (
  
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
    
  )
}

export default App;

  // // detect when the page is loaded
  // const [loading,setLoading]=useState(0)
  // useEffect(()=>{
  //   console.log('mounted');
  //   setLoading(0);
  // },[])

  // // // the icon to indicate the actions
  // // const [indicationIconState, setIndicationIconState] = useState();
  // // const indicationIconRef = useRef(
  // //   {show: 0}
  // // );
  // // const handleIndicationIconState = (newState,newValues)=>{
  // //   setIndicationIconState(newState);
  // //   indicationIconRef.current = {
  // //     ...newValues
  // //   }
  // // }

  // return (
  //   <BrowserRouter>
  //     <GlobalStyles />
  //     <Navbar />
  //     <WaitingContainer >
  //       <ScrollToTop>
  //         <Routes>
  //           <Route path='/' element={<Home/>} />
  //           <Route path='/galeria' element={<Gallery/>} />
  //           <Route path='/info' element={<Info/>} />
  //           <Route path='/reserva' element={<Booking/>} />
  //           <Route path='/contacto' element={<Contact/>} />
  //         </Routes>
  //       </ScrollToTop>
  //     </WaitingContainer>
  //     <Footer />
  //   </BrowserRouter>
  // )