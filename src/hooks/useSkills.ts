import { useState, useEffect } from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
import { skills as initialSkills } from '../constants/skills'
import type { Category as _Category, Skill } from '../constants/skills'

type UseSkills = {
  register: UseFormRegister<FormValues>
  skills: Skill[]
  more: boolean
  displayMore: () => void
  count: number
  getDelay: (index: number) => number
  duration: number
}

type Category = _Category | 'All'

type FormValues = {
  filterBy: Category
}

export const useSkills = (): UseSkills => {
  const batch = 10
  const duration = 0.1

  const [filteredSkills, setFilteredSkills] = useState(initialSkills)
  const [count, setCount] = useState(batch)
  const [more, setMore] = useState(true)
  const { register, watch } = useForm<FormValues>({
    defaultValues: {
      filterBy: 'All',
    },
  })

  const filterBy = watch('filterBy')

  useEffect(() => {
    const filtered = initialSkills.filter((skill) => {
      if (filterBy === 'All') return true
      return skill.category === filterBy
    })
    setFilteredSkills(filtered)
  }, [filterBy])

  const displayMore = () => {
    const next = count + batch
    if (next >= filteredSkills.length) {
      setMore(false)
    }
    setCount(next)
  }

  const getDelay = (index: number) => (index % batch) * duration

  return {
    register,
    skills: filteredSkills.slice(0, count),
    more,
    displayMore,
    count,
    getDelay,
    duration,
  }
}
