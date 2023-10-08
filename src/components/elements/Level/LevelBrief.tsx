import Box from '@mui/material/Box'
import Typograph from '@mui/material/Typography'
import { displayLevel } from '@/components/elements/Level/Level'
import type { Level } from '@/constants/skills'

export type Props = {
  level: Level
  brief: string
}

function LevelBrief({ level, brief }: Props) {
  return (
    <Box
      key={brief}
      sx={{
        marginRight: 0,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {displayLevel(level)}
      <Typograph
        sx={{
          marginY: 'auto',
          marginLeft: '0.5rem',
        }}
        fontSize={{ xs: '0.8rem', sm: '1rem' }}
      >
        {brief}
      </Typograph>
    </Box>
  )
}

export default LevelBrief
