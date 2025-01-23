import React from 'react';

const Blogpage = ({params}) => {
    const {id} = params

    return (
        <div>
            page {id}
        </div>
    );
};

export default Blogpage;