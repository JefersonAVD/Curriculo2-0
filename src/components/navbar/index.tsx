import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/utils/data";
import { motion } from 'framer-motion';


export default function Navbar() {
    const { data, error, isLoading } = useSWR('/api/getPerfil', fetcher);
    console.log(data)
    if (error) return <ErrorPerfil status={error} />
    if (isLoading) return <ErrorPerfil status="..." />
    return (
        <aside className="bg-gray-800 overflow-y-scroll text-white fixed p-4 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="border-solid border-b-2 border-white py-3 mb-3">
                <Image
                    src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt="Imagem de Profile"
                    width={500}
                    height={500}
                />
                <h2 className="text-3xl my-2">{data.nome.conteudo}</h2>
                <p>{data.profissao.conteudo}</p>
            </div>
            <ul>
                <li>
                    <Link href={'./'}>Home</Link>
                </li>
                <li>
                    <Link href={'./sobre'}>Sobre</Link>
                </li>
                <li>
                    <Link href={'./resumo'}>Resumo</Link>
                </li>
                <li>
                    <Link href={'./portfolio'}>Portfólio</Link>
                </li>
                <li>
                    <Link href={'./contato'}>Contato</Link>
                </li>

            </ul>
        </aside>
    )
}

const ErrorPerfil = ({ status }: { status: string }) => {
    return (
        <aside className="bg-gray-800 text-white fixed p-4 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="border-solid border-b-2 border-white py-3 mb-3">
                <Image
                    src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt="Imagem de Profile"
                    width={500}
                    height={500}
                />
                <h2>{status}</h2>
            </div>
            <ul >
                {
                    Array.from({ length: 5 }, (v, k) => k).map((ele, index) => (
                        <li key={index} className="w-full h-4 overflow-hidden rounded-lx relative py-3">
                            <motion.div
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                animate={{ x: ["-90%", "190%"] }}
                                className="h-4 absolute w-32 bg-gradient-to-r from-transparent via-white to-transparent"
                            />
                        </li>
                    ))}
            </ul>
        </aside>

    )
}