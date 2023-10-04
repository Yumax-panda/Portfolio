import { ME } from '@/constants/me'
import type { Post, ZennApiResponse } from '@/zenn/types'

export class ZennClient {
  private readonly baseUrl = 'https://zenn.dev'

  constructor() {}

  async fetchPosts(): Promise<Post[]> {
    const url = `${this.baseUrl}/api/articles?username=${ME.zennUsername}&order=latest`
    const response = await fetch(url)
    const json = (await response.json()) as ZennApiResponse
    return json.articles.map((post) => ({
      ...post,
      url: `${this.baseUrl}${post.path}`,
      provider: 'Zenn',
    }))
  }
}
