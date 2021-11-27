import axios from 'axios';
import validateUser from '../functions/validateUser';

const API = 'http://localhost:4000';

const addToList = async (idList, author, title, urlImg, typeList) => {
    return await axios.post(`${API}/api/lists/add-list`, {
        idList,
        author,
        title,
        urlImg,
        typeList
    }, {headers: validateUser()})
}

const updateToList = async (idList, author, title, urlImg, typeList, favourite, seen, userTk, id) => {
    return await axios.put(`${API}/api/lists/update-list`, {
        idList,
        author,
        title,
        urlImg,
        typeList,
        favourite,
        seen,
        userTk,
        _id: id
    }, {headers: validateUser()})
}

const deleteFromList = async (id, author, userTk) => {
    return await axios.delete(`${API}/api/lists/delete-list`, {
        data: {
            _id: id,
            author,
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