import React from 'react';
import './systemlog.css'
import {Link} from "react-router-dom";
import FacebookLogo from '../../assets/facebook.png'
import GoogleLogo from '../../assets/google.png'
const Login = () => {
    return (
        <div className='systemlog main'>

            <main className='logframe'>
                <form className='emailbox'>
                    <input className='systemlog-input' type="text" placeholder='Email'/>
                    <input type='password' className='systemlog-input'  placeholder='Password'/>
                    <Link to={'/homepage'} className='systemlog-btn btn-green'>
                        Continue
                    </Link>
                    <Link className='systemlog-passforgot'>Forgot password?</Link>
                </form>

                    <h1 className='systemlog-alternative'>Or</h1>
                <Link className='systemlog-btn systemlog-types'><img width='24px' height='24px' src={FacebookLogo} alt="facebook"/><h2 className='systemlog-typestitle'>Login with Facebook</h2></Link>
                <Link className='systemlog-btn systemlog-types'><img width='24px' height='24px' src={GoogleLogo} alt="google"/><h2 className='systemlog-typestitle'>Login with Google</h2></Link>
                <Link className='systemlog-signup'>Dont have an account? Sign up</Link>
            </main>
            <header>
                <h1 className='systemlog-phase'>Log in</h1>
            </header>
        </div>
    )
};

export default Login;