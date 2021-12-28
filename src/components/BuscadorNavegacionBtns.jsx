import React, { Fragment } from 'react'
import { ContainerNavegacionBtns, ButtonsNav } from '../elements/BuscadorElements';

const BuscadorNavegacionBtns = ({handleLinks, animes, page}) => {
    const getPage = (link, page) => {
        let tmpPage = page;
        const lastPage = Math.ceil(animes.meta.count/10);
        switch (link) {
            case 'first':
                return tmpPage = 1
            case 'prev':
                return tmpPage > 1 ? tmpPage - 1 : page
            case 'next': 
                return tmpPage >= lastPage ? lastPage : tmpPage + 1 
            case 'last':
                return lastPage        
            default:
                break;
        }
    }

    return (
        <ContainerNavegacionBtns>
                {
                    Object.keys(animes.links).map( (link, index) => {
                      return (<Fragment key={index}> 
                            <ButtonsNav
                            onClick={(e) => handleLinks(e)}
                            data-valor={link}
                            >
                                {                                         
                                    getPage(link, page)
                                }
                            </ButtonsNav>                            
                       </Fragment>) 
                    })
                }
        </ContainerNavegacionBtns>
    )
}

export default BuscadorNavegacionBtns
