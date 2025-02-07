import { createRoot } from 'react-dom/client'
import theme from './assets/theme.js'
import Homepage from './views/Homepage.jsx'
import { Box, ThemeProvider } from '@mui/material'
import { RouterProvider, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')).render(
  <RouterProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Routes >
          <Route index path='/' element={<Homepage/>}>
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  </RouterProvider>,
)
