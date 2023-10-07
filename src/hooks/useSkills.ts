import { useState, useEffect } from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
import { skills as initialSkills } from '../constants/skills'
import type { Category as _Category, Skill } from '../constants/skills'

type UseSkills = {
  register: UseFormRegister<FormValues>
  skills: Skill[]
}

type Category = _Category | 'All'

type FormValues = {
  filterBy: Category
}

export const useSkills = (): UseSkills => {
  const [filteredSkills, setFilteredSkills] = useState(initialSkills)
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

  return {
    register,
    skills: filteredSkills,
  }
}
