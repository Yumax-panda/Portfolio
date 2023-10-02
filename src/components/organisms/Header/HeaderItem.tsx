import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

type Props = {
  title: string
  href: string
}

function HeaderItem({ title, href }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '1rem',
      }}
    >
      <Typography variant='h6' component='div'>
        <Link
          href={href}
          style={{
            textDecoration: 'none',
            color: '#EAF9FA',
          }}
        >
          {title}
        </Link>
      </Typography>
    </Box>
  )
}

export default HeaderItem
