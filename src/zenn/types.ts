import type { ArticleProvider } from '@/constants/article'

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
  likes_count: number
  body_letters_count: number
  article_type: string
  emoji: string
  is_suspended_private: boolean
  created_at: Date
  body_updated_at: string
  source_repo_updated_at: string
  pinned: boolean
  path: string
  publication: unknown
  user: User
  provider: ArticleProvider
  url: string
}

type Payload = Omit<Post, 'provider' | 'url' | 'likes_count' | 'created_at'> & {
  liked_count: number
  published_at: string
}

export type ZennApiResponse = {
  articles: Payload[]
  next_page: number | null
}
