
// import Image from "next/image";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Header = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

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
                            <Link
                                href={"/"}
                                prefetch={true}
                                className={"font-semibold hover:underline hidden sm:flex"}
                            >
                                Home
                            </Link>

                            <Link
                                href={user ? "/profile" : "/api/auth/login"}
                                className={"font-semibold hover:underline hidden sm:flex"}
                            >
                                Profile
                            </Link>
                        </ul>
                    </div>
                    <a className="text-black font-bold  text-3xl">Blog Viewer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-2 items-center menu-horizontal text-xl px-1">
                        <Link
                            href={"/"}
                            prefetch={true}
                            className={"font-semibold hover:underline hidden sm:flex"}
                        >
                            Home
                        </Link>

                        <Link
                            href={user ? "/profile" : "/api/auth/login"}
                            className={"font-semibold hover:underline hidden sm:flex"}
                        >
                            Profile
                        </Link>


                    </ul>
                </div>
                <div className="navbar-end">
                    
                    {user ? (
                        <>
                            <LogoutLink postLogoutRedirectURL="/">
                                <button className="bg-blue-400 text-white rounded-md py-2 px-4" >Logout</button>
                            </LogoutLink>
                        </>
                    ) : (
                        <LoginLink>
                            <button className="bg-blue-400 text-white rounded-md py-2 px-4">Login</button>
                        </LoginLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;