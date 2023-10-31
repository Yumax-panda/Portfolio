import { Box, Grid } from '@mui/material'
import { parse } from 'node-html-parser'
import SectionHeader from '../Section/SectionHeader'
import ArticleCard from './ArticleCard'
import ArticleTransition from './ArticleTransition'
import { fetchPosts as fetchQiitaPosts } from '@/qiita'
import type { Post as QiitaPost } from '@/qiita/types'
import { fetchPosts as fetchZennPosts } from '@/zenn'
import type { Post as ZennPost } from '@/zenn/types'

type Article = (QiitaPost | ZennPost) & { imageUrl: string }

// TODO: implement sort function
async function ArticleSection() {
  const articles = await getArticles()

  return (
    <Box sx={{ marginTop: '4rem' }}>
      <SectionHeader title='Articles' brief='執筆記事' />
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
            <ArticleTransition>
              <ArticleCard
                title={article.title}
                url={article.url}
                imageUrl={article.imageUrl}
                likes_count={article.likes_count}
                created_at={article.created_at}
              />
            </ArticleTransition>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const getArticles = async (): Promise<Article[]> => {
  const [qiitaPosts, zennPosts] = await Promise.all([
    fetchQiitaPosts(),
    fetchZennPosts(),
  ])
  return Promise.all(
    [...qiitaPosts, ...zennPosts].map(async (post) => {
      const imageUrl = await getOgpImageUrl(post.url)
      return {
        ...post,
        imageUrl,
      }
    }),
  )
}

const getOgpImageUrl = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    headers: {
      'Allow-Cross-Origin-Origin': '*',
    },
  })
  const text = await response.text()
  const doc = parse(text)
  const ogImage = doc.querySelector('meta[property="og:image"]')
  if (ogImage) {
    return ogImage.getAttribute('content') || ''
  }
  return ''
}

export default ArticleSection
