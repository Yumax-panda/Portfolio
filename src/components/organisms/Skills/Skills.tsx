'use client'

import { Box, Grid } from '@mui/material'
import CloseAllButton from '../Button/CloseAllButton'
import ViewMoreButton from '../Button/ViewMoreButton'
import SectionHeader from '../Section/SectionHeader'
import SkillCard from './SkillCard'
import SkillLevelBrief from './SkillLevelBrief'
import SkillTransition from './SkillTransition'
import { useSkills } from '@/hooks/useSkills'

function SkillSection() {
  // TODO: implement filtering, sorting function
  const { skills, more, displayMore, getDelay, closeAll } = useSkills()

  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <SectionHeader title='Skills' brief='使える技術' />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginBottom: '2rem',
        }}
      >
        <SkillLevelBrief />
      </Box>
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
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CloseAllButton onClick={closeAll} />
        </Box>
      )}
    </Box>
  )
}

export default SkillSection
