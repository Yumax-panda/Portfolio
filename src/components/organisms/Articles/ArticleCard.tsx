import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useArticleCard } from '@/hooks/useArticleCard'

type Props = {
  title: string
  url: string
  provider: 'Qiita' | 'Zenn'
}

function ArticleCard(props: Props) {
  const { isLoading, imageUrl, fetchImageUrl } = useArticleCard()

  useEffect(() => {
    fetchImageUrl(props.url)
  }, [])

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem auto',
        width: '15rem',
      }}
    >
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
        <Link href={props.url} style={{ textDecoration: 'none' }}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {isLoading ? (
              <p>loading...</p>
            ) : (
              <CardMedia
                component='img'
                src={imageUrl}
                alt={props.title}
                style={{
                  margin: 'auto 0',
                  objectFit: 'cover',
                }}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
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
              {props.title}
            </Typography>
          </Grid>
        </Link>
      </Box>
    </Paper>
  )
}

export default ArticleCard
