import { createRoot } from 'react-dom/client'
import theme from './assets/theme.js'
import Header from './components/Header/Header.jsx'
import Homepage from './views/Homepage.jsx'
import ProjectsView from './views/ProjectsView.jsx'
import { Box, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Header/>
        <Routes>
          <Route path='/'>
            <Route index element={<Homepage/>}/>
            <Route path='projects' element={<ProjectsView/>}/>
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  </BrowserRouter>,
)
