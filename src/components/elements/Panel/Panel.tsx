import { Paper } from '@mui/material'

type Props = {
  children: React.ReactNode
}

function Panel({ children }: Props) {
  return (
    <Paper
      sx={{
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0.5rem',
      }}
    >
      {children}
    </Paper>
  )
}

export default Panel
