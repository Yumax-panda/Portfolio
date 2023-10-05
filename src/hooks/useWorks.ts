import { useState } from 'react'
import { Work, works } from '@/constants/work'

export type UseWorks = {
  works: Work[]
}

export const useWorks = (): UseWorks => {
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(works)

  return {
    works: filteredWorks,
  }
}
