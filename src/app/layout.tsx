import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ["400", "600"],
  subsets: ["latin"]
 })

export const metadata: Metadata = {
  title: 'Movie Search Engine ',
  description: 'Search Any Movies name here',
  keywords: ['movie', 'search', 'database']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
