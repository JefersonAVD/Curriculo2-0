'use client'
import { motion, AnimatePresence } from 'framer-motion';

export default function Resumo() {
    return (
        <main className='overflow-x-hidden sm:ml-64 p-10'>
            <AnimatePresence mode='popLayout'>
                <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                        hidden: { opacity: 0, translateX: 300 },
                        show: { opacity: 1, translateX: 0 }
                    }}
                >
                    <h1>Resumo</h1>
                </motion.div>
            </AnimatePresence>
        </main>
    )
}