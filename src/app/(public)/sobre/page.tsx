import PageSobre from '@/components/routes/sobre';
import { rebuildFun } from '@/utils/functions';
import getCollections, { getAtividade, getQuemSou } from '@/utils/prisma';

export default async function Sobre() {
    const data = await getCollections(["atividade","quemSou"]);
    console.log(data)
    return (
        <PageSobre data={data} />
    )
}

const getSobre = async ()=>{
    const atividades = await getAtividade();
    const quemSou = await rebuildFun(getQuemSou());

    return {quemSou,atividades}
}