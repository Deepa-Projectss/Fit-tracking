import React, { useState } from 'react'
import './signup.css';
import { useNavigate } from 'react-router';

function Signup() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const navigate = useNavigate();

    const handleSignin = () => {
        navigate(-1); // Go back to the previous page (signin)
    };

    const createAccount = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent page reload on form submission

        let valid = true;

        // Reset error messages
        setNameError('');
        setEmailError('');
        setPasswordError('');

        // Validate full name
        if (name.trim() === '') {
            setNameError('Full name is required');
            valid = false;
        }

        // Validate email 
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.trim() === '') {
            setEmailError('Email address is required');
            valid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        }

        // Validate password
        if (password.trim() === '') {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            valid = false;
        }

        // If validation passes, proceed to OTP verification
        if (valid) {
            navigate('/otpverify');
        }
    };

    return (
        <div className='signup-page'>
            <div className='left-card'>
                <img src={require('../../images/loginImage.svg').default} alt="" className='login-image' />
            </div>
            <div className='right-card'>
                <div className='logo-image'>
                    <img src={require('../../images/logo.svg').default} alt="" />
                </div>
                <header className='heading'>Sign in to account</header>
                <p className='summary'>Your journey to a healthier life starts here.</p>
                <form onSubmit={handleSignin}>
                    <div className='signup-input'>
                        <label htmlFor="fullname">Full name</label>
                        <div className='input-data'>
                            <img src={require('../../images/name-icon.svg').default} height='24' width='24' alt="" />
                            <input type="text"
                                className='input-value'
                                id='fullname'
                                placeholder='Enter full name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required />
                        </div>
                        {nameError && <p className='error-message'>{nameError}</p>} {/* Show error if name is invalid */}
                    </div>
                    <div className='signup-input'>
                        <label htmlFor="email-address">Email Address</label>
                        <div className='input-data'>
                            <img src={require('../../images/email-icon.svg').default} height='24' width='24' alt="" />
                            <input type="email"
                                className='input-value'
                                id='email-address'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required />
                        </div>
                        {emailError && <p className='error-message'>{emailError}</p>} {/* Show error if email is invalid */}
                    </div>
                    <div className='signup-input'>
                        <label htmlFor="password">Password</label>
                        <div className='input-data'>
                            <img src={require('../../images/pw-icon.svg').default} height='24' width='24' alt="" />
                            <input type="password"
                                className='input-value'
                                id='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required />
                            <img src={require('../../images/eye-icon.svg').default} height='24' width='24' alt="" />
                        </div>
                        {passwordError && <p className='error-message'>{passwordError}</p>} {/* Show error if password is invalid */}
                    </div>
                    <div>
                        <button type="button" className="btn btn-success" style={{ width: '100%' }} onClick={createAccount}>Create Account</button>
                    </div>
                    <div>
                        <text className='signin'>Or sign in with</text>
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
                        <button type="button" className="btn btn-outline-success signin-btn" >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
