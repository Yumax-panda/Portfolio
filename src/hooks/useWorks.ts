import { useState } from 'react'
import { Work, works } from '@/constants/work'

export type UseWorks = {
  works: Work[]
  currentWork: Work | null
  open: boolean
  handleOpen: (work: Work) => () => void
  handleClose: () => void
}

export const useWorks = (): UseWorks => {
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(works)
  const [currentWork, setCurrentWork] = useState<Work | null>(null)
  const [open, setOpen] = useState(false)

  const handleOpen = (work: Work) => () => {
    setCurrentWork(work)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return {
    works: filteredWorks,
    currentWork,
    open,
    handleOpen,
    handleClose,
  }
}
