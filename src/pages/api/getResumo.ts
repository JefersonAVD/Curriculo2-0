import { rebuildData, rebuildFun } from '@/utils/functions';
import { getCursos, getEscolaridade, getExperiencias, getPerfil } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<rebuildData>
) {
    const experiencias = await getExperiencias();
    const escolaridade = await getEscolaridade();
    const cursos = await getCursos();
    res.status(200).json({experiencias,escolaridade,cursos});
}
