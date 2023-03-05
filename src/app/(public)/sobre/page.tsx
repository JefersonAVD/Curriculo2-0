'use client'
import React from 'react';
import MainTemplate from '@/components/mainTemplate';
import { fetcher } from '@/utils/data';
import { atividade, QuemSouTextos } from '@prisma/client';
import Image from 'next/image';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sobre() {
    const { data, error, isLoading } = useSWR('/api/getSobre', fetcher);
    console.log(data);

    if (error) return 'deu ruim';
    if (isLoading) return '...carregando';
    return (
        <MainTemplate
            show={{ opacity: 1, translateX: 0 }}
            hidden={{ opacity: 0, translateX: -300 }}
        >
            <section className='text-center mb-5'>
                <h1 className='font-black sm:text-7xl'>Sobre Mim</h1>
            </section>
            <section className='sm:flex gap-5 mb-5'>
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
            <section className='grid gap-2 sm:grid-cols-2 mb-5'>
                <h2 className='col-span-2 text-center sm:text-5xl'>O que sei fazer</h2>
                {
                    data.atividades.map((ele: atividade) => (
                        <article className='p-3 bg-teal-500 text-white' key={ele.id}>
                            {ele.urlIcone && <Image src={ele.urlIcone} alt={`logo ${ele.nome}`} />}
                            <h3 className='text-2xl font-semibold leading-5 mb-3'>{ele.nome}</h3>
                            <div className='w-1/5 h-[2px] bg-black mb-3'></div>
                            <p>{ele.descricao}</p>
                        </article>
                    ))
                }
            </section>
            <section>
                <h2>
                    Tecnologias que conheço
                </h2>
                <article>
                    {
                        data.Conhecimentos.textos.map((ele: QuemSouTextos) => (
                            <div key={ele.conteudo}>
                                <FontAwesomeIcon icon="html5" />
                            </div>
                        ))
                    }
                </article>
            </section>
        </MainTemplate>
    )
}