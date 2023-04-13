
import { BrowserRouter  } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './Global/global'
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './Global/globalThemes'



function App() {
 
  return (
    <>
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
         <Router />
      </BrowserRouter>
      <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
