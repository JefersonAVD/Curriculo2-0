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
    (await fn).forEach( (ele: builder) => { 
        data[ele.titulo?.toLowerCase() ?? ele.tipo?.toLowerCase() ?? ele.nome?.toLowerCase()] = ele 
    });
    
    return data
}

export const divideContato = (text:string) => {
    const arrayString = text.split(":");
    return arrayString
}