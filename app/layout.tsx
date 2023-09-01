
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { Providers } from '@/redux/providers'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Roboto({
  weight: ["100", "300", '400', "500", '700', "900"],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rick And Morty',
  description: 'Bienvenidos a la pagina de Rick and Morty creada con Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' >
      <body className={inter.className}>
        <ClerkProvider appearance={{
          baseTheme: dark
        }}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ClerkProvider>
      </body>
    </html>

  )
}
