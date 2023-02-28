'use client'
import Navbar from '@/components/navbar'
import Lottie from 'react-lottie-player'
import '../globals.css'
import gif from '@/assets/lottieFiles/Comp 1.json';
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Navbar />
        <Lottie
          className='fixed z-[-1] sm:w-3/4 h-full right-0'
          play
          loop
          animationData={gif}
        />
        {children}
      </body>
    </html>
  )
}
