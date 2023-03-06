'use client'
import MainTemplate from '@/components/mainTemplate';
import TheTitle from '@/components/pageTitle';
import SectionTitle from '@/components/sectionTitle';
import { fetcher } from '@/utils/data';
import { cursos, escolaridade, experiencias } from '@prisma/client';
import useSWR from 'swr';

export default function Resumo() {
    const { data, error, isLoading } = useSWR('/api/getResumo', fetcher);
    console.log(data);
    if (error) return "...deu ruim";
    if (isLoading) return "carregando";
    return (
        <MainTemplate
            hidden={{ opacity: 0, translateX: 300 }}
            show={{ opacity: 1, translateX: 0 }}
        >
            <section className='text-center mb-5'>
                <TheTitle title='Resumo Profissional' />
            </section>
            <section className='mb-5'>
                <SectionTitle title='Escolaridade' />
                {
                    data.escolaridade.map((ele: escolaridade) => (
                        <article key={ele.id} className="bg-teal-500 p-2 text-white">
                            <h2>{ele.titulo + " - " + ele.anoFormacao}</h2>
                            <div className='w-[100px] h-[2px] my-1 bg-black'></div>
                            <p>{ele.instituicao}</p>
                            <p>{ele.descricao}</p>
                        </article>
                    ))
                }
            </section>
            <section className='mb-5'>
                <SectionTitle title='Experiências' />
                {
                    data.experiencias.map((ele: experiencias) => (
                        <article key={ele.id} className="bg-teal-500 p-2 mb-5 text-white">
                            <h2>{ele.empresa}</h2>
                            <p>{ele.vaga}</p>
                            <div className='w-[100px] rounded-full h-[3px] my-2 bg-black'></div>
                            <p className='mb-2'><span>{ele.inicio}</span> / <span>{ele.fim}</span></p>
                            <p>{ele.atividades}</p>
                        </article>
                    ))
                }
            </section>
            <section className='mb-5'>
                <SectionTitle title='Cursos' />
                {
                    data.cursos.map((ele: cursos) => (
                        <article key={ele.id} className="bg-teal-500 grid grid-cols-4 p-2 mb-5 text-white">
                            <div className='col-span-3'>
                                <h2>{ele.nome}</h2>
                                <div className='w-[100px] rounded-full h-[3px] my-2 bg-black'></div>
                                <p className='mb-3'>{ele.empresa}</p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <a
                                    className='p-2 rounded text-center bg-gray-600'
                                    target="_blank"
                                    rel='noreferrer' href={ele.url}>Acessar Certificado</a>
                            </div>
                        </article>
                    ))
                }
            </section>

        </MainTemplate >
    )
}