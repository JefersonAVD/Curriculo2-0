import { rebuildData, rebuildFun } from '@/utils/functions';
import { getPerfil } from '@/utils/prisma';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<rebuildData>
) {
    res.status(200).json( await rebuildFun(getPerfil()))
}
