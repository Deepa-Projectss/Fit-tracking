import React, { useState } from 'react'
import './loginScreen.css'
import "bootstrap-icons/font/bootstrap-icons.css";
// import ForgotPassword from './forgotPassword';
import OtpVerification from '../OTPVerfication/otpverify';
import { useNavigate } from 'react-router';
function LoginScreen() {
    const [emailId, setEmailId] = useState<any>('')
    const [passwords, setPasswords] = useState<string>('')
    //to navigate the next page bu using this
    const navigate = useNavigate()

    const handleSignup = () => {
        navigate('./signup')//if we click signup button then it move to the signup page
    }

    //password and email is correct it move to page otpverify
    const sigin = (event: any) => {
        const correctEmail = 'varun@123'
        const correctPassword = 'varunraj123'


        if (emailId === correctEmail && passwords === correctPassword) {
            navigate('./otpverify')
        } else {
            alert("invalid email and password")
        }

    };
    return (
        <div className='login-page' >
            <div className='left-card' >
                <img src={require('../../images/loginImage.svg').default} alt="" className='login-image' />
            </div>
            <div className='right-card' >
                <div className='logo-image'>
                    <img src={require('../../images/logo.svg').default} alt="" />
                </div>
                <header className='heading'>Sign in to account</header>
                <p className='summary'>Your journey to a healthier life starts here</p>
                <form>
                    <div className='login-input'>
                        <label htmlFor="email">Email Address:</label>
                        <div className='input-data'>
                            <i className="bi bi-envelope" style={{ paddingRight: 10 }}></i>
                            <input type="text"
                                className='input-value'
                                id='email'
                                placeholder='Enter full name'
                                autoComplete='off'
                                value={emailId}
                                onChange={(event) => setEmailId(event.target.value)} required />
                        </div>
                    </div>
                    <div className='login-input' >
                        <label htmlFor="password">Password:</label>
                        <div className='input-data'>
                            <i style={{ paddingLeft: 10 }} className="bi bi-lock" ></i>
                            <input type="password"
                                className='input-value'
                                id='password'
                                placeholder='Create Password'
                                value={passwords}
                                onChange={(event) => setPasswords(event.target.value)} required />
                            <i className="bi bi-eye-slash" style={{ paddingRight: 10 }}></i>
                        </div>
                    </div>

                    <a className='forgot-pw' style={{ textAlign: 'center' }} href="./forgotPassword">Forgot password?</a>

                    <div>
                        <button type="button" className="btn btn-success" style={{ width: '100%' }} onClick={sigin}>Sign in</button>
                    </div>
                    <div>
                        <text className='sigin'>Or sign in with</text>
                        <div className='social-media'>
                            <img src={require('../../images/facebook.svg').default} height='40' width='40' alt="" />
                            <img src={require('../../images/google.svg').default} height='40' width='40' alt="" />
                            <img src={require('../../images/instagram.svg').default} height='40' width='40' alt="" />
                        </div>
                    </div>
                    <div>
                        <text className='no-account'>Don’t have an account yet?</text>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-success" onClick={handleSignup}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen