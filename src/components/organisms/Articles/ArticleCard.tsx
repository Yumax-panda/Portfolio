import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import { useEffect } from 'react'
import { useArticleCard } from '@/hooks/useArticleCard'

type Props = {
  title: string
  url: string
  provider: 'Qiita' | 'Zenn'
}

function ArticleCard(props: Props) {
  const { isLoading, setIsLoading, imageUrl, setImageUrl, fetchImageUrl } =
    useArticleCard()

  useEffect(() => {
    fetchImageUrl(props.url)
  }, [])

  const HIGHT = 150
  const RATIO = 1200 / 630

  return (
    // 画像の幅に合わせる。横に余白を入れない
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        padding: '0',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0',
          padding: '0',
        }}
      >
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
            <Image
              src={imageUrl}
              alt={props.title}
              width={HIGHT * RATIO}
              height={HIGHT}
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
          {props.title}
        </Grid>
      </Stack>
    </Paper>
  )
}

export default ArticleCard
