import React from 'react'
import { loginEndpoint } from '../../spotify'
import "./login.css";

export default function Login() {
  return (
    <div className='login-page'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png" alt="logo-spotify" className='logo'/>
        <a href={loginEndpoint}><div className='login-btn'>LOGIN</div></a>
    </div>
  )
}
