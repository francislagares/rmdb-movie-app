import Image from 'next/image';
import searchLogo from 'public/tmdb-logo.svg';
import React, { useRef, useState } from 'react';

import { ISearch } from '@/types';

const TIME = 300; // ms

const SearchInput = ({ setQuery }: ISearch) => {
  const [text, setText] = useState('');
  const timer = useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Search Movie'
        value={text}
        onChange={handleInput}
        className='h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700
                text-white focus:outline-none focus:border focus:border-solid
                focus:border-cyan-200'
      />
      <div className='absolute right-4 top-8'>
        <Image width='30' height='32' src={searchLogo} alt='tmdb-logo' />
      </div>
    </>
  );
};

export default SearchInput;
