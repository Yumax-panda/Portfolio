'use client'

import { Box, Grid } from '@mui/material'
import SectionHeader from '../Section/SectionHeader'
import WorkCard from './WorkCard'
import WorkModal from './WorkModal'
import { useWorks } from '@/hooks/useWorks'

function WorkSection() {
  // TODO: implement filtering
  const { works, currentWork, open, handleOpen, handleClose } = useWorks()

  return (
    <div>
      <Box
        sx={{
          marginTop: '4rem',
        }}
      >
        <SectionHeader title='Works' brief='制作物' />
        <Grid
          container
          sx={{
            display: 'flex',
            padding: '1rem',
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {works.map((work, index) => (
            <Grid
              item
              xs={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <WorkCard onClick={handleOpen(work)} work={work} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {currentWork && (
        <WorkModal open={open} work={currentWork} onClose={handleClose} />
      )}
    </div>
  )
}

export default WorkSection
