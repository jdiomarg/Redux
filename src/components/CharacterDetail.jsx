import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/pokemonDetail.css"
import { useNavigate } from 'react-router-dom';



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
            <img className="redShape" src="src/assets/redShape-01-01.svg" style={{ width: "100%", marginTop: "0px", zIndex: "-999" }} alt="" />
            <img className="logoDetail" src="src/assets/Pokédex_3D_logo.png" alt="" />
            <div style={{ marginLeft: "auto", marginRight: "auto", paddingBottom: "10px", borderRadius: "10px", backgroundColor: "red", width: "40%", height: "30px" }}>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
            <div className="detailCard">
                {/* <p>#00{pokemonStat.id}</p> */}
                <img src={pokemonStat.sprites?.other.dream_world.front_default} style={{ marginTop: "-80px" }} alt="" />
                <h1>{pokemonStat.name}</h1>
                <p>{pokeAbility?.effect_entries?.[1].short_effect}</p>
                <button style={{ width: "auto", padding: "0 20px" }} type="button" className="btn btn-primary">Type: <b>{pokemonStat.types?.[0].type.name.toUpperCase()} - {pokemonStat.types?.[1]?.type.name.toUpperCase()}</b></button>
            </div>
            <div>
                <h3 className="abilityTxt">Abilities</h3>
                <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                    <button style={{ width: "120px" }} type="button" className="btn btn-primary">{pokemonStat.abilities?.[0].ability.name}</button>
                    <button style={{ width: "120px", backgroundColor: "purple" }} type="button" className="btn btn-primary">{pokemonStat.abilities?.[1]?.ability.name}</button>
                </div>
                <div className="Stat1">
                    <div className="dashboard">
                        <p>Weight:</p><br></br><h1 style={{ color: "yellow" }}>{pokemonStat.weight}</h1>
                        <p>HGr</p>
                        <svg>
                            <circle style={{ strokeDasharray: 500 }} className="bg" cx="57" cy="57" r="52" />
                            <circle style={{ strokeDashoffset: -`${pokemonStat.weight}` + 100 }} className="meter-1" cx="57" cy="57" r="52" />
                            {/* style={{ strokeDashoffset: `${pokemonStat.weight}` }} */}
                        </svg>
                        <p>Height:</p><br></br><h1 style={{ color: "yellow" }}>{pokemonStat.height}</h1> <p>DcM</p>
                        <svg>
                            <circle style={{ strokeDasharray: 500 }} className="bg" cx="57" cy="57" r="52" />
                            <circle style={{ strokeDashoffset: -`${pokemonStat.height}` * 30 }} className="meter-2" cx="57" cy="57" r="52" />
                            {/* style={{ strokeDashoffset: `${pokemonStat.height}` }}  */}
                        </svg>
                        <p>Base Exp:</p><br></br><h1 style={{ color: "yellow" }}>{pokemonStat.base_experience}</h1>
                        <svg>
                            <circle style={{ strokeDasharray: 500 }} className="bg" cx="57" cy="57" r="52" />
                            <circle style={{ strokeDashoffset: -`${pokemonStat.base_experience}` - 50 }} className="meter-3" cx="57" cy="57" r="52" />
                            {/* style={{ strokeDashoffset: `${pokemonStat.base_experience}` }} */}
                        </svg>
                    </div>
                </div>
            </div>
            {/* <hr className="solid" /> */}
            <div>{pokemonStat.results?.sprites.front_shiny}</div>
            <div className="stat0">
                <div className="Stat2">
                    <i className="far fa-heart"></i>
                    <p className="statIcon" style={{ margin: "0", padding: "0", textAlign: "left" }}>Hp: <b style={{ color: "red" }}>{pokemonStat.stats?.[0].base_stat}</b></p>
                    <hr className="lines" /> <br />
                    <i className="fas fa-bolt"></i>
                    <p className="statIcon" style={{ margin: "0", padding: "0", textAlign: "left" }}>Attack: <b style={{ color: "red" }}>{pokemonStat.stats?.[1].base_stat}</b></p>
                    <hr className="lines" /> <br />
                    <i className="fas fa-shield-alt"></i>
                    <p className="statIcon" style={{ margin: "0", padding: "0", textAlign: "left" }}>Defense: <b style={{ color: "red" }}>{pokemonStat.stats?.[2].base_stat}</b></p>
                    <hr className="lines" /> <br />
                    <i className="fas fa-meteor"></i>
                    <p className="statIcon" style={{ margin: "0", padding: "0", textAlign: "left" }}>SP Attack: <b style={{ color: "red" }}>{pokemonStat.stats?.[3].base_stat}</b></p>
                    <hr className="lines" /> <br />
                    <i className="fas fa-user-shield"></i>
                    <p className="statIcon" style={{ margin: "0", padding: "0", textAlign: "left" }}>SP Defense: <b style={{ color: "red" }}>{pokemonStat.stats?.[4].base_stat}</b></p>
                    <hr className="lines" /> <br />
                    <i className="fas fa-tachometer-alt"></i>
                    <p className="statIcon" style={{ margin: "0", padding: "0", textAlign: "left" }}>Speed: <b style={{ color: "red" }}>{pokemonStat.stats?.[5].base_stat}</b></p>
                    <i className="bi bi-battery-charging"></i>
                </div>
            </div>
            <div style={{ backgroundColor: "red" }}>
                <button style={{ marginTop: "30px", marginBottom: "30px", width: "150px" }} onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div >
    );
};

export default CharacterDetail;



