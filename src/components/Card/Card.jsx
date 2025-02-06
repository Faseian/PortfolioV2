import { Stack, Paper } from '@mui/material'

export default function Card({ children, style }) {
  return (
    <Stack
      component={Paper}
      borderRadius={3}
      justifyContent='center'
      textAlign='center'
      m={2}
      p={2}
    >
      {children}
    </Stack>
  )
}