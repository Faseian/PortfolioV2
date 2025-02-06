import { Container, Typography } from '@mui/material'
import { Link } from 'react-router'
import Card from '../components/Card/Card'
import { useState } from 'react'

export default function Homepage() {
  const [fade, setFade] = useState(true)
  const handleClick = () => {
    setFade(false)
  }

  return (
    <Container>
      <Card style={{ width: '50%', justifySelf: 'center' }}>
        <Typography
        component={Link}
        variant='h4'
        sx={{ textDecoration: 'none' }}
        to='projects'
        >
        Projects
        </Typography>
      </Card>
    </Container>
  )
}