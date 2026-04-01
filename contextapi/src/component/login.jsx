import React, { useState } from "react"
import Usedata from "../context/userContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = Usedata();
    const {user} = Usedata();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("login");
        setUser({username, password});
       
    }
    return (
        <div>
            <h1>Login Form</h1>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            {" "}
            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}