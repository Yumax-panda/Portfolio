import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { UseFormRegister } from 'react-hook-form'
import type { ArticleProvider } from '@/constants/article'
import type { Post as QiitaPost } from '@/qiita/types'
import type { Post as ZennPost } from '@/zenn/types'

type Post = QiitaPost | ZennPost
type SortBy = 'likes_count' | 'created_at'
type FilterBy = ArticleProvider | 'All'

type FormValues = {
  sortBy: SortBy
  filterBy: FilterBy
}

type UseArticlesReturn = {
  articles: Post[]
  isLoading: boolean
  error: unknown
  handleSubmit: () => void
  register: UseFormRegister<FormValues>
  hits: number
}

export const useArticles = (): UseArticlesReturn => {
  const [articles, setArticles] = useState<Post[]>([])
  const [processedArticles, setProcessedArticles] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)
  const { register, handleSubmit: defaultHandleSubmit } = useForm<FormValues>({
    defaultValues: {
      sortBy: 'likes_count',
      filterBy: 'All',
    },
  })
  const [hits, setHits] = useState(0)

  const fetchArticles = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/article')
      const json = (await response.json()) as Post[]
      setArticles(json)
      setProcessedArticles(
        json.sort((a, b) => handleSortBy(a, b, 'created_at')),
      )
      setHits(json.length)
      console.log('articles', json)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const handleSubmit = defaultHandleSubmit((data) => {
    const { sortBy, filterBy } = data
    const filtered = articles.filter((article) =>
      handleFilterBy(article, filterBy),
    )
    const sorted = filtered.sort((a, b) => handleSortBy(a, b, sortBy))
    setProcessedArticles(sorted)
    setHits(sorted.length)
  })

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
    error,
    handleSubmit,
    register,
    hits,
  }
}
