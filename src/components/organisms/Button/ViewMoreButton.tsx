import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
  onClick: () => void
}

function ViewMoreButton({ onClick }: Props) {
  return (
    <Button onClick={onClick} variant='contained' color='primary'>
      <Typography sx={{ fontWeight: 'bold' }}>もっと見る</Typography>
    </Button>
  )
}

export default ViewMoreButton
