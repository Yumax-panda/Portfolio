import { Typography } from '@mui/material'

type Props = {
  brief: string
}

function SectionBrief({ brief }: Props) {
  return (
    <Typography
      sx={{
        fontWeight: 'bold',
        color: '#868E96',
        whiteSpace: 'nowrap',
      }}
      fontSize={{ xs: '1.1rem', md: '1.5rem' }}
    >
      {brief}
    </Typography>
  )
}

export default SectionBrief
