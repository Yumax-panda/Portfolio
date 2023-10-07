import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import Link from 'next/link'
import Panel from '@/components/elements/Panel/Panel'

type FooterProps = {
  likes_count: number
  created_at: string
}

function CardFooter({ likes_count, created_at }: FooterProps) {
  const formattedDate = dayjs(created_at).format('YYYY/MM/DD')

  return (
    <Box
      sx={{
        color: '#868E96',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingX: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <FavoriteIcon />
        <Typography>{likes_count}</Typography>
      </Box>
      <Box>
        <Typography>{formattedDate}</Typography>
      </Box>
    </Box>
  )
}

type Props = {
  title: string
  url: string
  imageUrl: string
  likes_count: number
  created_at: string
}

function ArticleCard({ title, url, imageUrl, likes_count, created_at }: Props) {
  return (
    <Panel>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        <Link href={url} style={{ textDecoration: 'none' }}>
          <Box>
            <CardMedia
              component='img'
              src={imageUrl}
              alt={title}
              style={{
                margin: 'auto 0',
                objectFit: 'cover',
                borderRadius: '0.5rem 0.5rem 0 0',
              }}
            />
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              padding: '1rem',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                marginLeft: '0.5rem',
                paddingLeft: '0.5rem',
                color: '#868E96',
              }}
            >
              {title}
            </Typography>
          </Box>
          <CardFooter likes_count={likes_count} created_at={created_at} />
        </Link>
      </Box>
    </Panel>
  )
}

export default ArticleCard
