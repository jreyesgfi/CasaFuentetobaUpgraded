import React, { useEffect, useRef, useState } from "react";
import GlobalStyles, { WaitingContainer } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './globalFonts.css';

//  Pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Info from "./pages/Info";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ScrollToTop } from "./util/navigateThroughViews";
import IndicationIcon from "./components/IndicationIcon/IndicationIcon";


function App() {


  // detect when the page is loaded
  const [loading,setLoading]=useState(0)
  useEffect(()=>{
    console.log('mounted');
    setLoading(0);
  },[])

  // // the icon to indicate the actions
  // const [indicationIconState, setIndicationIconState] = useState();
  // const indicationIconRef = useRef(
  //   {show: 0}
  // );
  // const handleIndicationIconState = (newState,newValues)=>{
  //   setIndicationIconState(newState);
  //   indicationIconRef.current = {
  //     ...newValues
  //   }
  // }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <WaitingContainer >
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/galeria' element={<Gallery/>} />
            <Route path='/info' element={<Info/>} />
            <Route path='/reserva' element={<Booking/>} />
            <Route path='/contacto' element={<Contact/>} />
          </Routes>
        </ScrollToTop>
      </WaitingContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
