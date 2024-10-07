import React, { useState } from "react";
import './diet.css'
import { useLocation, useNavigate } from "react-router-dom";

export default function Diet() {

    const [selected, setSelected] = useState(null);

    const handleClick = (meal: any) => {
        setSelected(meal);
    };

    const diet = [
        {
            id: 1,
            pic1: require('../../images/overallCalories-img.svg').default,
            text: 'Overall Calories',
            calories: 3600,
        },
        {
            id: 2,
            pic1: require('../../images/caloriestaken-img.svg').default,
            text: 'Calories Taken',
            calories: 3600

        },
        {
            id: 3,
            pic1: require('../../images/extraTaken-img.svg').default,
            text: 'Extra Taken',
            calories: 0
        }
    ]

    const tableData = [
        {
            id: 1, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 2, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 3, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 4, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 5, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 6, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 7, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 8, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
        {
            id: 9, overallCalories: '3600', caloriesTaken: '3600', extraTaken: '0', Date: '29/04/2024'
        },
    ]

    const Navbars = () => {
        const location = useLocation(); // Get the current location
        const navigate = useNavigate();

        const getNavItemStyle = (path: any) => {
            return location.pathname === path ? { color: '#F96118' } : {};
        };
        return (
            <nav className=" navbar-light header-nav">
                <div className='fit-img'>
                    <img src={require('../../images/fit-img.svg').default} alt="" />
                </div>
                <div className="nav-menu">
                    <div className='nav-items' onClick={() => navigate('/home')}>
                        <img src={require('../../images/home-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <span className='text-name' >Home</span>
                    </div>
                    <div className="nav-items" style={{...getNavItemStyle('/diet'),cursor:'pointer'}} onClick={() => navigate('/diet')}>
                        <img src={require('../../images/diet-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <text className='text-name' style={{ textAlign: 'center' }}>Diet</text>
                    </div>
                    <div className="nav-items" onClick={() => navigate('/report')}>
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

    const header = () => {
        return (
            <div className="footer" style={{ border: '1px solid #D7D7D7', marginTop: '10px' }} >
                <div className="footer-text">
                    <text>Today’s Diet</text>
                </div>
                <div style={{ display: 'flex', padding: '10px' }}>
                    <div className="diet-plan">
                        {(diet || []).map((item: any) =>
                        (
                            <div key={item?.id}>
                                <div style={{ margin: '30px' }}>
                                    <img src={item?.pic1} style={{ paddingLeft: '35px' }} /><br />
                                    <text style={{ paddingLeft: '5px' }}>{item.text}</text><br />
                                    <text style={{ paddingLeft: '35px' }}>{item.calories}</text>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                    <div>

                    </div>
                    <div className='diet-food' style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }}>
                            <button className="add-btn">+</button>
                            <div style={{ display: 'flex', gap: '10px', }}>
                                <div className="food-container">
                                    <div>
                                        <button
                                            className={`food-time ${selected === "Breakfast" ? "selected" : ""}`}
                                            onClick={() => handleClick("Breakfast")}>Breakfast</button>
                                        <button className="food-time">Lunch</button>
                                        <button className="food-time">Snaks</button>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="food-items" style={{}}>
                                            <label htmlFor="name" style={{ paddingTop: '10px', paddingLeft: '28px' }}>Idly</label><br />
                                            <input type="value" style={{ height: '26px', width: '61px', marginLeft: '10px', marginTop: '5px', padding: '10px', border: 'none' }} value={'6'}></input>
                                        </div>
                                        <div className="food-items">
                                            <label htmlFor="name" style={{ paddingTop: '10px', paddingLeft: '22px' }}>Vada</label><br />
                                            <input type="value" style={{ height: '26px', width: '61px', marginLeft: '10px', marginTop: '5px', paddingLeft: '10px', border: 'none' }} value={'6'}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const previousDiet = () => {
        return (
            <div className="previous-Diet">
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <div className="previous-text" >
                        <text>Previous Diet</text>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '70%', paddingTop: '20px', gap: '15px' }}>
                        <div className="previous-all">
                            <select name="text" id="" style={{ height: '35px', width: '60px' }}>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <div className="previous-date">
                            <input type="date" style={{ height: '35px', width: '155px' }} />
                        </div>
                    </div>
                </div>
                <div className="previous-table">
                    <table>
                        <thead>
                            <tr>
                                <th><img src={require('../../images/overallCalories-img.svg').default} style={{ padding: '5px' }} alt="" />Overall Calories</th>
                                <th><img src={require('../../images/caloriestaken-img.svg').default} style={{ padding: '5px' }} alt="" />Calories Taken</th>
                                <th><img src={require('../../images/extraTaken-img.svg').default} style={{ padding: '7px' }} alt="" />Extra Taken</th>
                                <th><img src={require('../../images/Clock-timer.svg').default} style={{ padding: '7px' }} alt="" />Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(tableData || []).map((item: any) => (
                                <tr key={item.id}>
                                    <td>{item.overallCalories}</td>
                                    <td>{item.caloriesTaken}</td>
                                    <td>{item.extraTaken}</td>
                                    <td>{item.Date}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }

    return (
        <div>
            {Navbars()}
            {header()}
            {previousDiet()}
        </div>
    )
}