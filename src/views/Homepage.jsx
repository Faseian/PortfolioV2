import { Container, Grid2 as Grid, Paper, Typography } from '@mui/material'
import Card from '../components/Card/Card'
import experience from '../constants/Experience'
import projects from '../constants/Projects'

export default function Homepage() {
  const JobDiv = ({ job }) => {
    const {
      title,
      company,
      years,
      skills
    } = job
    const skillLength = job?.skills?.length - 1
    return (
      <Card>
        <Typography variant='h6' textAlign='center'>
          {title}
        </Typography>
        <Typography>
          {company}
        </Typography>
        <Typography>
          {years?.startDate} - {years?.endDate}
        </Typography>
        <Typography>
            Skills:
        </Typography>
        <Typography>
          {skills.map((skill, index) => {
            if (index === skillLength) {
              return skill
            } else {
              return skill + ', '
            }
        })}
        </Typography>
      </Card>
    )
  }

  const ProjectDiv = ({ project }) => {
    const {
      title,
      languages
    } = project
    return (
      <Card
        style={{ component: Link }}
      >
        <Typography>
          {title}
        </Typography>
        <Typography>
          Language(s): {languages.map(lang => lang)}
        </Typography>
      </Card>
    )
  }

  return (
    <Container sx={{ justifyContent: 'center' }}>
        <Grid container
          size={12}
          justifyContent='center'
          direction='column'
        >
          <Grid size={12}>
            <Typography
              variant='h3'
              textAlign='center'
              justifySelf='center'
              component={Paper}
              p={2}
              borderRadius={2}
              width={{ xs: '100%', md: '600px'}}
              m={4}
            >
              Nathan Bankert
            </Typography>
          </Grid>
          <Grid container>
            <Grid size={{ xs: 12, md: 8}}>
              <Card>
                <Typography variant='h5'>
                  Projects:
                </Typography>
                {projects.map((project) =>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <ProjectDiv project={project}/>
                  </Grid>
                )}
              </Card>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4}}
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
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant='h5'
                textAlign='center'
                justifySelf='center'
                component={Paper}
                p={2}
                borderRadius={2}
                width={{ xs: '100%', md: '600px'}}
                m={4}
              >
                Experience
              </Typography>
              <Grid
                container
                size={12}
                justifyContent='space-evenly'
              >
                {experience.map((job) =>
                  <Grid size={{ xs: 12, md: 3}}>
                    <JobDiv key={job.title} job={job}/>
                  </Grid>
                )}
              </Grid>
          </Grid>
        </Grid>
    </Container>
    )
}