import { useState } from 'react'

type UseArticleCardReturns = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  imageUrl: string
  setImageUrl: (url: string) => void
  fetchImageUrl: (url: string) => void
}

export const useArticleCard = (): UseArticleCardReturns => {
  const [isLoading, setIsLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const fetchImageUrl = async (webSiteUrl: string) => {
    setIsLoading(true)
    console.log('webSiteUrl', webSiteUrl)
    const response = await fetch(`/api/thumbnail?url=${webSiteUrl}`)
    const data = (await response.json()) as { url: string }
    setIsLoading(false)
    setImageUrl(data.url)
  }

  return {
    isLoading,
    setIsLoading,
    imageUrl,
    setImageUrl,
    fetchImageUrl,
  }
}
