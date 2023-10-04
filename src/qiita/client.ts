import type { Post, QiitaApiResponse } from './types'
import type { ArticleProvider } from '@/constants/article'

export class QiitaClient {
  private readonly baseUrl = 'https://qiita.com/api/v2'
  private readonly accessToken: string

  constructor(accessToken?: string) {
    this.accessToken =
      accessToken || (process.env.NEXT_PUBLIC_QIITA_TOKEN as string)
  }

  async fetchPosts(): Promise<Post[]> {
    const url = `${this.baseUrl}/authenticated_user/items`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
    const posts = (await response.json()) as QiitaApiResponse
    return posts.map((post) => {
      const { created_at, updated_at, ...rest } = post
      return {
        ...rest,
        created_at: new Date(created_at),
        updated_at: new Date(updated_at),
        provider: 'Qiita' as ArticleProvider,
        url: post.url,
      }
    })
  }
}
