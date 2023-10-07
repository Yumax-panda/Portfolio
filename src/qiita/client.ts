import type { Post, QiitaApiResponse } from './types'
import type { ArticleProvider } from '@/constants/article'

export async function fetchPosts(): Promise<Post[]> {
  const url = `https://qiita.com/api/v2/authenticated_user/items`
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_TOKEN}`,
    },
  })
  const posts = (await response.json()) as QiitaApiResponse
  return posts.map((post) => {
    return {
      provider: 'Qiita' as ArticleProvider,
      ...post,
    }
  })
}
