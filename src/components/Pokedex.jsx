import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterItem from "./CharacterItem";
import ReactPaginate from "react-paginate";
import "../css/pokedex.css"

const Pokedex = () => {

    const user = useSelector((state) => state.user);

    const [characters, setCharacters] = useState([]);
    const [types, setTypes] = useState([]);
    const [characterSearch, setCharacterSearch] = useState("")
    const [users, setUsers] = useState(characters?.slice(0, 3));
    const [pageNumber, setPageNumber] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0")
            .then((res) => setCharacters(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results))

        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0")
            .then((res) => setUsers(res.data.results));
    }, []);


    const search = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${characterSearch}`)
    }

    // const filterTypes = e => {
    //     axios.get(e.target.value)
    //         .then(res => setCharacters(res.data.pokemon));
    // }

    const filterTypes = (e) => {
        if (e.target.value !== "All") {
            axios.get(e.target.value)
                .then(res => setCharacters(res.data.pokemon));
        } else {
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0")
                .then((res) => setCharacters(res.data.results));
        }
    }

    console.log(characters);

    //   Paginate

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = characters?.slice(pagesVisited, pagesVisited + usersPerPage).map((character) => {
        return (
            <div style={{ paddingLeft: "0px", marginTop: "80px", marginBottom: "-50px" }} key={character.id} className="user">
                <CharacterItem characterUrl={character.url ? character.url : character} key={character.name ? character.name : character} />
            </div>
        );
    });


    const pageCount = Math.ceil(users?.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="pokedex">
            <img className="subTitleMain" src="https://github.com/jdiomarg/Redux/blob/master/src/assets/Pok%C3%A9dex_3D_logo.png?raw=true" alt="" />
            <div className="welcomeMessage">
                <h1 style={{ marginbottom: "0px" }}>Welcome <b style={{ color: "red" }}>{user},</b></h1> <br></br><p className="welcomeMessage" style={{ marginTop: "-40px" }}> here you can find your favorite Pokemon!</p>
            </div>
            <div className="box">
                <form className="search" onSubmit={search}>
                    <input type="text"
                        className="searchBox"
                        value={characterSearch}
                        name="txt"
                        placeholder="Search..."
                        onChange={(e) => setCharacterSearch(e.target.value)}
                    />
                    <button value={characterSearch} onClick={(e) => setCharacterSearch(e.target?.value)} id="search" className="fas fa-search"></button>
                </form>
            </div>
            <div style={{ marginBottom: "-40px" }}>

                <select className="select" onChange={filterTypes}>
                    <option value="All">All Pokemons</option>
                    {types.map((type) => (
                        <option value={type.url} key={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>

            </div>

            <div className="pokemonDisplay">
                {displayUsers}
            </div>

            <div className="App">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div >
    );
};

export default Pokedex;
