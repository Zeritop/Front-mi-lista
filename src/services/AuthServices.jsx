import axios from 'axios';
import { API } from '../entorno';

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

const getImgProfile = async (username) => {
    return await axios.post(`${API}/api/users/get-img-profile`, {
        username
    })
}

const uploadImage = async (formdata, config) => {
    return await axios.post(`${API}/api/usersTk/upload-profileImage`, formdata, config)
}

export {
    registerAuth,
    loginAuth,
    getImgProfile,
    uploadImage
}