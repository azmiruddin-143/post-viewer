
"use client"

import React from 'react';
import PostCardRow from './PostCardRow';

const PostCard = ({ data }) => {
    return (
        <div className='grid my-5 md:grid-cols-2 gap-5 container mx-auto'>
             {
                data.map(post =>  <PostCardRow  key={post.id}  title = {post.title}  ></PostCardRow>)
             }
        </div>
    );
};

export default PostCard;