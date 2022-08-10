import axios from 'axios';
import validateUser from '../functions/validateUser';
import { API } from '../entorno';

const addToList = async (idList, description, title, urlImg, typeList, favourite = false, seen = false, userId) => {
    return await axios.post(`${API}/api/lists/add-list`, {
        idList,
        description,
        title,
        urlImg,
        typeList,
        favourite,
        seen,
        userId
    }, {headers: validateUser()})
}

const updateToList = async (nameLogin, id, favourite, seen, userTk) => {
    return await axios.put(`${API}/api/lists/update-list`, {
        nameLogin,
        id,
        favourite,
        seen,
        userTk
    }, {headers: validateUser()})
}

const deleteFromList = async (nameLogin, id, userTk) => {
    return await axios.delete(`${API}/api/lists/delete-list`, {
        data: {
            nameLogin,
            id,
            userTk
        },
        headers: validateUser()
    })
}

export {
    addToList,
    updateToList,
    deleteFromList
}