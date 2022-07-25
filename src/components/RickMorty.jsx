import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterItem from "./CharacterItem";
// import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../css/pokedex.css"

const RickMorty = () => {

    const user = useSelector((state) => state.user);

    const [characters, setCharacters] = useState([]);
    const [types, setTypes] = useState([]);
    const [characterSearch, setCharacterSearch] = useState("")
    const [users, setUsers] = useState(characters?.slice(0, 3));
    const [pageNumber, setPageNumber] = useState(0);

    const navigate = useNavigate();
    // const { id } = useParams();

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then((res) => setCharacters(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results))

        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0")
            .then((res) => setUsers(res.data.results));
    }, []);

    // console.log(characters);
    console.log(types);


    const search = (e) => {
        e.preventDefault();
        navigate(`/rickmorty/${characterSearch}`)
    }


    const filterTypes = (e) => {
        if (e.target.value !== "all") {
            axios.get(e.target.value)
                .then(res => setCharacters(res.data.pokemon));
        } else {
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0")
                .then((res) => setCharacters(res.data.results));
        }
    }

    //   Paginate

    const usersPerPage = 8;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users?.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return (
            <div style={{ paddingLeft: "0px", marginTop: "80px", marginBottom: "-50px" }} key={user.id} className="user">
                <CharacterItem characterUrl={user.url ? user.url : user} key={user.name ? user.name : user} />
            </div>
        );
    });

    const pageCount = Math.ceil(users?.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="pokedex">
            <img className="subTitleMain" src="src/assets/Pokédex_3D_logo.png" alt="" />
            <div className="welcomeMessage">
                <h1 style={{ marginbottom: "0px" }}>Welcome <b style={{ color: "red" }}>{user},</b></h1> <br></br><p style={{ fontSize: "0.9rem", marginTop: "-40px" }}> here you can find your favorite Pokemon!</p>
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
                    <button value={characterSearch} onClick={(e) => setCharacterSearch(e.target.value)} id="search" className="fas fa-search"></button>
                </form>
            </div>
            <div style={{ marginBottom: "-40px" }}>
                <select className="select" onChange={filterTypes}>
                    <option value="all">All Pokemons</option>
                    {
                        types?.map(type => (
                            <option value={type.url} key={type.url ? type.url : type}>{type.name}</option>
                        ))
                    }
                </select>
            </div>

            {/* <ul style={{ paddingLeft: "0px", marginTop: "80px" }}>
                {characters?.map(character => (
                    <CharacterItem characterUrl={character.url ? character.url : character} key={character.name ? character.name : character} />
                ))}
            </ul> */}
            <div className="App">
                {displayUsers}
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

export default RickMorty;