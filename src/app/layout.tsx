import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'
import { AuthProvider } from '@/providers/auth'
import { ThemeProvider } from '@/components/ui/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game Class',
  description: 'Ambiente virtual de aprendizagem com gamificação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <AuthProvider>
            <Header />
              {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
