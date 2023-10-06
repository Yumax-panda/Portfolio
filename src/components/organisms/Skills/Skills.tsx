'use client'

import { Box, Typography, Grid } from '@mui/material'
import SkillCard from './SkillCard'
import { useSkills } from '@/hooks/useSkills'

function SkillSection() {
  // TODO: implement filtering
  const { skills } = useSkills()

  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <Box
        sx={{
          borderBottom: 'solid 1px #868E96',
          marginBottom: '1rem',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginLeft: '5rem',
          }}
        >
          Skills
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          display: 'flex',
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={4} key={index}>
            <SkillCard {...skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SkillSection
