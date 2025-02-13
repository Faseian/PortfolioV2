import { createRoot } from 'react-dom/client'
import theme from './assets/theme.js'
import Homepage from './views/Homepage.jsx'
import { Box, ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router'
import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
     
        <Routes>
          <Route path='/'>
            <Route index element={<Homepage/>}/>
          </Route>
        </Routes>
    </ThemeProvider>
  </BrowserRouter>,
)
