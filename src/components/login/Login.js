import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e =>{
        e.preventDefault();

        //firebase logics
    }

    const register = e => {
        e.preventDefault();
    
            
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="./images/logo.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"
                        value={email}
                        onChange={e=> setEmail(e.target.value )}
                    />

                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" 
                        onClick={signIn} 
                        className="login__signInButton">Sign in</button>
                </form>
                   <p>By signing in ypu agree to FLIP store condition of 
                       use, please see our prvacy notice, our cookies 
                       notice and our interest based Ads notice
                    </p>
                    <button
                    onClick={register}
                    className="login__registerButton">Create Account</button>
            </div>
        </div>
    )
}

export default Login