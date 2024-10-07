import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import './personLogin.css'
import ReactPlayer from "react-player";

export default function PersonLogin() {
    const Navbar = () => {
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
                <div className="nav-menu" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
                    <div className='nav-items'>
                        <img src={require('../../images/home-img.svg').default} alt="" />
                        <span className='text-name' >Home</span>
                    </div>
                    <div className="nav-items" onClick={() => navigate('/diet')} style={{ cursor: 'pointer' }}>
                        <img src={require('../../images/diet-img.svg').default} alt="" />
                        <text className='text-name' style={{ textAlign: 'center' }}>Diet</text>
                    </div>
                    <div className="nav-items" onClick={() => navigate('/report')} style={{ cursor: 'pointer' }}>
                        <img src={require('../../images/report-img.svg').default} alt="" />
                        <text className='text-name'>Report</text>
                    </div>
                </div>
                <div className="profile-img" style={{cursor:'pointer'}}>
                    <img src={require('../../images/profile-img.svg').default} alt="" style={{ ...getNavItemStyle('/personLogin'), cursor: 'pointer', border:'2px solid #F96118',borderRadius:'50%' }}/>
                </div>
            </nav>
        )
    }
    const ProfileDetail = () => {
        return (
            <div style={{ display: 'flex',}}>
                <div>
                    <img className="profile-imgs" src={require('../../images/profileimage.svg').default} alt="" />
                </div>
                <div className="profile-text">
                    <text>Gilbert Jasper Raj</text><br />
                    <text>gilbertjasperraj@gmail.com</text>
                </div>
                <div style={{ marginTop: '50px', marginLeft: '35px' }}>
                    <img src={require('../../images/edit-image.svg').default} alt="" />
                </div>
                <div style={{ marginLeft: '44%' }}>
                    <button className="changing-password" >Change Password</button><br />
                    <button className="loging-out">Log Out</button>
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

                setIsImageSelected(false);
                setSelectedImageId(null);
                setMainVideo(mainVideo)
            } else {

                setIsImageSelected(true);
                setSelectedImageId(id);
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
                                        <ReactPlayer height={'100px'} width={'120px'} url={items.url} controls={true} />
                                        <div style={{ width: '90px', padding: '20px 0px 0px 10px' }}>
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
                    <div className="popular-exercise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px', padding: '10px', height: '343px', overflowY: 'scroll' }}>
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
    return (
        <div>
            {Navbar()}
            {ProfileDetail()}
            {ExerciseVideo()}
        </div>
    )
}