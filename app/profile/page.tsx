'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
// import jwt_decode from 'jwt-decode';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { default as jwt_decode } from 'jwt-decode';


const ProfilePage = () => {
  const { data: session } = useSession();
  const [name, setname] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const refreshToken = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_TOKEN as string,);
      // setToken(response.data.accessToken);
      console.log('data login', response.data)
      // const decoded: any = jwt_decode(response.data.accessToken);
      // console.log(response.data.accessToken)
      // console.log(decoded)
      // setname(decoded.name);
      // setImage(decoded.urlImage);
      // setEmail(decoded.email);
      // setRole
      // setExpire(decoded.exp);
    } catch (error: any) {
      console.log(error)
      if (error.response) {
        router.push('/login');
      }
    }
  }
  useEffect(() => {
    refreshToken();
  }, [])
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