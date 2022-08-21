import { IMovies } from 'src/types';

export const genericFetch = async <returnType>(
  endpoint: string,
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error fetching data!');

  const data = await response.json();

  return data;
};

export const fetchMovies = async (search = '', page = 1): Promise<IMovies> => {
  return await genericFetch(`/api/movies?search=${search}&page=${page}`);
};
