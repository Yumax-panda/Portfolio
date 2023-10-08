import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
  onClick: () => void
}

function CloseAllButton({ onClick }: Props) {
  return (
    <Button onClick={onClick} variant='outlined' color='inherit'>
      <Typography sx={{ fontWeight: 'bold' }}>Close All</Typography>
    </Button>
  )
}

export default CloseAllButton
