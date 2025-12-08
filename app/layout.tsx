import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legion Club // Nanosuit OS',
  description: 'University of Kelaniya - Tactical Gaming Collective',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}