import React, { useState } from 'react'
import OtpInput from "react-otp-input";
// import LoginImage from '../../images/loginImage'
import './otpverify.css'
import { useNavigate } from 'react-router';
export default function OtpVerification() {

    const [code, setCode] = useState("");

    const navigate = useNavigate()

    const handleDetails = (event: any) => {

        if (optFilled) {
            navigate('/personalDetail');
        } else {
            console.log("OTP not filled correctly");
        }

    };

    const handleChange = (code: any) => setCode(code);

    const optFilled = code.length === 4;

    return (
        <div className='otpverify-page' style={{ height: '80vh', margin: 10 }}>
            <div className='left-card'>
                <img src={require('../../images/loginImage.svg').default } alt="" className='login-image' />
            </div>
            <div className='right-card'>
                <img src={require("../../images/Otpverify.svg").default} className='otp-image' alt="" />
                <header className='heading'>OTP Code Verification</header>
                <text className='summary'>We send the verification code to name@gmail.com</text>
                <form>
                    <OtpInput
                        value={code} // The OTP code state, which should be an array
                        onChange={handleChange}
                        numInputs={4}
                        renderSeparator={<span style={{ width: '8px' }}></span>}
                        renderInput={(props, index) => (  // Ensure both props and index are included here
                            <input
                                {...props}
                                value={code[index] || ''}  // Show the value or an empty string
                                placeholder="-"            // Use dash as a placeholder if empty
                                style={{
                                    border: "1px solid #D5D8E2",
                                    borderRadius: "8px",
                                    width: "60px",
                                    height: "60px",
                                    fontSize: "20px",
                                    padding: "10px",
                                    marginTop: '10px',
                                    marginRight: '12px',
                                    color: "#000",
                                    fontWeight: "400",
                                    // display:'flex',
                                    // justifyContent:'flex-start',             
                                    backgroundColor: "#fff",
                                    textAlign: "center",
                                    outline: "none",
                                    boxSizing: "border-box",
                                    caretColor: 'transparent',
                                }}
                            />
                        )}
                        shouldAutoFocus={true}
                    />

                    <p className='resend'>Resend the code in{ }</p>

                    <div>
                        <button type="button" className={`btn btn-secondary continue-btn ${optFilled ? 'enabled' : 'disabled'}`} value={code} disabled={!optFilled} onClick={handleDetails}>Continue</button>
                    </div>


                </form>
            </div>
        </div>
    )
}


