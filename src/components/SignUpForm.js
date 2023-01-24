import React, { useRef, useState } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"  

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const SignUpForm = () => {

    const userRef = useRef();
    const errRef = useRef(); 

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    return (
        <div>
            <input type="text" placeholder="Enter Username"></input>
            <input type="text" placeholder="Enter Email"></input>
            <input type="text" placeholder="Enter Access Token"></input>
            <input type="text" placeholder="Enter Password"></input>
            <button type="submit">Sign Up</button>
        </div>
    )

} 
export default SignUpForm