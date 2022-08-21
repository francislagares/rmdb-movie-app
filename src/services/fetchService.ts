export const genericFetch = async <returnType>(
  endpoint: string,
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error fetching data!');

  const data = await response.json();

  return data;
};
