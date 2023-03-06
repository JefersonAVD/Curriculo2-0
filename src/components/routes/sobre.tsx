'use client'
import { divideContato, rebuildData } from "@/utils/functions";
import { Collections } from "@/utils/prisma";
import { atividade, QuemSouTextos } from "@prisma/client";

import Image from 'next/image'
import MainTemplate from "../mainTemplate";
import TheTitle from "../pageTitle";
import SectionTitle from "../sectionTitle";

const PageSobre = ({ data }: {
    data: Collections
}) => {
    console.log(data);
    const {quemSou, atividade} = data;

    return (
    <MainTemplate
        show={{ opacity: 1, translateX: 0 }}
        hidden={{ opacity: 0, translateX: -300 }}
    >
        <section className='text-center mb-5'>
            <TheTitle title='Sobre Mim' />
        </section>
        <section className='sm:flex gap-5 mb-5'>
            <article className='flex-1'>
                <p className='drop-shadow-sm'>{quemSou?.resumo.textos[0].conteudo}</p>
            </article>
            <article className='flex-1'>
                <ul className='my-3'>
                    {
                        quemSou?.contato.textos.map((ele: QuemSouTextos, index: number) => {
                            return (
                                <li key={index} className="mb-2 leading-5">
                                    <span className='bg-teal-500 text-white px-1 '>
                                        {divideContato(ele.conteudo)[0]}
                                    </span>
                                    {divideContato(ele.conteudo)[1]}
                                </li>)
                        })
                    }
                </ul>
            </article>
        </section>
        <section className='grid gap-2 grid-cols-1 lg:grid-cols-2 mb-5'>
            <SectionTitle title='O que sei fazer' />
            {
                atividade?.map((ele: atividade) => (
                    <article className='p-3 bg-gradient-to-r from-teal-500 to-teal-600 shadow-md text-white' key={ele.id}>
                        {ele.urlIcone && <Image src={ele.urlIcone} alt={`logo ${ele.nome}`} />}
                        <h3 className='text-2xl font-semibold leading-5 mb-3'>{ele.nome}</h3>
                        <div className='w-1/5 h-[2px] bg-black mb-3'></div>
                        <p>{ele.descricao}</p>
                    </article>
                ))
            }
        </section>
        <section>
            <SectionTitle title='Tecnologias que conheço' />
            <article className="flex sm:flex-row gap-5 py-3 flex-wrap">
                {
                    quemSou?.conhecimentos.textos.map((ele: QuemSouTextos) => (
                        <span key={ele.conteudo}
                            className="rounded-full py-1 px-2 bg-gradient-to-r shadow-md from-teal-500 to-teal-600 text-white "
                        >
                            {"<" + ele.conteudo + "/>"}
                        </span>
                    ))
                }
            </article>
        </section>
    </MainTemplate>
    )
}


export default PageSobre;

