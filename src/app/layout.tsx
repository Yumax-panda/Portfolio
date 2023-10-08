import type { Metadata } from 'next'
import Template from '@/components/organisms/Template/Template'

export const metadata: Metadata = {
  title: 'Yumax-panda',
  description: 'Portfolio site of Yumax-panda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#F8F9FA',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <Template>{children}</Template>
      </body>
    </html>
  )
}
