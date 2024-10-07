import React from "react";
import './report.css'
import { useLocation, useNavigate } from "react-router";
import ReactECharts from 'echarts-for-react';
import WaveChart from "../Chart/waveChart";


export default function Report() {

    const option = {
        legend: {},
        dataset: {
            source: [
                // ['Category', '1', '2', '3', '4', '5'], 
                [' 1', 0.5, 1.5, 1.5, 0.5, 0.5, 1.5, 1.5],
                [' 2', 0.5, 1, 2, 2, 2, 0.5, 0.5],
                [' 3', 0.5, 1.3, 1.7, 0.5, 1.7, 1.3, 0.5],
                [' 4', 0.5, 0.5, 0.5, 1.7, 0.5, 0.5, 1.7],
                [' 5', 0, 0, 0, 0, 0.5, 1.7, 0.5],
            ]
        },
        xAxis: {
            type: 'category',
            name: 'Weeks',
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 14,
                padding: 20,
                color: '#000000',
            }, axisLine: {
                show: true,
                lineStyle: {
                    color: '#CFCFCF',
                },
            },
            axisLabel: {
                color: '#000000',
            },
        },
        yAxis: {
            min: 0,
            max: 4,
            name: 'Hrs',
            nameLocation: 'middle',
            nameRotate: 90,
            nameTextStyle: {
                fontSize: 14,
                padding: 30,
                color: '#000000',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#CFCFCF',
                },
            },
            axisLabel: {
                color: '#000000',
            },
            splitLine: {
                show: false // Remove background grid lines for x-axis
            }
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#FF7A00',
                    borderRadius: [10, 10, 0, 0]
                },
                barWidth: '5%',
                barGap: '1px'
            },
        ]
    };

    const Navbar = () => {
        const location = useLocation(); // Get the current location
        const navigate = useNavigate();

        // Check the current path and set styles dynamically
        const getNavItemStyle = (path: any) => {
            return location.pathname === path ? { color: '#F96118' } : {};
        };
        return (
            <nav className=" navbar-light header-nav">
                <div className='fit-img'>
                    <img src={require('../../images/fit-img.svg').default} alt="" />
                </div>
                <div className="nav-menu" onClick={() => navigate('/home')}>
                    <div className='nav-items'>
                        <img src={require('../../images/home-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <span className='text-name' >Home</span>
                    </div>
                    <div className="nav-items" onClick={() => navigate('/diet')}>
                        <img src={require('../../images/diet-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <text className='text-name' style={{ textAlign: 'center' }}>Diet</text>
                    </div>
                    <div className="nav-items" style={{...getNavItemStyle('/report'),cursor:'pointer'}} onClick={() => navigate('/report')} >
                        <img src={require('../../images/report-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <text className='text-name'>Report</text>
                    </div>
                </div>
                <div className="profile-img" onClick={() => navigate('/personLogin')} style={{ cursor: 'pointer' }}>
                    <img src={require('../../images/profile-img.svg').default} alt="" />
                </div>
            </nav>
        )
    }
    const reports = () => {
        return (
            <div className="report-container">
                <div style={{ display: 'flex', }}>
                    <div className="reports">
                        <div className="report-contents">
                            <div className="report-text">
                                <span>Reports</span>
                            </div>
                            <div className="report-input" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <input type="date" placeholder="This Month" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ marginTop: '-40px' }}>
                                <WaveChart />
                                <div>
                                    {/* <img src={require('../../images/stepstakenimg.png').default} alt="" /> */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="cals-count" style={{ height: '200px', width: '200px', backgroundColor: 'white' }}>
                                    <div>
                                        <img src={require('../../images/rep-calories.svg').default} style={{ marginTop: '5px', marginLeft: '80px', marginBottom: '10px' }} alt="" /><br />
                                        <text className="report-img1">Calories Burned</text><br />
                                        <text style={{ margin: '65px', fontSize: '14px' }}>3600<span style={{ color: 'gray' }}>cal</span></text>
                                    </div>
                                    <div>
                                        <img src={require('../../images/rep-monthlyGoal.svg').default} style={{ marginTop: '10px', marginLeft: '80px', marginBottom: '10px' }} alt="" /><br />
                                        <text className="report-img2">Monthly Goal</text><br />
                                        <text style={{ margin: '60px', fontSize: '14px' }}>7000<span style={{ color: 'gray' }}>steps</span></text>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        </div> */}
                    </div>
                    <div className="activity-rep">
                        <div className="report-activity" style={{ padding: '20px', marginRight: '20px ' }}>
                            <div className="activity-content">
                                <div className="activity-text">
                                    <span>Today’s Activity</span>
                                </div>
                                <div className="activity-input" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <input type="date" placeholder="This Month" />
                                </div>
                            </div>
                            <div className="exercise-timimg">
                                <div style={{ display: 'flex', gap: '20px', margin: '10px' }}>
                                    <div className="exercise-cal">
                                        <img src={require('../../images/step-img.svg').default} style={{ marginBottom: '5px' }} alt="" />
                                        <span className="texts">Step Taken</span><br />
                                        <span>400</span>
                                    </div>
                                    <div className="exercise-cal">
                                        <img src={require('../../images/time-img.svg').default} style={{ margin: '5px' }} alt="" />
                                        <span className="texts">Active</span> <span style={{ color: '#3E3E3E', fontSize: '12px' }}>(mins)</span><br />
                                        <span className="count-val" style={{ paddingTop: '10px' }}>400</span>
                                    </div>
                                </div>
                                <div className="calories-cal">
                                    <img src={require('../../images/calories-img.svg').default} style={{ margin: '5px' }} alt="" />
                                    <span className="texts">Calories Burned</span><br />
                                    <span className="count-val" style={{ paddingTop: '10px' }}>400</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exercises-containers">
                    <div className="exercisess">
                        <div className="erxercises-contents">
                            <div className="exercises-text">
                                <span>Exercise</span>
                            </div>
                            <div className="exercises-input" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <input type="date" placeholder="This Month" />
                            </div>
                        </div>
                        <div >
                            <ReactECharts option={option} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {Navbar()}
            {reports()}
        </div>
    )
}