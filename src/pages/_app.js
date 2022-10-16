import React, { useEffect, useState } from "react";
//import './globalFonts.css';
import {GlobalStyles} from "./../globalstyles";
import Navbar from "../components/Navbar/Navbar";
import { Head } from "next/document";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";

function App({Component, pageProps, router}) {
  const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);

    if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
  return (
  
    <div>
        <Navbar />
        <GlobalStyles/>
        <AnimatedPage router={router}>
          <Component {...pageProps} />
        </AnimatedPage>
    </div>
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