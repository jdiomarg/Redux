import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/pokemonDetail.css"
import { Link, Routes, Route, useNavigate } from 'react-router-dom';


const CharacterDetail = () => {
    const [pokemonStat, setPokemonStat] = useState({});
    const [pokeAbility, setPokeAbility] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => setPokemonStat(res.data));
        axios.get(`https://pokeapi.co/api/v2/ability/${id}`).then((res) => setPokeAbility(res.data));
    }, [id]);

    console.log(pokeAbility);

    return (
        <div className="pokeDetail">
            <img src="src/assets/redShape-01-01.svg" style={{ width: "100%", marginTop: "0px", zIndex: "-999" }} alt="" />
            <img src="src/assets/Pokédex_3D_logo.png" style={{ width: "80%" }} alt="" />
            <div className="detailCard">
                {/* <p>#00{pokemonStat.id}</p> */}
                <img src={pokemonStat.sprites?.other.dream_world.front_default} style={{ marginTop: "-80px" }} alt="" />
                <h1>{pokemonStat.name}</h1>
                <p>{pokeAbility?.effect_entries?.[1].short_effect}</p>
                <p>Type: <b>{pokemonStat.types?.[0].type.name.toUpperCase()} {pokemonStat.types?.[1]?.type.name.toUpperCase()}</b></p>
            </div>
            <div>
                <h3>Abilities</h3>
                <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                    <button style={{ width: "120px" }}>{pokemonStat.abilities?.[0].ability.name}</button>
                    <button style={{ width: "120px", backgroundColor: "purple" }}>{pokemonStat.abilities?.[1]?.ability.name}</button>
                </div>
                <div className="Stat1">
                    <i className="fas fa-weight-hanging"></i>
                    <i className="fas fa-arrows-alt-v"></i>
                    <p style={{ width: "150px", margin: "0", padding: "0", color: "white" }} className="cardWeight">Weight: <b>{pokemonStat.weight}</b> gr</p>
                    <p style={{ width: "150px", margin: "0", padding: "0" }}>Height: <b>{pokemonStat.height}</b> cm</p>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <p style={{ width: "150px", margin: "0", padding: "0" }}>Category: <b>{pokemonStat.height}</b></p>
                    <p style={{ width: "150px", margin: "0", padding: "0" }}>Category: <b>{pokemonStat.height}</b></p>
                </div>
            </div>
            <hr className="solid" />
            <div>{pokemonStat.results?.sprites.front_shiny}</div>
            <div className="Stat2">
                <i className="far fa-heart"></i>
                <p style={{ width: "200px", margin: "0", padding: "0", textAlign: "left" }}>Hp: <b style={{ color: "red" }}>{pokemonStat.stats?.[0].base_stat}</b></p>
                <i className="fas fa-bolt"></i>
                <p style={{ width: "200px", margin: "0", padding: "0", textAlign: "left" }}>Attack: <b style={{ color: "red" }}>{pokemonStat.stats?.[1].base_stat}</b></p>
                <i className="fas fa-shield-alt"></i>
                <p style={{ width: "200px", margin: "0", padding: "0", textAlign: "left" }}>Defense: <b style={{ color: "red" }}>{pokemonStat.stats?.[2].base_stat}</b></p>
                <i className="fas fa-meteor"></i>
                <p style={{ width: "200px", margin: "0", padding: "0", textAlign: "left" }}>SP Attack: <b style={{ color: "red" }}>{pokemonStat.stats?.[3].base_stat}</b></p>
                <i className="fas fa-user-shield"></i>
                <p style={{ width: "200px", margin: "0", padding: "0", textAlign: "left" }}>SP Defense: <b style={{ color: "red" }}>{pokemonStat.stats?.[4].base_stat}</b></p>
                <i className="fas fa-tachometer-alt"></i>
                <p style={{ width: "200px", margin: "0", padding: "0", textAlign: "left" }}>Speed: <b style={{ color: "red" }}>{pokemonStat.stats?.[5].base_stat}</b></p>
            </div>
            <div style={{ backgroundColor: "red" }}>
                <button style={{ marginTop: "30px", marginBottom: "30px", width: "150px" }} onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    );
};

export default CharacterDetail;



