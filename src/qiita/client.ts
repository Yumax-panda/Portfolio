import type { Post } from './types'

export class QiitaClient {
  private readonly baseUrl = 'https://qiita.com/api/v2'
  private readonly accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async fetchPosts(): Promise<Post[]> {
    const url = `${this.baseUrl}/authenticated_user/items`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
    return response.json()
  }
}
