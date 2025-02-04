import { createRoot } from 'react-dom/client'
import theme from './assets/theme.js'
import Homepage from './views/Homepage.jsx'
import { Box, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <Homepage/>
    </Box>
  </ThemeProvider>,
)
