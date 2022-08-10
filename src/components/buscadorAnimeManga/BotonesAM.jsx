import React from 'react'
//Elements
import { ContainerAMBtns, ButtonsAM } from '../../elements/BuscadorElements'
//Functions
import { animeManga } from './functions'

const BotonesAM = ({anime}) => {
  return (
    <ContainerAMBtns>
        <ButtonsAM 
            onClick={(e) => animeManga(e, anime)}
            data-valor="anime"
            anime={anime.boolean && 'anime'}
        >
        Anime</ButtonsAM>

        <ButtonsAM
            onClick={(e) => animeManga(e, anime)}
            data-valor="manga"
            anime={!anime.boolean && 'manga'}
        >Manga</ButtonsAM>
    </ContainerAMBtns>
  )
}

export default BotonesAM