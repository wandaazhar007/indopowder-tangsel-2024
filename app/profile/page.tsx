'use client'
import { signIn, signOut, useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <h1>Welcome back</h1>
          <button onClick={() => signOut()}>Signin Out</button>
          <h1>{JSON.stringify(session)}</h1>
        </>
      ) : (
        <>
          <h1>You are not login</h1>
          <button onClick={() => signIn('google')}>Signin with Google</button>
          <button onClick={() => signIn('github')}>Signin with Github</button>
        </>
      )}
    </>
  );
}

export default ProfilePage; 