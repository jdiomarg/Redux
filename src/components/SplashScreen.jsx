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
            <div>
                <img className='pokeTitle' src="src/assets/pokeTitle.gif" alt="" />
                <img className='subTitle' src="src/assets/Pokédex_3D_logo.png" alt="" />
            </div>
            <img className='splashAnimation' src="src/assets/pokeSplash.gif" alt="" />
            <button onClick={submit} className='startButton'>START</button>
            <p className='copyright'>App Developed for Academlo 2022 by Juanery Gonzalez</p>
        </div>
    );
};

export default SplashScreen;