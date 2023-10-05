'use client'

import { Box, Typography, Grid } from '@mui/material'
import ArticleCard from './ArticleCard'
import { useArticles } from '@/hooks/useArticles'

function ArticleSection() {
  const { articles } = useArticles()

  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '2rem',
          marginBottom: '1rem',
          marginLeft: '5rem',
          borderBottom: 'solid 1px #868E96',
          paddingLeft: '1rem',
        }}
      >
        Articles
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          marginLeft: '5rem',
          paddingLeft: '1rem',
          color: '#868E96',
        }}
      >
        Yumax-pandaが執筆した記事たち
      </Typography>
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
              url={article.url}
              provider={article.provider}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ArticleSection
