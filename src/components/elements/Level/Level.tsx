import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Box from '@mui/material/Box'
import type { Level } from '@/constants/skills'

type Props = {
  level: Level
}

function LevelField({ level }: Props) {
  const positiveColor = '#FFD700'
  const negativeColor = '#868E96'

  return (
    <Box
      sx={{
        marginY: '0.5rem',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            marginRight: '0.5rem',
          }}
        >
          {index < level ? (
            <StarIcon sx={{ color: positiveColor }} />
          ) : (
            <StarBorderIcon sx={{ color: negativeColor }} />
          )}
        </Box>
      ))}
    </Box>
  )
}

const Zero = <LevelField level={0} />
const First = <LevelField level={1} />
const Second = <LevelField level={2} />
const Third = <LevelField level={3} />

export const displayLevel = (level: Level) => {
  switch (level) {
    case 0:
      return Zero
    case 1:
      return First
    case 2:
      return Second
    case 3:
      return Third
  }
}
