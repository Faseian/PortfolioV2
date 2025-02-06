import { Button, Container, Fade, Paper, Stack, Typography } from "@mui/material"
import { Link } from "react-router"
import { useState } from "react"
export default function ProjectsView() {
  const [fade, setFade] = useState(true)

  return (
    <Container>
      <Fade in={fade} timeout={500}>
        <Stack
          component={Paper}
          borderRadius={3}
          justifyContent='center'
          textAlign='center'
          m={2}
          p={2}
        >
          <Typography>Hello</Typography>
          <Button component={Link} to='/'>Home</Button>
        </Stack>
      </Fade>
    </Container>
  )
}