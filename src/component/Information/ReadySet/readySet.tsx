import React from "react";
import ProgressBar from "react-bootstrap//ProgressBar";
import './readySet.css'
import { useNavigate } from "react-router";

export default function ReadySetGo() {
    const navigate =useNavigate();
    const handleTracking=()=>{
      navigate('/home')
    }
    return (

        <div className="Ready-info">
            <div className="detail-progress">
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={100} />
            </div>
            
            <div style={{display:'flex', justifyContent:'center', height:'50px',margin:'15px'}}>
                <img src={require('../../../images/personal-img3.svg').default} alt="" />
            </div>
            <div className="fitness-logo" style={{display:'flex',justifyContent:'center'}}>
                <img src={require('../../../images/fitness-img.svg').default} alt="" style={{ height: '300px', margin:'-25px' }} />
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={require('../../../images/fitness-img2.svg').default} alt="" />
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:'2%'}}>
            <button type="button" className="btn btn-success" onClick={handleTracking}>Start Tracking</button>
            </div>
        </div>

    )
} 