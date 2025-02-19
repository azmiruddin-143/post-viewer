import React from 'react';

const Blogpage = async ({ params }) => {
    const { id } = await params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await data.json();


    return (


        <div className='h-screen mx-auto container'>
            <div className="space-y-4 my-5   rounded-lg mx-auto">
                <h2 className="text-2xl  font-medium">{blog?.title}</h2>
                <p className='w-8/12'>{blog?.body}</p>
            </div>
        </div>

    );
};

export default Blogpage;