import PageResumo from "@/components/routes/resumo";
import getCollections from "@/utils/prisma";

export default async function Resumo() {
    const data = await getCollections(['experiencias','escolaridade', 'cursos']);
    return(
        <PageResumo data = {data} />
    )
    
}
