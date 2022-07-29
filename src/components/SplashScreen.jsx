import React from 'react';
import "../css/splashScreen.css"
import { useNavigate } from "react-router-dom";



const SplashScreen = () => {

    const navigate = useNavigate();

    const submit = (e) => {
        e?.preventDefault();
        navigate("/login");
    };

    return (
        <div className='loadingScreen' style={{ textalign: "center" }}>
            <div className='topBrand'>
                <img className='pokeTitle' src="https://github.com/jdiomarg/Redux/blob/master/src/assets/pokeTitle.gif?raw=true" alt="" />
                <img className='subTitle' src="https://github.com/jdiomarg/Redux/blob/master/src/assets/Pok%C3%A9dex_3D_logo.png?raw=true" alt="" />
            </div>
            <img className='splashAnimation' src="https://github.com/jdiomarg/Redux/blob/master/src/assets/pokeSplash.gif?raw=true" alt="" />
            <button onClick={submit} className='startButton'>START</button>
            <p className='copyright'>App Developed for Academlo 2022 by Juanery Gonzalez</p>
        </div>
    );
};

export default SplashScreen;
