import React from "react";
import './activityLevel.css'
import { useNavigate } from "react-router";
import ProgressBar from "react-bootstrap/ProgressBar";


export default function ActivityLevel() {

    const navigate = useNavigate();

    const handleBackbtn = () => {
        navigate('/personalDetail')
    }
    const handleNextbtn = () => {
        navigate('/goals')
    }

    return (
        <div className="activity-details">
            <div className="detail-progress">
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={0} />
                <ProgressBar className="progress1" variant="success" now={0} />
            </div>
            <div className="level-info">
                <div>
                    <img src={require('../../../images/activity-img1.svg').default} alt="" className="activ-img1" />
                </div>
                <div>
                    <img src={require('../../../images/activity-img2.svg').default} alt="" className="activ-img2" />
                </div>
                <div>
                    <img src={require('../../../images/personal-img3.svg').default} alt="" className="activ-img3" />
                </div>
            </div>
            <div className="activ-options">
                <div>
                    <button className="option">Lightly active</button>
                </div>
                <div>
                    <button className="option">Moderately active</button>
                </div>
                <div>
                    <button className="option">Very active</button>
                </div>
                <div>
                    <button className="option">Super Active</button>
                </div>
            </div>
            <div className="btn-options">
                <div className="back-button1">
                    <button type="button" className="btn btn-outline-success" style={{ width: "50%", }} onClick={handleBackbtn}>Back</button>
                </div>
                <div className="next-button2">
                    <button type="button" className="btn btn-success" style={{ width: "200%", marginTop:"5px", marginLeft:"0px" }} onClick={handleNextbtn}>Next</button>
                </div>
            </div>
        
        </div>
    )
}