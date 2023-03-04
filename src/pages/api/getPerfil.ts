import { getPerfil } from '@/utils/prisma';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { perfil } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<perfil[]>
) {
    const perfil = await getPerfil();
    res.status(200).json(perfil)
}
