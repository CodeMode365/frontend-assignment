import StateProvider from '@/Providers/Redux/StateProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import TanstackProvider from '@/Providers/Tanstack/TanstackProvider'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OurStore',
  description: 'Ecommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-screen-xl mx-auto"}>
        <StateProvider>
          <TanstackProvider>
            <Navbar />
            {children}
            <Toaster />
          </TanstackProvider>
        </StateProvider>
      </body>
    </html>
  )
}
