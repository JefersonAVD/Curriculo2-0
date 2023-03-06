import { motion } from 'framer-motion';

type THidden = {
    opacity: number;
    translateX?: number;
    translateY?: number;
}
type TShow = {
    opacity: number;
    translateX?: number;
    translateY?: number;
}


export default function MainTemplate({ children, hidden, show }: { children: React.ReactNode, hidden: THidden, show: TShow }) {
    return (
        <main className='overflow-hidden p-10'>
            <motion.div
                className="lg:ml-64 backdrop-blur-sm relative bg-[#00000020] overflow-x-hidden p-10 rounded-lg"
                initial="hidden"
                animate='show'
                exit='hidden'
                variants={{
                    hidden,
                    show,
                }}
            >
                <div className='absolute border-color-red border-solid border-black border-l-[2px] border-t-[2px] z-10 w-[100px] h-[100px] top-4 left-4 rounded-tl-xl'></div>
                {children}
                <div className='absolute border-color-red border-solid border-black border-r-[2px] border-b-[2px] z-10 w-[100px] h-[100px] bottom-[10px] right-[10px] rounded-br-xl'></div>
            </motion.div>
        </main>

    )
}