import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='bg-base-200 '>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'}  >Home</Link></li>
                            <li><Link href={'/myprofile'}  >My Profile</Link></li>
                            <li><Link href={'/'}  >About</Link></li>
                            <li><Link href={'/'}  >Contact Us</Link></li>
                        </ul>
                    </div>
                    <a className="text-black font-bold  text-3xl">Blog Viewer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl px-1">
                        <li className='hover:border-b border-black'><Link href={'/'}  >Home</Link></li>
                        <li className='hover:border-b border-black'><Link href={'/myprofile'}  >My Profile</Link></li>
                        <li><Link href={'/'}  >About</Link></li>
                        <li><Link href={'/'}  >Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-3' >
                        <button className='bg-blue-400 py-2 px-4 rounded-md' >SignIn</button>
                        <button className='bg-blue-400 py-2 px-4 rounded-md'>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;