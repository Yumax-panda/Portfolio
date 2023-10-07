import { useState, useEffect } from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
import { skills as initialSkills } from '../constants/skills'
import type { Category as _Category, Skill } from '../constants/skills'

type UseSkills = {
  register: UseFormRegister<FormValues>
  skills: Skill[]
  more: boolean
  displayMore: () => void
}

type Category = _Category | 'All'

type FormValues = {
  filterBy: Category
}

export const useSkills = (): UseSkills => {
  const [filteredSkills, setFilteredSkills] = useState(initialSkills)
  const [count, setCount] = useState(10)
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
    const next = count + 10
    if (next >= filteredSkills.length) {
      setMore(false)
    }
    setCount(next)
  }

  return {
    register,
    skills: filteredSkills.slice(0, count),
    more,
    displayMore,
  }
}
