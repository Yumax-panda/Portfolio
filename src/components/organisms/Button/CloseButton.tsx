import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
  onClick: () => void
}

function CloseButton({ onClick }: Props) {
  return (
    <Button onClick={onClick} variant='outlined' color='inherit'>
      <Typography sx={{ fontWeight: 'bold' }}>Close</Typography>
    </Button>
  )
}

export default CloseButton
