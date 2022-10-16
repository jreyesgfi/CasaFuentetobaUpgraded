import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
          <link rel="icon" href="../logo192.png" />
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

          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
          <title>La Casa de Fuentetoba, Soria</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}