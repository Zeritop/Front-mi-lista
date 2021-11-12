import React, { useState } from 'react'
import todolist from '../img/to-do-list.png';
import star from '../img/star.png';
import unseen from '../img/hidden.png';
import todolistcheck from '../img/verified.png';
import favourite from '../img/favorite.png';
import seen from '../img/view.png';
import { ContainerAddList } from '../elements/ResultElements';
import ReactTooltip from 'react-tooltip';
import { useAdd } from '../hooks/addHook';

const AddList = () => {
    
    const list = useAdd();
    const fav = useAdd();
    const see = useAdd();

    return (
        <ContainerAddList>
            <span >
                <img 
                    src={list.add ? todolistcheck : todolist} 
                    alt="" 
                    data-tip={list.add ? 'Added to List': 'Add to List'}
                    onClick={() => list.setAdd(!list.add)}
                />
                <ReactTooltip />
            </span>
            <span >
                <img 
                    src={fav.add ? favourite : star} 
                    alt="" 
                    data-tip={fav.add ? 'Added to Favourite' : 'Add to Favourite'}
                    onClick={() => fav.setAdd(!fav.add)} 
                />
                <ReactTooltip />
            </span>
            <span >
                <img 
                    src={see.add ? seen : unseen} 
                    alt="" 
                    data-tip={see.add ? 'Added to Seen' : 'Add to Seen'}
                    onClick={() => see.setAdd(!see.add)} 
                />
                <ReactTooltip />
            </span>
        </ContainerAddList>
    )
}

export default AddList
