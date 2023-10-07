import { Typography } from '@mui/material'

type Props = {
  title: string
}

function SectionTitle({ title }: Props) {
  return (
    <Typography
      sx={{ fontWeight: 'bold' }}
      fontSize={{ xs: '1.6rem', md: '2rem' }}
    >
      {title}
    </Typography>
  )
}

export default SectionTitle
