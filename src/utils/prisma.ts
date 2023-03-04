import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function getAtividade (){
    return prisma.atividade.findMany();
}

export async function getPerfil(){
    return prisma.perfil.findMany();
}

export async function getCursos(){
    return prisma.cursos.findMany();
}


export async function getEscolaridade(){
    return prisma.escolaridade.findMany();
}


export async function getExperiencias(){
    return prisma.experiencias.findMany();
}


export async function getPortifolio(){
    return prisma.portfolio.findMany();
}


export async function getQuemSou(){
    return prisma.quemSou.findMany();
}