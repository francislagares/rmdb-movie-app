import type { NextPage } from 'next';
import noImage from 'public/no_image.jpg';
import { useState } from 'react';
import { Grid, Header, Hero } from 'src/components';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config/config';
import { useFetchMovies } from '../hooks/fetchHooks';
import { IMovie } from '../types';

const Home: NextPage = () => {
  const [query, setQuery] = useState('');

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);
  return (
    <main className='relative h-screen overflow-y-scroll'>
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : noImage
          }
          title={data?.pages[0].results[0].title}
          text={data?.pages[0].results[0].overview}
        />
      ) : null}
      <Grid
        className='p-4 max-w7xl m-auto'
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : 'Popular Movies'
        }
      >
        {data && data.pages
          ? data.pages.map(page =>
              page.results.map((movie: IMovie) => (
                <div key={movie.id}>{movie.original_title}</div>
              )),
            )
          : null}
      </Grid>
    </main>
  );
};

export default Home;
