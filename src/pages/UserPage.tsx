import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../store/github/github.api';

type UserParams = {
  username: string;
};

function UserPage() {
  const [search, setSearch] = React.useState('');
  const { username } = useParams<UserParams>();


  const { isLoading, isError, data } = useGetUserQuery(username, {
    refetchOnFocus: true,
  });

  return (
    <div className="">
      <div className="flex justify-center items-center mt-10">
        <div className="h-[200px] w-[200px]">
          <img src="https://avatars.githubusercontent.com/u/77920513?v=4" />
        </div>
        <div className="ml-10">
          <ul>
            <li>User name:</li>
          </ul>
          <ul>
            <li>Email:</li>
          </ul>
          <ul>
            <li>Location:</li>
          </ul>
          <ul>
            <li>Join date:</li>
          </ul>
          <ul>
            <li>Followers:</li>
          </ul>
          <ul>
            <li>Following:</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="w-[860px]">
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa perferendis reiciendis
            aliquid amet a. Non blanditiis fugiat enim vel eum cum, debitis architecto quo. Incidunt
            voluptatibus alias dolore sequi impedit.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="relative w-[560px]">
          <input
            type="text"
            className="border px-4 py-2 w-full h-[42px] mb-2"
            placeholder="Search for user repository"
            //value={search}
            //onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="flex items-center flex-col-reverse divide-y divide-y-reverse mt-10">
        <div className="flex justify-around w-[860px]">
          <p>Repo Name</p>
          <div className="">
            <p>2 Fork</p>
            <p>3 Stars</p>
          </div>
        </div>
        <div className="flex justify-around w-[860px]">
          <p>Repo Name</p>
          <div className="">
            <p>2 Fork</p>
            <p>3 Stars</p>
          </div>
        </div>
        <div className="flex justify-around w-[860px]">
          <p>Repo Name</p>
          <div className="">
            <p>2 Fork</p>
            <p>3 Stars</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
