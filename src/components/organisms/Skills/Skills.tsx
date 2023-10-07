'use client'

import { Box, Grid } from '@mui/material'
import ViewMoreButton from '../Button/ViewMoreButton'
import SectionHeader from '../Section/SectionHeader'
import SkillCard from './SkillCard'
import SkillTransition from './SkillTransition'
import { useSkills } from '@/hooks/useSkills'

function SkillSection() {
  // TODO: implement filtering, sorting function
  const { skills, more, displayMore, count, getDelay } = useSkills()

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
        {skills.map((skill, index) => (
          <Grid item xs={4} key={skill.name}>
            <SkillTransition delay={getDelay(index)} duration={0.5}>
              <SkillCard {...skill} />
            </SkillTransition>
          </Grid>
        ))}
      </Grid>
      {more ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ViewMoreButton onClick={displayMore} />
        </Box>
      ) : null}
    </Box>
  )
}

export default SkillSection
