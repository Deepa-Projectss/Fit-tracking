import React, { useState } from "react";
import './goals.css'
import { useNavigate } from "react-router";
import ProgressBar from "react-bootstrap/ProgressBar";


export default function Goals() {
    const navigate = useNavigate()

    const [select, setSelect] = useState(null)
    const changeColor = (index: any) => {
        setSelect(index)
    }

    return (
        <div className="goal-reach">
            <div className="detail-progress">
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={100} />
                <ProgressBar className="progress1" variant="success" now={0} />
            </div>
            <div className="goal-info">
                <div>
                    <img src={require('../../../images/goal-img1.svg').default} alt="" className="goal-img1" />
                </div>

                <div>
                    <img src={require('../../../images/goal-img2.svg').default} alt="" className="goal-img2" />
                </div>

                <div>
                    <img src={require('../../../images/personal-img3.svg').default} alt="" className="goal-img3" />
                </div>
            </div>
            <div className="goals-options">
                <div>
                    <button className="option" onClick={() => changeColor(1)} style={{ background: select === 1?'#FF7A00':''}}>Lose Weight</button>
                </div>
                <div>
                    <button className="option" onClick={() => changeColor(2)} style={{ background: select === 2?'#FF7A00':''}}>Maintain Weight</button>
                </div>
                <div>
                    <button className="option" onClick={() => changeColor(3)} style={{ background: select === 3?'#FF7A00':''}}>Gain Muscle</button>
                </div>
                <div>
                    <button className="option" onClick={() => changeColor(4)} style={{ background: select === 4?'#FF7A00':''}}>Improve Fitness</button>
                </div>
            </div>
            <div className="btn-option">
                <div className="back-button1">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        style={{ width: "50%" }}
                        onClick={() => navigate(-1)}
                    >Back</button>
                </div>
                <div className="next-button2">
                    <button type="button" className="btn btn-success" style={{ width: "105%", marginTop: "5px", marginLeft: "50px" }} onClick={() => navigate('/readySet')} >Next</button>
                </div>
            </div>
        </div >
    )
}