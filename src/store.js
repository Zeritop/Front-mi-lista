import { createStore } from 'redux'

const initialState = {
    animes: [],
    result: [],
    genres: []
}

const reducerAnime = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ANIME_BY_NAME':
            return {
                ...state,
                animes: action.payload
            }
        case 'GET_RESULTS_BY_LINK':
            return {
                ...state,
                animes: action.payload
            }
        case 'GET_RESULT':
            return {
                ...state,
                result: action.payload
            }
        case 'GET_GENRE':
            return {
                ...state,
                genres: action.payload
            }              
        default:
            return state;
    }
}

export default createStore(reducerAnime);