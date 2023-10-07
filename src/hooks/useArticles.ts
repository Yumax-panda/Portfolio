import { useState, useEffect, use } from 'react'
import { useForm } from 'react-hook-form'
import type { UseFormRegister } from 'react-hook-form'
import type { ArticleProvider } from '@/constants/article'
import type { Post as QiitaPost } from '@/qiita/types'
import type { Post as ZennPost } from '@/zenn/types'

type Payload = QiitaPost | ZennPost
type Post = (QiitaPost | ZennPost) & { imageUrl: string }
type SortBy = 'likes_count' | 'created_at'
type FilterBy = ArticleProvider | 'All'

type FormValues = {
  sortBy: SortBy
  filterBy: FilterBy
}

type UseArticles = {
  articles: Post[]
  isLoading: boolean
  register: UseFormRegister<FormValues>
  hits: number
}

export const useArticles = (): UseArticles => {
  const [articles, setArticles] = useState<Post[]>([])
  const [processedArticles, setProcessedArticles] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { register, watch } = useForm<FormValues>({
    defaultValues: {
      sortBy: 'created_at',
      filterBy: 'All',
    },
  })
  const [hits, setHits] = useState(0)
  const filterBy = watch('filterBy')
  const sortBy = watch('sortBy')

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/article')
        const json = (await response.json()) as Payload[]
        const tasks: Promise<Post>[] = json.map(async (post) => {
          const url = `/api/thumbnail?url=${post.url}`
          const response = await fetch(url)
          const data = (await response.json()) as { url: string }
          return { ...post, imageUrl: data.url }
        })
        const posts = await Promise.all(tasks)
        setArticles(posts)
        setHits(json.length)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [])

  useEffect(() => {
    setProcessedArticles(
      articles
        .filter((article) => handleFilterBy(article, filterBy))
        .sort((a, b) => handleSortBy(a, b, sortBy)),
    )
  }, [filterBy, sortBy, articles])

  const handleFilterBy = (article: Post, filterBy: FilterBy) => {
    return filterBy === 'All' || article.provider === filterBy
  }

  const handleSortBy = (a: Post, b: Post, sortBy: SortBy) => {
    if (sortBy === 'likes_count') {
      return b.likes_count - a.likes_count
    }
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  }

  return {
    articles: processedArticles,
    isLoading,
    register,
    hits,
  }
}
