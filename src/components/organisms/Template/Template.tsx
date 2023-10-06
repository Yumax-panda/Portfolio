import { Container } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'

type Props = {
  children: React.ReactNode
}

// TODO: implement Footer
function Template({ children }: Props) {
  return (
    <div>
      <Header />
      <Container maxWidth='lg'>{children}</Container>
    </div>
  )
}

export default Template
