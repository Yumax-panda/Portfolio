import { CircularProgress, Container } from '@mui/material'

type Props = {
  isLoading: boolean
  children: React.ReactNode
}

function Loading({ isLoading, children }: Props) {
  return isLoading ? (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '50vh',
      }}
    >
      <CircularProgress sx={{ marginY: 'auto' }} />
    </Container>
  ) : (
    <>{children}</>
  )
}

export default Loading
