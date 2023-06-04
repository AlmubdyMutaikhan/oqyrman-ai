import React from 'react';
import {Link} from "react-router-dom";
import FacebookLogo from "../../assets/facebook.png";
import GoogleLogo from "../../assets/google.png";

const Register = () => {
    return (
        <div className='systemlog main sysreg'>

            <main className='logframe'>
                <form className='emailbox'>
                    <input className='systemlog-input' type="text" placeholder='Name'/>
                    <input className='systemlog-input' type="text" placeholder='Email'/>
                    <input type='password' className='systemlog-input'  placeholder='Password'/>
                    <p className='systemlog-agreement'>By selecting Create Account below, I agree to Terms of Service & Privacy Policy</p>
                    <Link to={'/register/preferences'} className='systemlog-btn btn-green'>
                        Create account
                    </Link>
                </form>
                <Link className='systemlog-signup'>Already have an account? Log in</Link>
            </main>
            <header>
                <h1 className='systemlog-phase'>Tyrkelu</h1>
            </header>
        </div>
    );
};

export default Register;