import { quemSou } from "@prisma/client";

export interface rebuildData {
    [propName: string]: any;
}

interface builder{
    titulo:string,
    tipo:string,
    nome:string,
}


export const rebuildFun = async (fn:Promise<any>) =>{
    
    const data: rebuildData = {};
    (await fn).forEach( (ele: builder) => { data[ele.titulo ?? ele.tipo?? ele.nome] = ele });
    
    return data
}