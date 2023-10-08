import Box from '@mui/material/Box'
import LevelBrief from '@/components/elements/Level/LevelBrief'

function SkillLevelBrief() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginX: 'auto',
      }}
    >
      <LevelBrief level={0} brief='触ったことがある' />
      <LevelBrief level={1} brief='チュートリアルに取り組んだ' />
      <LevelBrief level={2} brief='主要な機能は使える' />
      <LevelBrief level={3} brief='使いこなせる' />
    </Box>
  )
}

export default SkillLevelBrief
