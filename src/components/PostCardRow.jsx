import Link from 'next/link';
import React from 'react';

const PostCardRow = ({ title, id, index }) => {
    return (
        <div className='bg-gray-200 rounded-md py-2 flex justify-between px-5 '>
            <div className='flex items-center gap-2'>
                <h1>{index + 1}</h1>
                <h1 >{title}</h1>
            </div>
            <Link href={`/blog/${id}`} ><button className='bg-blue-400 py-2 px-2 rounded-md' >View Details</button></Link>
        </div>
    );
};

export default PostCardRow;