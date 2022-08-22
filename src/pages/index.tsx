import type { NextPage } from 'next';
import { useState } from 'react';
import { Header } from 'src/components';

import { useFetchMovies } from '../hooks/fetchHooks';

const Home: NextPage = () => {
  const [query, setQuery] = useState('');

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);
  return (
    <main className='relative h-screen overflow-y-scroll'>
      <Header setQuery={setQuery} />
      RMDB
    </main>
  );
};

export default Home;
