import type { ArticleProvider } from '@/constants/article'
import { ME } from '@/constants/me'
import type { Post, ZennApiResponse } from '@/zenn/types'

export async function fetchPosts(): Promise<Post[]> {
  const url = `https://zenn.dev/api/articles?username=${ME.zennUsername}&order=latest`
  const response = await fetch(url)
  const json = (await response.json()) as ZennApiResponse
  const data = json.articles.map((post) => {
    const { liked_count, published_at, ...rest } = post

    return {
      ...rest,
      likes_count: liked_count,
      created_at: published_at,
      provider: 'Zenn' as ArticleProvider,
      url: `https://zenn.dev/${post.path}`,
    }
  })
  return data
}
