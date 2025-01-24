
"use client"

import React from 'react';
import PostCardRow from './PostCardRow';

const PostCard = ({ data }) => {
    return (
        <div>
            <h1 className='container mx-auto text-2xl py-3'>All Post <span className='text-blue-500 font-bold'>{data.length}</span></h1>
            <div className='grid my-5 md:grid-cols-2 gap-5 container mx-auto '>
                {
                    data.map((post, index) => <PostCardRow key={post.id} id={post.id} title={post.title}  index ={index}   ></PostCardRow>)
                }
            </div>
        </div>
    );
};

export default PostCard;