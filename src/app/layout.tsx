import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'It is an Photo Gallery where you can find different photos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-rose-100'>
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
