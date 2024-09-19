import React, { useState } from 'react'
import './signup.css';
import { useNavigate } from 'react-router';


function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSignin = () => {
        navigate(-1)
    }
    //it will manage the state
    const createAccount = (event: any) => {
        const correctName = 'abcd'
        const correctEmail = 'abc@123'
        const correctPassword = '123456'

        if (name === correctName && email === correctEmail && password === correctPassword) {
            navigate('/otpverify')
        } else {
            alert("invalid")
        }
    };


    return (
        <div className='signup-page' >
            <div className='left-card'>
                <img src={require('../../images/loginImage.svg').default} alt="" className='login-image' />
            </div>
            <div className='right-card' >
                <div className='logo-image'>
                    <img src={require('../../images/logo.svg').default} alt="" />
                </div>
                <header className='heading'>Sign in to account</header>
                <p className='summary'>Your journey to a healthier life starts here. </p>
                <form >
                    <div className='signup-input'>
                        <label htmlFor="fullname">Full name</label>
                        <div className='input-data'>
                            <img src={require('../../images/name-icon.svg').default} height='24' width='24' alt="" />
                            <input type="text"
                                className='input-value'
                                id='fullname'
                                placeholder='Enter full name'
                                onChange={(event) => { setName(event.target.value) }} required />
                        </div>
                    </div>
                    <div className='signup-input'>
                        <label htmlFor="email-address">Email Address</label>
                        <div className='input-data'>
                            <img src={require('../../images/email-icon.svg').default} height='24' width='24' alt="" />
                            <input type="email"
                                className='input-value'
                                id='email-address'
                                placeholder='Enter full name'
                                onChange={(event) => { setEmail(event.target.value) }} required />
                        </div>
                    </div>
                    <div className='signup-input'>
                        <label htmlFor="password">Password</label>
                        <div className='input-data'>
                            <img src={require('../../images/pw-icon.svg').default} height='24' width='24' alt="" />
                            <input type="password"
                                className='input-value'
                                id='password'
                                placeholder='Enter the password'
                                onChange={(event) => { setPassword(event.target.value) }} required />
                            <img src={require('../../images/eye-icon.svg').default} height='24' width='24' alt="" />
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success" style={{ width: '100%' }} onClick={createAccount}>Create Account</button>
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
                        <text className='have-account'>Already have an account? </text>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-success signin-btn" onClick={handleSignin}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
