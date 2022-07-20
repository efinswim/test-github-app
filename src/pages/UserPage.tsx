import { skipToken } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { IRepo } from '../models/models';
import { useGetUserQuery, useGetUserReposQuery } from '../store/github/github.api';

function UserPage() {
  const [search, setSearch] = React.useState<string>('');
  const { username } = useParams<string>();

  const {
    isLoading,
    isError,
    data: user,
  } = useGetUserQuery(username ?? skipToken, {
    refetchOnFocus: true,
  });

  const {
    isLoading: isLoadingRepos,
    isError: isErrorRepos,
    data: userRepos,
  } = useGetUserReposQuery(username ?? skipToken, {
    refetchOnFocus: true,
  });

  const filtredRepos = userRepos?.filter((repo: IRepo) =>
    repo?.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const userReposMarkUp = filtredRepos?.map((repos) => (
    <div key={repos?.id} className="flex justify-between w-[860px]">
      <p>{repos?.name}</p>
      <div className="">
        <p>{repos?.forks_count} Fork</p>
        <p>{repos?.stargazers_count} Stars</p>
      </div>
    </div>
  ));

  return (
    <div className="">
      <div className="flex justify-center items-center mt-10">
        <div className="h-[200px] w-[200px]">
          <img src={user?.avatar_url} alt="" />
        </div>
        <div className="ml-10">
          <ul>
            <li>User name: {user?.name}</li>
            <li>Email: {user?.email}</li>
            <li>Location: {user?.location}</li>
            <li>Join date: {user?.created_at}</li>
            <li>Followers: {user?.followers}</li>
            <li>Following: {user?.following}</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="w-[860px]">
          <p className="text-center">{user?.bio}</p>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="relative w-[560px]">
          <input
            type="text"
            className="border px-4 py-2 w-full h-[42px] mb-2"
            placeholder={`Search for ${user?.login} repository`}
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center flex-col-reverse divide-y divide-y-reverse mt-10">
        {userReposMarkUp}
      </div>
    </div>
  );
}

export default UserPage;
