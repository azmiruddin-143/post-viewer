import React from 'react';
import PostCard from './components/shard/PostCard';

const page = async ()  => {

   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()


  return (
    <main>
        <PostCard data={data} ></PostCard>
    </main>
  );
};

export default page;