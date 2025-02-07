import { Box, Paper } from '@mui/material'
import { Link } from 'react-router'
 
export default function Card({ children, style }) {
  return (
    <Box
      component={Paper}
      borderRadius={3}
      m={2}
      p={2}
      {...style}
    >
      <Box
        component={Link}
        sx={{ textDecoration: 'none' }}
        color='black'
        to='/projectLink'
      >
        {children}
      </Box>
    </Box>
  )
}