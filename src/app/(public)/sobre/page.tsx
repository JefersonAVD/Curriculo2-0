'use client'

import { motion, AnimatePresence } from 'framer-motion';

export default function Sobre() {
    return (
        <AnimatePresence>
            <motion.main
                className="sm:ml-64 p-10 sm:h-screen"
                initial="hidden"
                animate='visible'
                exit='hidden'
                variants={{
                    hidden: { opacity: 0, translateX: -200, transition:{duration:10} },
                    visible: { opacity: 1, translateX: 0 },
                }}
            >

                Sobre
            </motion.main>
        </AnimatePresence>

    )
}