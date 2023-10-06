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
        <Grid
          container
          sx={{
            borderBottom: 'solid 1px #868E96',
            marginBottom: '1rem',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Grid item sx={{ marginY: 'auto' }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                marginLeft: '5rem',
              }}
            >
              Works
            </Typography>
          </Grid>
          <Grid item sx={{ marginY: 'auto' }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                marginLeft: '5rem',
                color: '#868E96',
              }}
            >
              Yumax-pandaの制作物
            </Typography>
          </Grid>
        </Grid>
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
