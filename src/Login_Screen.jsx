import './App.css'
import {useEffect, useState} from "react";
import logo from './assets/logo.svg'
// const server_endpoint = ''
import {Link} from "react-router-dom";
const Login_Screen = () => {

    // useEffect(() => {
    //     fetch(server_endpoint,)
    // })
    // const [userLog,setUserLog] = useState()

    return (
    <div className='logscreen main'>
        <header className='appheader'>
            <img className='applogo' src={logo} alt="Oqyrman AI"/>
            <h1 className='apptitle'>OQYRMAN <br/> AI</h1>
        </header>
        <main className='applogmain'>
            <Link to={'/register'} className='appregister'>Join us</Link>
            <Link to={'/login'} className='applogin' href="">log in if you already have an account</Link>
        </main>
    </div>
  )
}

export default Login_Screen
