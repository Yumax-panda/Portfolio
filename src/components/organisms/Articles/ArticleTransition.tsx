import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
}

function ArticleTransition({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, { y: 0 })
    }
  }, [])

  const handleMouseEnter = () => {
    const ctx = gsap.set(ref.current, { y: -5, duration: 0.5 })
    return () => {
      ctx.kill()
    }
  }

  const handleMouseLeave = () => {
    const ctx = gsap.set(ref.current, { y: 0, duration: 0.2 })
    return () => {
      ctx.kill()
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default ArticleTransition
