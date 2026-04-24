import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Accredian Enterprise - Transform Your Learning',
  description: 'Enterprise learning platform for modern teams and organizations',
  keywords: 'learning, enterprise, courses, skills, professional development',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    url: 'https://accredian-enterprise-clone.vercel.app',
    title: 'Accredian Enterprise - Transform Your Learning',
    description: 'Enterprise learning platform for modern teams and organizations',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
