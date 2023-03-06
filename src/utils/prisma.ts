import { atividade, cursos, escolaridade, experiencias, portfolio, PrismaClient } from '@prisma/client';
import { rebuildData, rebuildFun } from './functions';


const prisma = new PrismaClient();

export async function getAtividade() {
    return prisma.atividade.findMany();
}

export async function getPerfil() {
    return prisma.perfil.findMany();
}

export async function getCursos() {
    return prisma.cursos.findMany();
}


export async function getEscolaridade() {
    return prisma.escolaridade.findMany();
}


export async function getExperiencias() {
    return prisma.experiencias.findMany();
}


export async function getPortifolio() {
    return prisma.portfolio.findMany();
}


export async function getQuemSou() {
    return prisma.quemSou.findMany();
}

export type Collections = {
    atividade?: atividade[],
    perfil?: rebuildData,
    cursos?: cursos[],
    escolaridade?: escolaridade[],
    experiencias?: experiencias[],
    portfolio?: portfolio[],
    quemSou?:rebuildData
}

const getCollections = async (list:string[]) => {
    const atividade = await prisma.atividade.findMany();
    const perfil = await rebuildFun( prisma.perfil.findMany());
    const cursos = await prisma.cursos.findMany()
    const escolaridade = await prisma.escolaridade.findMany()
    const experiencias = await prisma.experiencias.findMany();
    const portfolio = await prisma.portfolio.findMany();
    const quemSou = await rebuildFun( prisma.quemSou.findMany());
    const obj = {atividade,perfil,cursos,escolaridade,experiencias,portfolio,quemSou};

    return Object.fromEntries(Object.entries(obj).filter(([key])=> list.includes(key) ) );
    
}

export default getCollections;


// const {PrismaClient} = require('@prisma/client');
// const prisma = new PrismaClient();

// const getCollections = (list) => {
//     const atividades = prisma.atividade.findMany()
//     const perfil = prisma.perfil.findMany()
//     const cursos = prisma.cursos.findMany()
//     const escolaridade = prisma.escolaridade.findMany()
//     const experiencias = prisma.experiencias.findMany()
//     const portfolio = prisma.portfolio.findMany()
//     const quemSou = prisma.quemSou.findMany()
//     const obj = {atividade,perfil,cursos,escolaridade,experiencias,portfolio,quemSou};

//     const final =  Object.fromEntries(Object.entries(obj).filter(([key])=> list.includes(Object.values(key)[0]) ) );
//     console.log(final)
    
// }

// getCollections(['atividades'])