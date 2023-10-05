import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  children: React.ReactNode
}

function Section({ title, children }: Props) {
  return (
    <Stack
      sx={{
        marginTop: '1rem',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          borderBottom: 'solid 1px #868E96',
          paddingLeft: '1rem',
        }}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  )
}

export default Section
