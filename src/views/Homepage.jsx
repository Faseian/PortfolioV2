import { Box, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material'
import Card from '../components/Card/Card'
import experience from '../constants/Experience'

export default function Homepage() {
  const JobDiv = ({ job }) => {
    return (
      <Stack
        border={3}
        borderRadius={2}
        spacing={1}
        p={2}
      >
        <Typography variant='h6'>
          {job.title}
        </Typography>
        <Typography>
          {job.company}
        </Typography>
        <Typography>
          {job.years.startDate} - {job.years.endDate}
        </Typography>
        <Typography>
            Skills:
        </Typography>
        {job.skills.map((skill) =>
          <Typography>{skill}</Typography>
        )}
      </Stack>
    )
  }

  return (
    <Container sx={{ justifyContent: 'center' }}>
        <Grid container
          size={12}
          justifyContent='center'
        >
          <Grid size={12}>
            <Typography
              variant='h3'
              textAlign='center'
              justifySelf='center'
              component={Paper}
              p={2}
              borderRadius={2}
              width='600px'
              m={4}
            >
              Nathan Bankert
            </Typography>
          </Grid>
          <Grid size={8}>
            <Card>
              <Typography variant='h5'>
                Projects:
              </Typography>
            </Card>
          </Grid>
          <Grid
            size={4}
          >
            <Card>
              <Typography variant='h5'>
                About me
              </Typography>
              <Typography>
                Hello I am a Full-Stack Developer currently enrolled at UMBC. I am currently
                working towards my Bachelors degree in computer science.
              </Typography>
            </Card>
          </Grid>
          <Grid size={12}>
            <Card>
              <Typography variant='h5'>
                Experience
              </Typography>
              <Box border={3} borderRadius={5} my={2} width='200px'/>
              <Grid container size={12}>
                {experience.map((job) =>
                  <Grid size={3}>
                    <JobDiv key={job.title} job={job}/>
                  </Grid>
                )}
              </Grid>
            </Card>
          </Grid>
        </Grid>
    </Container>
    )
}