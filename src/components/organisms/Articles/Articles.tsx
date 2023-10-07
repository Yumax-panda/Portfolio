'use client'

import { Box, Grid } from '@mui/material'
import SectionHeader from '../Section/SectionHeader'
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
      <SectionHeader title='Articles' brief='執筆記事' />
      <Loading isLoading={isLoading}>
        <Grid
          container
          sx={{
            display: 'flex',
            padding: '1rem',
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {articles.map((article) => (
            <Grid item xs={4} key={article.url}>
              <ArticleCard
                title={article.title}
                url={article.url}
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
