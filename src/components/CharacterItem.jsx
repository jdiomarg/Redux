import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CharacterItem = ({ characterUrl }) => {
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(characterUrl).then((res) => setCharacter(res.data));
    }, []);

    // console.log(character);

    const submit = (e) => {
        e.preventDefault();
        navigate(`/rickmorty/${character.id}`);
    };

    return (
        <div className="pokemonCard">
            <div id="pokcard">
                <h4 style={{ width: "200px", marginBottom: "0px", marginTop: "10px", color: "rgba(255,255,255,0.5)", textAlign: "left", paddingLeft: "20px", paddingBottom: "0", height: "25px" }}>#{character.id}</h4>
                <h2 style={{ width: "200px", marginTop: "-10px", marginBottom: "0px", paddingLeft: "20px", textAlign: "left", color: "rgba(255,255,255,0.8)", weight: "300px", height: "50px", fontSize: "2.5rem" }}>{character.name}</h2>
                <p style={{ textAlign: "left", paddingLeft: "20px", width: "140px", height: "30px", color: "rgba(255,255,255,0.5)", borderRadius: "10px", marginTop: "0px", marginBottom: "0" }}>Height: <b style={{ color: "rgba(255,255,255,0.7)" }}>{character.height}</b></p>
                <p style={{ width: "140px", height: "30px", color: "rgba(255,255,255,0.5)", borderRadius: "10px", marginTop: "0px", marginBottom: "0" }}>Weight: <b style={{ color: "rgba(255,255,255,0.7)" }}>{character.weight}</b></p>
            </div>
            <div>
                <img style={{ width: "260px", height: "300px", paddingLeft: "20px", paddingRight: "30px", marginTop: "30px", marginBottom: "10px" }} src={character.sprites?.other.dream_world.front_default} alt="" />
            </div>
            <hr className="solid" />
            <div className="cardButton">
                <p className="buttonHp">HP: {character.stats?.[0].base_stat}</p>
                <p className="buttonATT">ATTACK: {character.stats?.[1].base_stat}</p>
                <p className="buttonDEF">DEFENSE: {character.stats?.[2].base_stat}</p>
                <p className="buttonSPA">SP ATTACK: {character.stats?.[3].base_stat}</p>
                <p className="buttonSPD">SP DEFENSE: {character.stats?.[4].base_stat}</p>
                <p className="buttonSP">SPEED: {character.stats?.[5].base_stat}</p>
            </div>
            <button onClick={submit} className="infoButton">More Information</button>
        </div>
    );
};

export default CharacterItem;
