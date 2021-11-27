import React, { useEffect, useState } from 'react'
import todolist from '../img/to-do-list.png';
import star from '../img/star.png';
import unseen from '../img/hidden.png';
import todolistcheck from '../img/verified.png';
import favourite from '../img/favorite.png';
import seen from '../img/view.png';
import { ContainerAddList } from '../elements/ResultElements';
import ReactTooltip from 'react-tooltip';
import { useAdd } from '../hooks/customHooks';
import { addToList } from '../services/ListServices';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

const AddList = ({idResult, title, urlImg, typeList}) => {
    const [tkn, setTkn] = useState('');

    useEffect(() => {
        if(localStorage.getItem('tk')){
            const token = jwt_decode(localStorage.getItem('tk'));
            setTkn(token);
        }
    }, [])
    
    const list = useAdd();
    const fav = useAdd();
    const see = useAdd();

    const handleList = async (tkn) => {
        try{
            const res = await addToList(idResult, tkn.username, title, urlImg, typeList);
            list.setAdd(!list.add);
            toast.success(res.data.message)
        }catch(error){
            return toast.error(error.response.data.message)
        }
    }

    return (
        <ContainerAddList>
            <span >
                <img 
                    src={list.add ? todolistcheck : todolist} 
                    alt="" 
                    data-tip={list.add ? 'Agregado a la Lista': 'Agregar a la Lista'}
                    onClick={() => handleList(tkn)}
                />
                
            </span>
            <span >
                <img 
                    src={fav.add ? favourite : star} 
                    alt="" 
                    data-tip={fav.add ? 'Agregado a Favorito' : 'Agregar a Favorito'}
                    onClick={() => fav.setAdd(!fav.add)} 
                />
                
            </span>
            <span >
                <img 
                    src={see.add ? seen : unseen} 
                    alt="" 
                    data-tip={see.add ? 'Agregado a Vistos' : 'Agregar a Vistos'}
                    onClick={() => see.setAdd(!see.add)} 
                />
            </span>
            <ReactTooltip />
        </ContainerAddList>
    )
}

export default AddList
