import React from 'react';
import { useGetUsersByNameQuery } from '../store/github/github.api';
import { useDebounce } from '../hooks/debounce';

function HomePage() {
  const [search, setSearch] = React.useState('');
  const [dropdown, setDropdown] = React.useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useGetUsersByNameQuery(debounced, {
    skip: debounced.length < 2,
  });
  React.useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length! > 0);
  }, [debounced, data]);

  return (
    <div className="flex justify-center pt-10 mx-auto">
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
          onChange={(event) => setSearch(event.target.value)}
        />

        {dropdown && (
          <ul className="list-none absolute top-[42px] py-2 left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="text-center">Loading</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                className="flex hover:bg-gray-700 hover:text-white transition-colors cursor-pointer">
                <div className="h-[32px] w-[32px] mx-4">
                  <img src={user.avatar_url} alt={user.login} />
                </div>
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HomePage;
