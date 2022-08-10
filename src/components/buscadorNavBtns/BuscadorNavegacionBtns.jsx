import React, { Fragment } from 'react'
//Elements
import { ContainerNavegacionBtns, ButtonsNav } from '../../elements/BuscadorElements';
//Functions
import { getPage } from './functions'

const BuscadorNavegacionBtns = ({handleLinks, animes, page}) => {

    const animeCount = animes.meta.count;

    return (
        <ContainerNavegacionBtns>
                {
                    Object.keys(animes.links).map( (link, index) => {
                      return (
                        <Fragment key={index}> 
                                <ButtonsNav
                                    onClick={(e) => handleLinks(e)}
                                    data-valor={link}
                                >
                                    {                                         
                                        getPage(link, page, animeCount)
                                    }
                                </ButtonsNav>                            
                        </Fragment>
                       ) 
                    })
                }
        </ContainerNavegacionBtns>
    )
}

export default BuscadorNavegacionBtns
