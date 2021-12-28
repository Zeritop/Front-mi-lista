import { createStore } from 'redux'

const initialState = {
    animes: [],
    result: [],
    genres: [],
    users: [],
    lists: [],
    loggedIn: false,
    page: 1
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
        case 'GET_USER':
            return {
                ...state,
                users: action.payload
            }
        case 'GET_LISTS_BY_USER':
            return {
                ...state,
                lists: action.payload
            }
        case 'LOGGED_IN':
            return {
                ...state,
                loggedIn: action.payload
            }
        case 'LAST_PAGE':
            return {
                ...state,
                page: action.payload
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page +1
            }
        case 'FIRST_PAGE':
            return {
                ...state,
                page: state.page = action.payload
            }
        case 'PREV_PAGE':
            return {
                ...state,
                page: state.page -1
            }                          
        default:
            return state;
    }
}

export default createStore(reducerAnime);