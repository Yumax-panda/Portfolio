export type User = {
  id: string
  username: string
  name: string
  avatar_small_url: string
}

export type Post = {
  id: number
  post_type: string
  title: string
  slug: string
  comments_count: number
  liked_count: number
  body_letters_count: number
  article_type: string
  emoji: string
  is_suspended_private: boolean
  published_at: string
  body_updated_at: string
  source_repo_updated_at: string
  pinned: boolean
  path: string
  publication: unknown
  user: User
  provider: 'Zenn'
  url: string
}

export type ZennApiResponse = {
  articles: Omit<Post, 'provider' | 'url'>[]
  next_page: number | null
}
