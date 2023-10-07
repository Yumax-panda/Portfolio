import { Container } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Props = {
  children: React.ReactNode
}

function Template({ children }: Props) {
  return (
    <div>
      <Header />
      <Container maxWidth='lg'>{children}</Container>
      <div style={{ height: '5rem' }} />
      <Footer />
    </div>
  )
}

export default Template
