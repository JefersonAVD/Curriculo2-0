import Link from "next/link";
import Image from "next/image";

interface INavbar {
    nome?:string,
    imagem?:string
    children?:React.ReactNode
}

export default function Navbar({nome,imagem}:INavbar) {
    return (
        <aside className="bg-gray-800 text-white fixed p-4 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="border-solid border-b-2 border-white py-3 mb-3">
                <Image 
                src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" 
                alt="Imagem de Profile"
                width={500}
                height={500}
                />
                <h2>Nome e Sobrenome</h2>
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