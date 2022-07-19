import React from 'react';
import { useGetUsersByNameQuery } from '../store/github/github.api';

function HomePage() {
  const [search, setSearch] = React.useState('')
  const { isLoading, isError, data } = useGetUsersByNameQuery('andrii');
  console.log(data);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600 text-xl">
          It looks like something went wrong, please try again later.
        </p>
      )}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border px-4 py-2 w-full h-[42px] mb-2"
          placeholder="Search users by username"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <div className="absolute top-[42px] px-4 py-2 left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor adipisci molestias
          cumque tempora recusandae laboriosam, a aperiam ut explicabo beatae magnam ullam, quis aut
          consequuntur dicta temporibus corrupti ea?
        </div>
      </div>
    </div>
  );
}

export default HomePage;
