'use client'
import { Inter } from '@next/font/google'
import { motion } from 'framer-motion';
import '../globals.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main className='sm:overflow-hidden'>
      <motion.div
        initial="hidden"
        animate='visible'
        exit='hidden'
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        className="sm:ml-64 p-10 sm:h-screen"
      >
        <div className='bg-[#dddddd90] flex flex-col justify-center items-center rounded-lg h-full  text-center'>

          <h1 className='text-4xl'>Jeferson Dias</h1>
          <p>{'<'}Desenvolvedor Full Stack{'/>'}</p>
        </div>
      </motion.div>
    </main>
  )
}
