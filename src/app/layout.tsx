import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
