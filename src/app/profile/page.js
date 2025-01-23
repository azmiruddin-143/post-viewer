import Image from "next/image";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';
const { getUser } = getKindeServerSession()
const user = await getUser()
console.log(user);
// Azmir/
const Profile = () => {

    return (
        <div className='container mx-auto my-10'>
            <h2 className="text-4xl font-semibold">
                Welcome  <span className="font-bold uppercase">{user?.given_name} {user?.family_name}</span>
            </h2>

            <div className="space-y-1 mt-8 flex items-center">
                <div><h3 className="text-2xl font-semibold">My Information</h3>
                    <p className="text-lg">Email: {user?.email}</p>
                    <p className="text-lg">Full Name: {user?.given_name} {user?.family_name}</p></div>
                <Image
                    className="rounded-sm"
                    referrerPolicy="no-referrer"
                    src={user?.picture || '/default-image.png'} // ডিফল্ট ছবি ব্যবহার
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />

            </div>
        </div>
    );
};

export default Profile;
