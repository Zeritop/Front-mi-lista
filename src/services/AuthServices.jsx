import axios from 'axios';
import { API } from '../entorno';

// const API = window.location.hostname === 'localhost' || window.location.hostname === "127.0.0.1" ? 'http://localhost:4000' : 'https://backend-mi-lista.herokuapp.com/';

const registerAuth = async (username, email, password) => {
    return await axios.post(`${API}/api/users/register`, {
        username,
        email,
        password
    })
}

const loginAuth = async (email, password) => {
    return await axios.post(`${API}/api/users/login`, {
        email,
        password
    })
}

export {
    registerAuth,
    loginAuth
}