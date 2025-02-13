import { Button, Box, Collapse, Container, Grid2 as Grid, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router'
import Card from '../components/Card/Card'
import experience from '../constants/Experience'
import projects from '../constants/Projects'
import { useState } from 'react'

export default function Homepage() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => setIsFlipped(!isFlipped)

  const Image = ({
    width,
    height,
    src,
    alt,
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
        {...styles}
      >
        <img
          src={src}
          alt={alt}
          width='100%'
        />
      </Box>
    )
  }

  const CollapsableCard = ({ title, list }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    return (
      <Card
        handleClick={handleOpen}
      >
        <Typography variant='h5'>{title}</Typography>
        <Collapse in={open}>
          <Box p={2}>
            {list ?
              list.map((listItem) =>
                <Stack>
                  <Typography variant='h6'>{listItem.title}:</Typography>
                  <ListItem>
                    <Typography>{listItem?.description}</Typography>
                  </ListItem>
                </Stack>
              )
            : null}
          </Box>
        </Collapse>
      </Card>
    )
  }

  return (
    <Container sx={{ justifyContent: 'center' }}>
      <Stack spacing={3}>
        <Grid container
          size={12}
          justifyContent='center'
        >
          <Grid>
            <Card>
              <Typography
                variant='h3'
                textAlign='center'
              >
                Nathan Bankert, Software Engineer, UMBC 2026
              </Typography>
            </Card>
          </Grid>
          <Grid size={8}>
            <Stack
              direction='row'
              justifyContent='center'
            >
              <Box
                width='100%'
                justifyContent='center'
                onClick={handleFlip}
              >
                <ReactCardFlip
                  isFlipped={isFlipped}
                  flipDirection='horizontal'
                  containerStyle={{
                    height: 400,
                  }}
                  infinite={true}
                >
                  <Image
                    src='/assets/bixby-bridge.jpg'
                    alt='self'
                    height='400px'
                    styles={{ m: 2 }}
                  />
                  <Card
                    style={{
                      height: '395px',
                    }}
                  >
                    <Box height='100%' width='100%'>
                      <Typography variant='h5'>
                        About me
                      </Typography>
                    </Box>
                  </Card>
                </ReactCardFlip>
              </Box>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Card >
              <Typography variant='h5'>Hello! My name is Nathan Bankert and I am a software engineer</Typography>
            </Card>
          </Grid>
          <Grid size={6}>
            <CollapsableCard
              title='Experience'
              list={experience}
            />
            <CollapsableCard
              title='Projects'
              list={projects}
            />
          </Grid>
          <Grid size={6}>

          </Grid>
        </Grid>
      </Stack>
    </Container>
    )
}