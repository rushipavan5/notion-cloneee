import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConvexClientProvider } from '@/components/providers/convex-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoTion',
  description: 'The connected workspace where Prductive wrok happens',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: Light)",
        url: "/Notion-logo.svg",
        href: "/Notion-logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notion.svg",
        href: "/notion.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
         
          
        {children} 
      </body>
    </html>
  )
}
