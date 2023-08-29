import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Libros App',
  description: 'Descubre los mejores libros del mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'></body>
      <Navbar />
      {children}
      <Footer />
    </html>
  )
}
