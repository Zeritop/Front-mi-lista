import React, { useEffect, useState, Fragment } from 'react'
//Components
import Buscador from '../Buscador';
import BuscadorNavegacionBtns from '../buscadorNavBtns/BuscadorNavegacionBtns';
import BotonesAM from './BotonesAM'
//Elements
import { Resultados, ContainerPrincipal } from '../../elements/BuscadorElements';
//Hooks
import { useBoolean } from '../../hooks/customHooks'
//Functions
import { messageAnime, messageManga } from './functions'
//Others
import { connect } from 'react-redux';
import axios from 'axios';

const BuscadorAnimeManga = ({getAnime, animes, getResultsByLinks, getResult, getGenres, setLoadResult, lastPage, page, nextPage, firstPage, prevPage}) => {

    const [inpAnime, setInpAnime] = useState('');

    const scrollOnTop = useBoolean();
    const anime       = useBoolean(true);
    const goTop       = useBoolean();
    const load        = useBoolean();

    useEffect(() => {
        if(goTop.boolean){
            // De ser verdadero encuentra el div con Scroll y manda el scroll hacia el inicio con un efecto smooth
            document.getElementById("resultados").scrollTo({top: 0, behavior: 'smooth'})
            goTop.setBoolean(false) 
        }
    }, [goTop])

    const handleChange = (e) => {
        const { value } = e.target

        value === '' && load.setBoolean(false)
        setInpAnime(value)
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getAnime(inpAnime, anime.boolean);
        load.setBoolean(true);
    }

    const handleLinks = (e) => {
        const { valor } = e.target.dataset
        switch(valor){
            case 'first':
                getResultsByLinks(animes.links.first);
                // Pregunta si scroll no esta en el inicio, de ser así la variable 'goTop' queda en true
                if(!scrollOnTop.boolean) goTop.setBoolean(true)
                // Reestablece el estado de la paginación al inicial (1)
                firstPage()
                break;
            case 'prev':
                getResultsByLinks(animes.links.prev);
                // Pregunta si scroll no esta en el inicio, de ser así la variable 'goTop' queda en true
                if(!scrollOnTop.boolean) goTop.setBoolean(true)
                // Le resta 1 al estado de paginación
                prevPage()
                break;
            case 'next':
                getResultsByLinks(animes.links.next);
                // Pregunta si scroll no esta en el inicio, de ser así la variable 'goTop' queda en true
                if(!scrollOnTop.boolean) goTop.setBoolean(true)
                // Le suma 1 al estado de paginación
                nextPage()
                break;
            case 'last':
                getResultsByLinks(animes.links.last);
                // Pregunta si scroll no esta en el inicio, de ser así la variable 'goTop' queda en true
                if(!scrollOnTop.boolean) goTop.setBoolean(true)
                // Se redondea hacia arriba el numero total de resultados para determinar el numero de paginas
                // En la funcion lastPage se envia el numero de la ultima pagina y se actualiza el estado con ese  numero
                lastPage(Math.ceil(animes.meta.count/10))
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

    const handleScroll = (e) => {
        // Esta función se ejecuta cuando se hace scroll por la propiedad onScroll del div Resultados
        // Pregunta si el scroll está en el inicio, si no lo está la variable 'scrollOnTop' queda falso
        e.target.scrollTop === 0 ? scrollOnTop.setBoolean(true) : scrollOnTop.setBoolean(false)
    }

    return (
        <ContainerPrincipal>
            <BotonesAM anime={anime} />
        
            <form onSubmit={handleSubmit} >
                <Buscador 
                    message={anime.boolean ? messageAnime.message : messageManga.message} 
                    messagePlaceholder={anime.boolean ? messageAnime.messagePlaceholder : messageManga.messagePlaceholder}
                    anime={anime.boolean}
                    inpAnime={inpAnime} 
                    handleChange={handleChange}
                />
            </form>
            <Resultados onScroll={handleScroll} id="resultados" >
            <ul>
                {
                    load.boolean && animes.data.map( anime => (
                        <Fragment key={anime.id}>
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
                        </Fragment>    
                    ))
                }
            </ul>
            </Resultados>
            {
                load.boolean && <BuscadorNavegacionBtns 
                    handleLinks={handleLinks} 
                    animes={animes}
                    page={page}
                />
            }
        </ContainerPrincipal>
    )
}

const mapStateToProps = state => ({
    animes: state.animes,
    page: state.page 
})

const mapDispatchToProps = dispatch => ({
    async getAnime(inpAnime, anime){
        const res = await axios.get(`https://kitsu.io/api/edge/${anime ? 'anime' : 'manga'}?filter[text]=${inpAnime}`)
        dispatch({
            type: 'GET_ANIME_BY_NAME',
            payload: res.data
        })
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
    },
    lastPage(pageNumber){
        dispatch({
            type: 'LAST_PAGE',
            payload: pageNumber
        })
    },
    nextPage(){
        dispatch({
            type: 'NEXT_PAGE'
        })
    },
    firstPage(){
        dispatch({
            type: 'FIRST_PAGE',
            payload: 1
        })
    },
    prevPage(){
        dispatch({
            type: 'PREV_PAGE'
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BuscadorAnimeManga)