'use client'

import { Box, Typography, Grid } from '@mui/material'
import ArticleCard from './ArticleCard'
import Loading from '@/components/elements/Loading/Loading'
import { useArticles } from '@/hooks/useArticles'

function ArticleSection() {
  const { articles, isLoading } = useArticles()

  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <Grid
        container
        sx={{
          borderBottom: 'solid 1px #868E96',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Grid item sx={{ marginY: 'auto' }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              marginLeft: '5rem',
            }}
          >
            Articles
          </Typography>
        </Grid>
        <Grid item sx={{ marginY: 'auto' }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              marginLeft: '5rem',
              color: '#868E96',
            }}
            fontSize={{ md: '1.4rem', lg: '1.5rem' }}
          >
            Yumax-pandaが書いた記事
          </Typography>
        </Grid>
      </Grid>
      <Loading isLoading={isLoading}>
        <Grid
          container
          sx={{
            display: 'flex',
            padding: '1rem',
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {articles.map((article, index) => (
            <Grid item xs={4} key={index}>
              <ArticleCard
                title={article.title}
                imageUrl={article.imageUrl}
                provider={article.provider}
              />
            </Grid>
          ))}
        </Grid>
      </Loading>
    </Box>
  )
}

export default ArticleSection
