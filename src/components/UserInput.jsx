import React from "react";
import { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/login.css"

// Actions:
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde la utilizaremos
// 4. Importar y ejecutar useDispatch
// 5. despachamos la acción

const UserInput = () => {
    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName));
        navigate("/pokedex");
    };

    return (
        <div className="loginSection">
            <img className="loginImage" src="src/assets/ash.png" alt="" />
            <form className="loginCard" onSubmit={submit}>
                <h1 id="hello">Hello trainer!</h1>
                <p style={{ fontSize: "0.8rem" }}>Give me your name to start this Journey</p>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button>Submit</button>
            </form>

        </div >
    );
};

export default UserInput;
