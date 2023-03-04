'use client'

import MainTemplate from '@/components/mainTemplate';
import { OquemSou } from '@/pages/api/getResumo';
import { fetcher } from '@/utils/data';
import { quemSou } from '@prisma/client';
import Image from 'next/image';
import useSWR from 'swr';

export default function Sobre() {
    const {data, error,isLoading} = useSWR('/api/getResumo',fetcher);
    console.log(data);

    if(error)return 'deu ruim';
    if(isLoading) return '...carregando';
    return (
        <MainTemplate
            show={{ opacity: 1, translateX: 0 }}
            hidden={{ opacity: 0, translateX: -300 }}
        >
            <article className='text-center'>
                <h1 className='font-black sm:text-7xl'>Sobre Mim</h1>
            </article>
            <section className='sm:flex gap-5'>
                <article className='flex-1'>
                    <Image
                        src={"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"}
                        alt="Perfil"
                        className='flex-1'
                        width={Infinity}
                        height={Infinity}
                    />
                </article>
                <article className='flex-1'>
                </article>
            </section>
        </MainTemplate>
    )
}