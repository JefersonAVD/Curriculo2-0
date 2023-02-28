import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function getData (){
    const data =  prisma.atividade.findMany();
    return data;
}