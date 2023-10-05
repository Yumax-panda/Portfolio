'use client'

import { Box, Typography, Grid } from '@mui/material'
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
