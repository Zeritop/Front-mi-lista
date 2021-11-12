import React, { useState } from 'react'
import Buscador from './Buscador';
import { connect } from 'react-redux';
import axios from 'axios';
import { Resultados, ContainerAMBtns, ButtonsAM } from '../elements/BuscadorElements';
import BuscadorNavegacionBtns from './BuscadorNavegacionBtns';

const BuscadorAnimeManga = ({getAnime, animes, getResultsByLinks, getResult, getGenres, setLoadResult}) => {

    const [anime, setAnime] = useState(true);
    const [inpAnime, setInpAnime] = useState('');
    const [load, setLoad] = useState(false);
    

    const messageAnime = {
        message: 'Buscar un Anime',
        messagePlaceholder: 'Buscar anime...'
    }

    const messageManga = {
        message: 'Buscar un Manga | Manhwa | Manhua',
        messagePlaceholder: 'Buscar manga...'
    }

    const animeManga = (e) => {
        const { valor } = e.target.dataset;
        if(valor === 'anime'){
            setAnime(true);
        }
        if(valor === 'manga'){
            setAnime(false);
        }
    }

    const handleChange = (e) => {
        setInpAnime(e.target.value)
        if(e.target.value === ''){
            setLoad(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getAnime(inpAnime, anime);
        setLoad(true);
    }

    const handleLinks = (e) => {
        const { innerText } = e.target
        switch(innerText){
            case 'FIRST':
                getResultsByLinks(animes.links.first);
                break;
            case 'PREV':
                getResultsByLinks(animes.links.prev);
                break;
            case 'NEXT':
                getResultsByLinks(animes.links.next);
                break;
            case 'LAST':
                getResultsByLinks(animes.links.last);
                break;    
            default: 
                break;    
        }
    }

    const handleLista = (anime) => {
        getResult(anime)
        getGenres(anime.relationships.genres.links.related)
        setLoadResult(true);
    }

    return (
        <div>
            <ContainerAMBtns>
                <ButtonsAM 
                    onClick={(e) => animeManga(e)}
                    data-valor="anime"
                    anime={anime && 'anime'}
                >
                Anime</ButtonsAM>

                <ButtonsAM
                    onClick={(e) => animeManga(e)}
                    data-valor="manga"
                    anime={!anime && 'manga'}
                >Manga</ButtonsAM>
            </ContainerAMBtns>
            <form onSubmit={handleSubmit} >
                <Buscador 
                    message={anime ? messageAnime.message : messageManga.message} 
                    messagePlaceholder={anime ? messageAnime.messagePlaceholder : messageManga.messagePlaceholder}
                    anime={anime}
                    inpAnime={inpAnime} 
                    handleChange={handleChange}
                />
            </form>
            <Resultados>
            {
               load && animes.data.map( anime => (
                   <ul key={anime.id}>
                       <li 
                        onClick={() => handleLista(anime)}
                       >
                           <p>{ anime.attributes.canonicalTitle }</p>
                           <img 
                                src={anime.attributes.posterImage.tiny} 
                                alt={anime.attributes.slug}
                            />
                        </li>
                        <hr />
                   </ul>
               ))
            }
            </Resultados>
            {
                load && <BuscadorNavegacionBtns handleLinks={handleLinks} animes={animes}/>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    animes: state.animes, 
})

const mapDispatchToProps = dispatch => ({
    async getAnime(inpAnime, anime){
        const res = await axios.get(`https://kitsu.io/api/edge/${anime ? 'anime' : 'manga'}?filter[text]=${inpAnime}`)
        dispatch({
            type: 'GET_ANIME_BY_NAME',
            payload: res.data
        })
        // console.log(res.data.data);
    },
    async getResultsByLinks(link){
        const res = await axios.get(`${link}`)
        dispatch({
            type: 'GET_RESULTS_BY_LINK',
            payload: res.data
        })
    },
    getResult(anime){
        dispatch({
            type: 'GET_RESULT',
            payload: anime
        })
    },
    async getGenres(anime){
        const res = await axios.get(anime)
        dispatch({
            type: 'GET_GENRE',
            payload: res.data.data
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BuscadorAnimeManga)