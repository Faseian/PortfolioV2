import { Button, Box, Collapse, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router'
import Card from '../components/Card/Card'
import experience from '../constants/Experience'
import projects from '../constants/Projects'
import { useState } from 'react'

export default function Homepage() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleClick = () => setIsCollapsed(!isCollapsed)

  const Image = ({
    width,
    height,
    src,
    alt,
    handleClick,
    styles
  }) => {
    return (
      <Box
        component={Paper}
        justifyContent='center'
        width={width}
        height={height}
        borderRadius={3}
        overflow='hidden'
        onClick={handleClick}
        {...styles}
      >
        <img
          src={src}
          alt={alt}
          width='100%'
          height='100%'
        />
      </Box>
    )
  }

  return (
    <Container sx={{ justifyContent: 'center' }}>
      <Grid container
        size={12}
        justifyContent='center'
        direction={'column'}
      >
        <Grid
          container
          justifyContent='center'
          direction='column'
        >
          <Card>
            <Typography
              variant='h3'
              textAlign='center'
            >
              Nathan Bankert, Software Engineer, UMBC 2026
            </Typography>
          </Card>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <ReactCardFlip isFlipped={isCollapsed} flipDirection='horizontal'>
              <Image
                src='/assets/placeholder.png'
                alt='self'
                height={{ xs: '200px', md: '600px'}}
                width='100%'
                handleClick={handleClick}
              />
              <Card
                style={{
                  height: '600px',
                  width: '100%',
                }}
              >
                <Box height='600px' width='100%'>
                  <Stack
                    width='100%'
                  >
                    <Typography>
                      About me
                    </Typography>
                    <Button onClick={handleClick}>Button</Button>
                  </Stack>
                </Box>
              </Card>
            </ReactCardFlip>
          </Stack>
        </Grid>
        <Grid>
          <Card>
            <Typography>
              Hello
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
    )
}