import type { ArticleProvider } from '@/constants/article'

export type Tag = {
  name: string
  versions: string[]
}

export type User = {
  description: string
  facebook_id: string | null
  followees_count: number
  followers_count: number
  github_login_name: string | null
  id: string
  items_count: number
  linkedin_id: string | null
  location: string | null
  name: string | null
  organization: string | null
  permanent_id: number
  profile_image_url: string
  team_only: boolean
  twitter_screen_name: string | null
  website_url: string | null
}

export type Post = {
  rendered_body: string
  body: string
  coediting: boolean
  comments_count: number
  created_at: Date
  group: any
  id: string // Pattern: "/^[0-9a-f]{20}$/"
  likes_count: number
  reactions_count: number
  stocks_count: number
  tags: Tag[]
  title: string
  updated_at: Date
  url: string
  user: User
  page_views_count: number
  team_membership: any
  organization_url_name: string | null
  slide: boolean
  provider: ArticleProvider
}

export type QiitaApiResponse = ({
  created_at: string
  updated_at: string //fmt date-time
} & Omit<Post, 'created_at' | 'updated_at' | 'provider'>)[]
