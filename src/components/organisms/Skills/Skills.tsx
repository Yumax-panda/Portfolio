'use client'

import { Box, Grid } from '@mui/material'
import SectionHeader from '../Section/SectionHeader'
import SkillCard from './SkillCard'
import { useSkills } from '@/hooks/useSkills'

function SkillSection() {
  // TODO: implement filtering, sorting function
  const { skills } = useSkills()

  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <SectionHeader title='Skills' brief='使える技術' />
      <Grid
        container
        sx={{
          display: 'flex',
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {skills.map((skill) => (
          <Grid item xs={4} key={skill.name}>
            <SkillCard {...skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SkillSection
