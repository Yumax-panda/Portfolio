import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

type Props = {
  delay: number
  duration: number
  children: React.ReactNode
}

function SkillTransition({ delay, children, duration }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, { autoAlpha: 0 })
    }
  }, [])

  useEffect(() => {
    const timeline = gsap
      .timeline()
      .to(ref.current, { autoAlpha: 1, duration: duration, delay: delay })
    return () => {
      timeline.kill()
    }
  }, [delay, duration])

  return <div ref={ref}>{children}</div>
}

export default SkillTransition
