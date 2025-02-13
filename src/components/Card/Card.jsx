import { Box, Paper } from '@mui/material'
import { Link } from 'react-router'
 
export default function Card({ link, handleClick, children, style }) {
  return (
    <Box
      component={Paper}
      borderRadius={3}
      m={2}
      p={2}
      onClick={handleClick}
      {...style}
    >
      <Box
        component={Link}
        sx={{ textDecoration: 'none' }}
        color='black'
        to={link}
      >
        {children}
      </Box>
    </Box>
  )
}