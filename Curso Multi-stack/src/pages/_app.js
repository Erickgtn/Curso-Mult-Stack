import '../ui/styles/globals.css'

import {ThemeProvider} from '@mui/material'
import tema from '../ui/themes/tema';

function MyApp({ Component, pageProps }) {
  
  return <ThemeProvider theme={tema}>
            <Component {...pageProps} />
         </ThemeProvider>
}

export default MyApp
