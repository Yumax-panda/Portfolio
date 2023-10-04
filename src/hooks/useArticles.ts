import { useState, useEffect } from 'react'
import { set, useForm } from 'react-hook-form'
import type { UseFormRegister } from 'react-hook-form'
import type { ArticleProvider } from '@/constants/article'
import type { Post as QiitaPost } from '@/qiita/types'
import type { Post as ZennPost } from '@/zenn/types'

type Post = QiitaPost | ZennPost

type FormValues = {
  sortBy: 'likes_count' | 'created_at'
  filterBy: ArticleProvider | 'All'
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
  const [filteredArticles, setFilteredArticles] = useState<Post[]>([])
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
      const json = await response.json()
      setArticles(json)
      setFilteredArticles(json)
      setHits(json.length)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  useEffect(() => {
    setFilteredArticles(articles)
  }, [articles])

  const handleSubmit = defaultHandleSubmit((data) => {
    const { sortBy, filterBy } = data
    const filtered = articles.filter(
      (article) => filterBy === 'All' || article.provider === filterBy,
    )
    const sorted = filtered.sort((a, b) => {
      if (sortBy === 'likes_count') {
        return b.likes_count - a.likes_count
      }
      return b.created_at.getTime() - a.created_at.getTime()
    })

    setFilteredArticles(sorted)
    setHits(sorted.length)
  })

  return {
    articles: filteredArticles,
    isLoading,
    error,
    handleSubmit,
    register,
    hits,
  }
}
