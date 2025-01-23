import React from 'react';

const PostCardRow = ({title,id}) => {
    return (
        <div className='bg-gray-200 rounded-md py-2 flex justify-between px-5 '>
             <h1 >{title}</h1>
             <button className='bg-blue-400 py-2 px-2 rounded-md' >View Details</button>
        </div>
    );
};

export default PostCardRow;