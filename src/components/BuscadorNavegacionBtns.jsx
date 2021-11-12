import React from 'react'
import { ContainerNavegacionBtns, ButtonsNav } from '../elements/BuscadorElements';

const BuscadorNavegacionBtns = ({handleLinks, animes}) => {
    return (
        <ContainerNavegacionBtns>
                {
                    Object.keys(animes.links).map( (link, index) => (
                        <ButtonsNav
                        onClick={(e) => handleLinks(e)}
                        key={index}
                        >
                            { link }
                        </ButtonsNav>
                    ))
                }
        </ContainerNavegacionBtns>
    )
}

export default BuscadorNavegacionBtns
