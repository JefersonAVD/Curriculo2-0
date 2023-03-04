import { getQuemSou } from '@/utils/prisma';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { quemSou } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface OquemSou {
    [propName: string]: quemSou;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<OquemSou>
) {
    const data: OquemSou = {};
    (await getQuemSou()).forEach(ele => { data[ele.titulo] = ele });
    res.status(200).json(data)
}
