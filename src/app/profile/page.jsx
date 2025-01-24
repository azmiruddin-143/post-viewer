import useAuth from '@/lib/useAuth';
import React from 'react';
const { isAuthenticated, getUser } = useAuth();
  const user = await getUser();
  const { email, family_name, given_name, picture } = user || {};
const Profile = async () => {
    return (await isAuthenticated()) ? (
        <div>
        ai div er moddhe design korben ok?
        <h1>{email}</h1>
        <h2>{family_name}</h2>
        <h2>{given_name}</h2>
        <h2>{picture}</h2>
        </div>
        ) : (
        redirect("/api/auth/login")
        );
};

export default Profile;



