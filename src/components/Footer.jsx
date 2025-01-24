import React from 'react';

const Footer = () => {
    return (
        <div className='py-5  bg-gray-100 '>
            <div className='sm:flex container mx-auto items-center justify-between '>
                {/* <img className='w-28 mx-auto sm:mx-0' src={logo} alt="" /> */}
                <h1 className='text-black font-bold text-2xl'>Blog Viewer</h1>
                <h1 className='text-black'>© 2025 Azmir Uddin.All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;