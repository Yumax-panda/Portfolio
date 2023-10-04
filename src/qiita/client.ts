import type { Post } from './types'

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
    const posts = (await response.json()) as Omit<Post, 'provider'>[]
    return posts.map((post) => ({
      ...post,
      provider: 'Qiita',
    }))
  }
}
