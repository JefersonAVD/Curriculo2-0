import { rebuildData, rebuildFun } from '@/utils/functions';
import { getAtividade, getQuemSou } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<rebuildData>
) {
    const atividades = await getAtividade();
    const quemSou = await rebuildFun(getQuemSou());

    res.status(200).json({atividades,...quemSou} )
}
