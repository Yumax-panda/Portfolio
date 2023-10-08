import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
  onClick: () => void
}

function ViewMoreButton({ onClick }: Props) {
  return (
    <Button onClick={onClick} variant='outlined' color='primary'>
      <Typography sx={{ fontWeight: 'bold' }}>View More</Typography>
    </Button>
  )
}

export default ViewMoreButton
