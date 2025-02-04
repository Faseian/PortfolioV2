import { Box, Paper } from '@mui/material'

export default function Card({ children, style }) {
  return (
    <Box
      component={Paper}
      borderRadius={3}
      m={2}
      p={2}
      {...style}
    >
      {children}
    </Box>
  )
}