import { useState, useEffect } from 'react'
import { QiitaClient } from '@/qiita/client'
import type { Post } from '@/qiita/types'

export const useArticles = () => {
  const [articles, setArticles] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true)
      try {
        const client = new QiitaClient()
        const articles = await client.fetchPosts()
        console.log('articles', articles)
        setArticles(articles)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return { articles, isLoading, error }
}
