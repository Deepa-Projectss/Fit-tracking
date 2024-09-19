import React from "react";
import './report.css'
import { useNavigate } from "react-router";
import { text } from "stream/consumers";
import { workerData } from "worker_threads";

export default function Report() {

    const navigate = useNavigate()
    const report=[
        {
            id:1,
            
        }
    ]

    const navbar = () => {
        return (
            <nav className=" navbar-light header-nav">
                <div className='fit-img'>
                    <img src={require('../../images/fit-img.svg').default} alt="" />
                </div>
                <div className="nav-menu" onClick={() => navigate('/home')}>
                    <div className='nav-items'>
                        <img src={require('../../images/home-img.svg').default} alt="" />
                        <span className='text-name' >Home</span>
                    </div>
                    <div className="nav-items" onClick={() => navigate('/diet')}>
                        <img src={require('../../images/diet-img.svg').default} alt="" />
                        <text className='text-name' style={{ textAlign: 'center' }}>Diet</text>
                    </div>
                    <div className="nav-items" onClick={() => navigate('/report')}>
                        <img src={require('../../images/report-img.svg').default} alt="" />
                        <text className='text-name'>Report</text>
                    </div>
                </div>
                <div className="profile-img">
                    <img src={require('../../images/profile-img.svg').default} alt="" />
                </div>
            </nav>

        )


    }
    const reports = () => {
        return (
            <div style={{ display: 'flex' }}>
                <div className="reports" style={{ padding: '20px', background: '#F4F4F4' }}>
                    <div className="report-contents">
                        <div className="report-text">
                            <span>Reports</span>
                        </div>
                        <div className="report-input" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <input type="date" placeholder="This Month" />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="step-count">
                            <text>hello</text>
                        </div>
                        <div className="cals-count" style={{ height: '250px', width: '200px', backgroundColor: 'white' }}>
                            <div>
                                <img src={require('../../images/rep-calories.svg').default} style={{ marginTop: '20px', marginLeft: '80px', marginBottom: '10px' }} alt="" /><br />
                                <text className="report-img1">Calories Burned</text><br />
                                <text style={{ margin: '65px', fontSize: '14px' }}>3600<span style={{ color: 'gray' }}>cal</span></text>
                            </div>
                            <div>
                                <img src={require('../../images/rep-monthlyGoal.svg').default} style={{ marginTop: '20px', marginLeft: '80px', marginBottom: '10px' }} alt="" /><br />
                                <text className="report-img2">Monthly Goal</text><br />
                                <text style={{ margin: '60px', fontSize: '14px' }}>7000<span style={{ color: 'gray' }}>steps</span></text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity-rep">
                    <div className="report-activity" style={{ padding: '20px', }}>
                        <div className="activity-content">
                            <div className="activity-text">
                                <span>Today’s Activity</span>
                            </div>
                            <div className="activity-input" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <input type="date" placeholder="This Month" />
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {navbar()}
            {reports()}
        </div>
    )
}