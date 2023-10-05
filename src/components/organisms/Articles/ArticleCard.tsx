import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useEffect } from 'react'
import type { ArticleProvider } from '@/constants/article'
import { useArticleCard } from '@/hooks/useArticleCard'

type Props = {
  title: string
  url: string
  provider: ArticleProvider
}

function ArticleCard(props: Props) {
  const { isLoading, imageUrl, fetchImageUrl } = useArticleCard()

  useEffect(() => {
    fetchImageUrl(props.url)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
