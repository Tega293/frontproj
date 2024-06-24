import Image from 'next/image'
import { EmblaCarousel } from './components/Couresl'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./globals.css"
import { Handjet } from 'next/font/google'

const inter = Handjet({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
          <Navbar/>
          <main id='main'>
            
        <EmblaCarousel />

          </main>
         
        <main className=' text-white bg-black '> 
          {children}
        </main>
      <Footer/>

        </body>
    </html>
  )
}
