import type { NextApiRequest, NextApiResponse } from 'next';

import { POPULAR_BASE_URL, SEARCH_BASE_URL } from '@/config';
import { genericFetch } from '@/services/fetchService';
import { IMovies } from '@/types/';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovies>,
) {
  const { page, search } = req.query;

  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await genericFetch<IMovies>(endpoint);

  res.status(200).json(data);
}
