'use client'

import { Box, Typography, Grid } from '@mui/material'
import WorkCard from './WorkCard'
import { useWorks } from '@/hooks/useWorks'

function WorkSection() {
  // TODO: implement filtering
  const { works } = useWorks()

  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '2rem',
          marginBottom: '1rem',
          marginLeft: '5rem',
          borderBottom: 'solid 1px #868E96',
          paddingLeft: '1rem',
        }}
      >
        Works
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          marginLeft: '5rem',
          paddingLeft: '1rem',
          color: '#868E96',
        }}
      >
        Yumax-pandaの制作物
      </Typography>
      <Grid
        container
        sx={{
          display: 'flex',
          padding: '1rem',
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {works.map((work, index) => (
          <Grid item xs={4} key={index}>
            <WorkCard onClick={() => {}} work={work} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default WorkSection
