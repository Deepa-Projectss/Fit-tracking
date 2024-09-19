import React from "react";

import './personalDetail.css'
import { useNavigate } from "react-router";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function PersonalDetail() {

    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/activityLevel')
    }

    return (
        <div className="personal-info">
            <div className="detail-progress">
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={0} />
                <ProgressBar className="progress1" variant="success" now={0} />
                <ProgressBar className="progress1" variant="success" now={0} />

            </div>
            <div className="info-details">
                <div>
                    <img src={require('../../../images/personal-img1.svg').default} alt="" className="info-img1" />
                </div>
                <div>
                    <img src={require('../../../images/personal-img2.svg').default} alt="" className="info-img2" />
                </div>
                <div>
                    <img src={require('../../../images/personal-img3.svg').default} alt="" className="info-img3" />
                </div>
            </div>
            <text className="gender">Gender</text>
            <div className="options" >
                <div className="gender-option">
                    <input type="radio" id="male" value="male" name="gender" />
                    <label htmlFor="male" className="gender-label">Male</label>
                </div>
                <div className="gender-option">
                    <input type="radio" id="female" value="female" name="gender"/>
                    <label htmlFor="female" className="gender-label">Female</label>
                </div>
                <div className="gender-option">
                    <input type="radio" id="other" value="other" name="gender" />
                    <label htmlFor="other" className="gender-label">Other</label>
                </div>
                <div className="age-option">
                    <label htmlFor="age" className="age">Age</label>
                    <div className="input-age">
                        <input type="text" placeholder="Enter Age" />
                    </div>
                </div>
            </div>
            <div className="charts" >
                <div className="height-chart">
                    <img style={{ height: '80%' }} src={require('../../../images/Height img.svg').default} alt="" />
                </div>
                <div className="weight-chart">
                    <img style={{ height: '80%' }} src={require('../../../images/Weight img.svg').default} alt="" />
                </div>

            </div>

            <div className="next-button1">
                <button type="button" className="btn btn-success " style={{ width: '10%' }} onClick={handleNext}>Next</button>
            </div>
        </div>

    )
}