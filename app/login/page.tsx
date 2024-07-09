'use client'
import { useEffect, useState } from 'react';
import './login.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react";

const LogiPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  return (

    <section className="login">
      {/* <div className="container"> */}
      <div className="box">
        <div className="header">
          <div className="logo">
            <img src='./assets/images/logo-indopodwer-tangsel.png' />
          </div>
          <div className="title">
            <h1>Indopowder Tangsel</h1>
            {/* <p>Please login to your account</p> */}
          </div>
          <div className="socialMediaLogin">
            <button className="buttonSocial googleButton" onClick={() => signIn('google')}>
              <Image src="/assets/images/google-logo.png" width={25} height={25} alt='indopowder tangsel' />
              <span> Login with Google</span>
            </button>
            <button className="buttonSocial githubButton" onClick={() => signIn('github')}>
              <FontAwesomeIcon icon={faGithub} className='icon' />
              <span>Login with Github</span>
            </button>
          </div>
        </div>
        {msg && (<p className='errorMessage'>{msg}</p>)}
        <div className="content">

          <form >
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="buttonLoginWrapper">
              <button className='btnLogin'>
                Login <FontAwesomeIcon icon={faSignIn} className="icon" />
              </button>
            </div>
          </form>
        </div>

        <div className="footerLogin">
          <p>do not have account yet? <Link href="/register">Sign Up</Link></p>
          <p>Go back to <Link href="/">Home Page</Link></p>
        </div>

      </div>
      {/* </div> */}
    </section>

  );
}

export default LogiPage;