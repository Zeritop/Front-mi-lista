import axios from 'axios';

const API = 'http://localhost:4000';

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