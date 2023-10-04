import { useState, useEffect } from 'react'
import type { Post as QiitaPost } from '@/qiita/types'
import type { Post as ZennPost } from '@/zenn/types'

type Post = QiitaPost | ZennPost

export const useArticles = () => {
  const [articles, setArticles] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const fetchArticles = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/article')
      const json = await response.json()
      setArticles(json)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return { articles, isLoading, error }
}
