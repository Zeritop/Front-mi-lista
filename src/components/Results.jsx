import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { ConatinerResult,
    ResultHeader,
    ResultDetails,
    ResultDescription,
    NoResults
} from '../elements/ResultElements';
import AddList from './AddList';
import animeNoResult from '../img/anime-triste.png';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { API } from '../entorno';

const Results = ({result, genres, loadResult, getListByUser}) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if(localStorage.getItem('tk')){
            const tkn = jwt_decode(localStorage.getItem('tk'));
            setToken(tkn)
        }
    }, [])
    
    useEffect(() => {
        if(localStorage.getItem('tk')){
            let tiempo;
            tiempo = setTimeout(async () => {
                await getListByUser(token.username, API)
            }, 500)
    
            return(() => clearTimeout(tiempo))
        }
    }, [getListByUser, token.username])    

    return (
        <ConatinerResult>
            {
                loadResult ? (
                <div>
                    <ResultHeader>
                        <img src={result.attributes.posterImage.small} alt="" />
                        <ResultDetails>
                            <h1>{ result.attributes.canonicalTitle }</h1>
                            <label>Episodes: { result.attributes.episodeCount ? result.attributes.episodeCount : result.attributes.chapterCount }</label>
                            <ul>
                                <li> <b>Type:</b>  { result.type }</li>
                                <li> <b>Staus:</b>  { result.attributes.status }</li>
                                <li> <b>Subtype:</b>  { result.attributes.subtype }</li>
                            </ul>
                            <label>Genres: {
                                genres.map( genre => (
                                    <Fragment key={genre.id}>
                                        { genre.attributes.name }   |
                                    </Fragment>
                                ))
                            }</label>
                            
                        </ResultDetails>
                    </ResultHeader>
                    <AddList 
                        idResult={result.id} 
                        title={result.attributes.canonicalTitle}
                        urlImg={result.attributes.posterImage.tiny}
                        typeList={result.type } 
                    />
                    <ResultDescription>
                        { result.attributes.description }
                    </ResultDescription>
                    
                </div>)
                :
                ( <NoResults>
                    <img src={animeNoResult} alt="" />
                    <h2> Sin datos seleccionados </h2> 
                </NoResults> )
            }
            
        </ConatinerResult>
    )
}

const mapStateToProps = state => ({
    result: state.result,
    genres: state.genres
})

const mapDispatchToProps = dispatch => ({
    async getListByUser(author, API){
        const res = await axios.post(`${API}/api/lists-no-tk/get-lists`, {author})
        dispatch({
            type: 'GET_LISTS_BY_USER',
            payload: res.data.data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
