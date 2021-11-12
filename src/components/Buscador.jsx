import React from 'react'
import { ContainerBuscador, InputBuscador, ButtonSearch, ConatainerInput } from '../elements/BuscadorElements';
import search from '../img/search.png';

const Buscador = ({message, messagePlaceholder, anime, inpAnime, handleChange}) => {
    return (
        <ContainerBuscador>
            <label htmlFor="">{message}</label>
            <ConatainerInput>
                <InputBuscador 
                    type="text" 
                    placeholder={messagePlaceholder} 
                    name={anime ? 'anime' : 'manga'}
                    value={inpAnime}
                    onChange={handleChange}
                />
                <ButtonSearch type="submit" >
                    <img src={search} alt="search" />
                </ButtonSearch>
            </ConatainerInput>
        </ContainerBuscador>
    )
}

export default Buscador
