"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Azmir/
const Profile =  () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated, isLoading, getUser } = useKindeBrowserClient();

    useEffect(() => {
        const fetchUser = async () => {
            if (isAuthenticated) {
                try {
                    const userInfo = await getUser();
                    setUser(userInfo);
                } catch (error) {
                    console.error("Error fetching user information:", error);
                } finally {
                    setLoading(false);
                }
            } else if (!isLoading) {
                router.push("/api/auth/login");
            }
        };

        if (!isLoading) {
            fetchUser();
        }
    }, [isAuthenticated, isLoading, getUser, router]);

    if (loading || isLoading) {
        return <div className="text-center flex justify-center items-center h-screen">Profile is Loading...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className='container mx-auto my-10'>
            <h2 className="text-4xl font-semibold">
                Welcome  <span className="font-bold uppercase">{user?.given_name} {user?.family_name}</span>
            </h2>

            <div className="space-y-1 mt-8 flex items-center">
                <div><h3 className="text-2xl font-semibold">My Information</h3>
                <p className="text-lg">Email: {user?.email}</p>
                <p className="text-lg">Full Name: {user?.given_name} {user?.family_name}</p></div>
                <Image className='rounded-sm'
                    referrerPolicy="no-referrer"
                    src={user?.picture}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />
            </div>
        </div>
    );
};

export default Profile;
