import { ThemeProvider } from '../contexts/ThemeContext'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={pageProps.theme} checked={pageProps.checked}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
