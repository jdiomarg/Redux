import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    const [pokemonStat, setPokemonStat] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => setPokemonStat(res.data));
    }, [id]);

    // console.log(pokemonStat);

    return (
        <div>
            <img src="src/assets/Pokédex_3D_logo.png" alt="" />
            <h1>{pokemonStat.name}</h1>
            <p>About:{pokemonStat.stats?.[0].base_stat}</p>
            <p>Height:{pokemonStat.height}</p>
            <p>Category:{pokemonStat.height}</p>
            <p>Type: {pokemonStat.types?.[0].type.name}, {pokemonStat.types?.[1]?.type.name}</p>
            <p>Abilities: {pokemonStat.abilities?.[0].ability.name}, {pokemonStat.abilities?.[1].ability.name}</p>
            <p >Hp: {pokemonStat.stats?.[0].base_stat}</p>
            <p >Attack: {pokemonStat.stats?.[1].base_stat}</p>
            <p>Defense: {pokemonStat.stats?.[2].base_stat}</p>
            <p >SP Attack: {pokemonStat.stats?.[3].base_stat}</p>
            <p>SP Defense: {pokemonStat.stats?.[4].base_stat}</p>
            <p >Speed: {pokemonStat.stats?.[5].base_stat}</p>
        </div>
    );
};

export default CharacterDetail;



