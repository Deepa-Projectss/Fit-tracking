import React, { useState } from "react";
import ReactPlayer from "react-player";
import 'react-multi-carousel/lib/styles.css';
import './home.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { url } from "inspector";

export default function Home() {

    const location = useLocation(); // Get the current location
    const navigate = useNavigate();

    const getNavItemStyle = (path: any) => {
        return location.pathname === path ? { color: '#F96118' } : {};
    };


    const activity = [
        {
            id: 1,
            image: require('../../images/step-img.svg').default,
            text: "Steps Taken",
            count: 400
        },
        {
            id: 2,
            image: require('../../images/time-img.svg').default,
            text: "Active(mins)",
            count: 40
        },
        {
            id: 3,
            image: require('../../images/calories-img.svg').default,
            text: "Calories Burned",
            count: 3600
        }
    ];

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

    const navbar = () => {
        return (
            <nav className=" navbar-light header-nav">
                <div className='fit-img'>
                    <img src={require('../../images/fit-img.svg').default} alt="" />
                </div>
                <div className="nav-menu">
                    <div className='nav-items' style={getNavItemStyle('/home')} onClick={() => navigate('/home')}>
                        <img src={require('../../images/home-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <span className='text-name' >Home</span>
                    </div>
                    <div className='nav-items' onClick={() => navigate('/diet')} >
                        <img src={require('../../images/diet-img.svg').default} alt="" style={{ cursor: 'pointer' }} />
                        <text className='text-name' style={{ textAlign: 'center' }}>Diet</text>
                    </div>
                    <div className='nav-items' onClick={() => navigate('/report')}>
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
    const todaysActivity = () => {
        return (
            <div>
                <text className="subHeader">Today's Activity</text>

                <div style={{ display: 'flex' }}>

                    {(activity || []).map((item: any) =>
                    (
                        <div key={item?.id} className="activity-card">
                            <div>
                                <img src={item?.image} alt="" />
                                <text style={{ paddingLeft: '5px' }}>{item.text}</text>
                            </div>
                            <text>{item?.count}</text>
                        </div>
                    )
                    )}
                    <button className="workout-img">
                        <img src={require('../../images/heart-workout.svg').default} alt="" />
                        <text>Workouts</text>
                    </button>
                </div>
            </div>
        )
    }
    const ExerciseVideo = () => {
        const exercise = [
            {
                id: 1,
                image1: require('../../images/clock(secs)-img.svg').default,
                image2: require('../../images/kcals-img.svg').default,
                mins: '15 Mins',
                calories: '35 Kcals'
            }
        ];
        // Default main video
        const [mainVideo, setMainVideo] = useState(require('../../videos/yoga1.mp4'));
        const [isImageSelected, setIsImageSelected] = useState(false); // To control if thumbnails and video should be visible
        const [selectedImageId, setSelectedImageId] = useState<number | null>(null); // Track selected image ID
        const video = [
            {
                id: 1,
                url: require('../../videos/yoga1.mp4'),
                img1: require('../../images/clock(secs)-img.svg').default,
                img2: require('../../images/kcals-img.svg').default,
                reps: '30 Reps',
                time: '30 Sec'
            },
            {
                id: 2,
                url: require('../../videos/yoga2.mp4'),
                img1: require('../../images/clock(secs)-img.svg').default,
                img2: require('../../images/kcals-img.svg').default,
                reps: '30 Reps',
                time: '30 Sec'
            },
            {
                id: 3,
                url: require('../../videos/yoga3.mp4'),
                img1: require('../../images/clock(secs)-img.svg').default,
                img2: require('../../images/kcals-img.svg').default,
                reps: '30 Reps',
                time: '30 Sec'
            },
            {
                id: 4,
                url: require('../../videos/yoga-vid1.mp4'),
                img1: require('../../images/clock(secs)-img.svg').default,
                img2: require('../../images/kcals-img.svg').default,
                reps: '30 Reps',
                time: '30 Sec'
            }
        ];
        // rightSide
        const imageItems = Array(10).fill(0);
        const popular = [
            {
                id: 1,
                txt: "Yoga for the Whole Body: Deep Stretch",
                img: require('../../images/person-yogapic.svg').default,
                pic1: require('../../images/clock(secs)-img.svg').default,
                pic2: require('../../images/kcals-img.svg').default,
                mins: '15 Mins',
                calories: '35 Kcals'
            }
        ];

        const handleImageClick = (id: number) => {
            if (selectedImageId === id) {
                setIsImageSelected(false);                         //if the video is selected then it will show the video thumbnails
                setSelectedImageId(null);
            } else {
                setIsImageSelected(true);               
                setSelectedImageId(id);

                // Set the main video to the one clicked in the thumbnail
                const selectedVideo = video.find(v => v.id === id);
                if (selectedVideo) {
                    setMainVideo(selectedVideo.url);
                }
            }
        };

        return (
            <div className="exercise-container">
                {/* Left Side */}
                <div className="left-side" style={{ flex: '1', position: 'relative', width: '100%', height: 'auto', overflowX: 'hidden', overflowY: 'auto' }}>
                    <div className="text-timer" style={{ display: 'flex' }}>
                        <div>
                            <p style={{ color: '#000000', fontSize: '14px', fontWeight: '500' }}>Yoga for the Whole Body:<br /> Deep Stretch</p>
                        </div>
                        <div style={{ marginLeft: '290px' }}>
                            {(exercise || []).map((item: any) => (
                                <div key={item.id} className="count-down" style={{ display: 'flex', gap: '10px' }}>
                                    <div>
                                        <img src={item?.image1} alt="" />
                                        <span style={{ padding: '3px' }}>{item?.mins}</span>
                                    </div>
                                    <div>
                                        <img src={item.image2} alt="" />
                                        <span style={{ padding: '3px' }}>{item.calories}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <ReactPlayer height={'50%'} width={'50%'} url={mainVideo} style={{ marginTop: '20px' }} />
                    </div>
                    {/* video thumbnails */}
                    {isImageSelected && (
                        <div>
                            <div style={{ display: 'flex', marginTop: 10, overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap', paddingBottom: '10px' }}>
                                {(video || []).map((items) => (
                                    <div key={items.id} onClick={() => setMainVideo(items.url)} style={{ marginRight: '20px', display: 'flex', position: 'relative' }}>
                                        <ReactPlayer height={'85px'} width={'135px'} url={items.url} controls={true} />
                                        <div style={{ width: '90px', paddingTop: '15px', paddingLeft: '7px' }}>
                                            <img src={items.img1} alt="" /> {items.time}
                                            <br />
                                            <img src={items.img2} style={{ padding: '7px 6px 9px 2px' }} alt="" />{items.reps}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Right Side */}
                <div className="right-side" style={{ flex: '1', background: '#FFFFFF' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                        <div className="popular-text">
                            <p>Popular Exercise</p>
                        </div>
                        <div>
                            <a href="#" style={{ color: '#026900' }}>View All</a>
                            <i className="bi bi-chevron-right" style={{ color: '#026900', paddingLeft: '5px' }}></i>
                        </div>
                    </div>
                    {/* Images to Select */}
                    <div className="popular-exercise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                        {imageItems.map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#f4f4f4',
                                    border: selectedImageId === index + 1 ? '2px solid green' : 'none'
                                }}
                                onClick={() => handleImageClick(index + 1)}>
                                <div>
                                    <p style={{ fontSize: '14px' }}>{popular[0].txt}</p>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <img src={popular[0].pic1} style={{ padding: '2px' }} alt="" />
                                            <span style={{ padding: '2px' }}>{popular[0].mins}</span>
                                        </div>
                                        <div>
                                            <img src={popular[0].pic2} style={{ padding: '2px' }} alt="" />
                                            <span style={{ padding: '2px' }}>{popular[0].calories}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={popular[0].img} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    const Footer = () => {
        const [selected, setSelected] = useState(null);

        const handleClick = (meal: any) => {
            setSelected(meal);
        };
        return (
            <div className="footer" style={{ border: '1px solid #D7D7D7', marginTop: '10px' }} >
                <div className="footer-text">
                    <text>Today’s Diet</text>
                </div>
                <div style={{ display: 'flex', padding: '20px' }}>
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
                                            <input type="value" value={6} style={{ height: '26px', width: '61px', marginLeft: '10px', marginTop: '5px', border: 'none', paddingLeft: '10px' }}></input>
                                        </div>
                                        <div className="food-items">
                                            <label htmlFor="name" style={{ paddingTop: '10px', paddingLeft: '22px' }}>Vada</label><br />
                                            <input type="value" value={6} style={{ height: '26px', width: '61px', marginLeft: '10px', marginTop: '5px', border: 'none', paddingLeft: '10px' }}></input>
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

    return (
        <div className="Activity-Screen">
            {navbar()}
            <div style={{ padding: 10 }}>
                {todaysActivity()}
                {ExerciseVideo()}
                {Footer()}
            </div>

        </div>
    )
}
