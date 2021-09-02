import '../styles/globals.css'//we share the css amongst all pages

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
