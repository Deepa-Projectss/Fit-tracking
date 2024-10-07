import React, { useState } from 'react';
import './loginScreen.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router';

function LoginScreen() {
    const [email, setEmail] = useState<any>('');  // Use a single email state
    const [password, setPassword] = useState<any>('');  // Use a single password state
    const [errorMessage, setErrorMessage] = useState<any>('');  // Error message state

    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('./signup');  // Navigate to the signup page
    };

    // Sign-in logic
    const signin = (event: any) => {
        event.preventDefault(); // Prevent page reload on form submission
        setErrorMessage('');  // Clear any previous error messages

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email || !password) {
            setErrorMessage('Email and password fields are required');   // Validate the input fields 
            return;
        }

        if (!emailPattern.test(email)) {
            setErrorMessage('Please enter a valid email address');
            console.log(errorMessage);

            return;
        }
        navigate('./otpverify');  // Navigate to OTP verification page
    };

    return (
        <div className='login-page'>
            <div className='left-card'>
                <img src={require('../../images/loginImage.svg').default} alt="" className='login-image' />
            </div>
            <div className='right-card'>
                <div className='logo-image'>
                    <img src={require('../../images/logo.svg').default} alt="" />
                </div>
                <header className='heading'>Sign in to account</header>
                <p className='summary'>Your journey to a healthier life starts here</p>
                <form onSubmit={signin}>
                    <div className='login-input'>
                        <label htmlFor="email" id='email'>Email Address:</label>
                        <div className='input-data'>
                            <i className="bi bi-envelope" style={{ paddingRight: 10 }}></i>
                            <input
                                type="email"
                                className='input-value'
                                id='email'
                                placeholder='Enter your email'
                                autoComplete='off'
                                value={email}
                                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                onChange={(event) => setEmail(event.target.value)}

                            />
                        </div>
                    </div>
                    <div className='login-input'>
                        <label htmlFor="password" id='password'>Password:</label>
                        <div className='input-data'>
                            <i className="bi bi-lock" style={{ paddingRight: 10 }}></i>
                            <input
                                type="password"
                                className='input-value'
                                id='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <i className="bi bi-eye-slash" style={{ paddingRight: 10 }}></i>
                        </div>
                    </div>

                    {/* Display error message if any */}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    <a className='forgot-pw' style={{ textAlign: 'center' }} href="./forgotPassword">Forgot password?</a>

                    <div>
                        <button type="submit" className="btn btn-success" style={{ width: '100%' }}>Sign in</button>
                    </div>
                    <div>
                        <p className='signin'>Or sign in with</p>
                    </div>
                    <div className='social-media'>
                        <img src={require('../../images/facebook.svg').default} height='40' width='40' alt="" />
                        <img src={require('../../images/google.svg').default} height='40' width='40' alt="" />
                        <img src={require('../../images/instagram.svg').default} height='40' width='40' alt="" />
                    </div>
                    <div>
                        <p className='no-account'>Don’t have an account yet?</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-success" onClick={handleSignup}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;
