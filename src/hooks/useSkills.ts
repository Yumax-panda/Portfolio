import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { skills as initialSkills } from '../constants/skills'
import type {
  Category as _Category,
  Skill,
  Tag as _Tag,
} from '../constants/skills'

type Category = _Category | 'All'
type Tag = _Tag | 'All'

type FormValues = {
  category: Category
  tag: Tag
}

export const useSkills = () => {
  const [filteredSkills, setFilteredSkills] = useState(initialSkills)
  const { register, control, handleSubmit, reset, watch } = useForm<FormValues>(
    {
      defaultValues: {
        category: 'All',
        tag: 'All',
      },
    },
  )

  const category = watch('category')
  const tag = watch('tag')

  const _filterSkills = (skills: Skill[]) => {
    const filteredByCategory =
      category === 'All'
        ? skills
        : skills.filter((skill) => skill.category === category)

    const filteredByTag =
      tag === 'All'
        ? filteredByCategory
        : filteredByCategory.filter((skill) => skill.tags.includes(tag))

    return filteredByTag
  }

  useEffect(() => {
    setFilteredSkills(_filterSkills(initialSkills))
  }, [category, tag])

  return {
    register,
    control,
    handleSubmit,
    reset,
    filteredSkills,
  }
}
