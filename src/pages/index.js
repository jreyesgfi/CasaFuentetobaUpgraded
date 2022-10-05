import Head from 'next/head'
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero/Hero';
import HomeImages from '../components/HomeImages/HomeImages';
import HomeInfo from '../components/HomeInfo/HomeInfo';
import IndicationIcon from '../components/IndicationIcon/IndicationIcon';
import { Section } from '../globalstyles';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

export default function Home() {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);

  //state of indication icon
  const [indicationState, setIndicationState] = useState([{ show: 0 }]);

  // phaseState
  const [phaseState, setPhaseState] = useState(0)

  // allow the indications 
  useEffect(() => {
    async function waitToIndicate() {
      await new Promise(() => {
        setTimeout(() => {
          setPhaseState(1);
        }, 3500);
      });
    }
    waitToIndicate();
    return
  }, [])

  // set the inView detector
  const { ref: topRef, inView: topInView } = useInView({ threshold: 0.2 });
  const { ref: bottomRefCopy, inView: bottomInView } = useInView({ threshold: 0.2 });
  const bottomRef = useRef();
  useEffect(() => bottomRefCopy(bottomRef.current), [bottomRef.current])

  // change if we are reaching other section
  useEffect(() => {
    if (phaseState === 0) {
      return
    }
    var indications = {
      show: 1,
      iconState: 0,
      handleClick: () => { bottomRef.current.scrollIntoView({ behavior: 'smooth' }) },
    }
    if (bottomInView) {
      indications['rotation'] = -90;
      indications.navigate = 1;
    }

    setIndicationState([indications]);
  }, [topInView, bottomInView, phaseState]);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="title" content="La Casa de Fuentetoba - Casa rural en Fuentetoba (Soria)" />
        <meta
          name="description"
          content="Casa de Fuentetoba es un adosado ubicado a 8 km de Soria. Inaugurado en 2022 con unas vistas espectaculares se puede disfrutar del paisaje natural de montaña con un encanto rústico y tradicional."
        />
        <meta name="referrer" content="always" />
        <meta name="keywords" content="casa rural, La Casa de Fuentetoba, Soria, Fuentetoba" />
        <meta name="sitedomain" content="http://lacasadefuentetoba.es" />
        <meta name="designer" content="Jorge Reyes Guerrero" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content=" 15days" />
        <meta name="googlebot" content="index, follow" />

        <link rel="alternate" hrefLang="es" href="http://lacasadefuentetoba.es" />
        <link rel="alternate" hrefLang="en" href="http://lacasadefuentetoba.es" />
        <link rel="alternate" hrefLang="ca" href="http://lacasadefuentetoba.es" />
        <link rel="alternate" hrefLang="pt" href="http://lacasadefuentetoba.es" />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>La Casa de Fuentetoba, Soria</title>
      </Head>
      <AnimatedPage>
        <Section position="relative" padding="0px 0px" smPadding="0px 0px" ref={topRef}>
          <HomeImages />
          <Hero />
        </Section>
        <HomeInfo position="relative" inverse ref={bottomRef} />
        <IndicationIcon indications={indicationState} />
        {/* <Map></Map> */}
      </AnimatedPage>
    </div>
  )
}
