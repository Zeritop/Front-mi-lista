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
import { addToList, deleteFromList, updateToList } from '../services/ListServices';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import axios from 'axios';
import { API } from '../entorno';

const AddList = ({idResult, title, urlImg, typeList, lists, getListByUser}) => {
    const [tkn, setTkn] = useState('');
    const getToken = localStorage.getItem('tk')
    const list = useAdd();
    const fav = useAdd();
    const see = useAdd();

    useEffect(() => {
        if(getToken){
            const token = jwt_decode(getToken);
            setTkn(token);
        }
    }, [getToken])

    useEffect(() => {
        if(lists.length !== 0){
            const exist = lists.map(l => l.idList).includes(idResult);
            if(exist){
                const resultList = lists.filter(l => l.idList === idResult)
                resultList[0].favourite ? fav.setAdd(true) : fav.setAdd(false)
                resultList[0].seen ? see.setAdd(true) : see.setAdd(false)
                list.setAdd(true)
            }else{
                list.setAdd(false)
                fav.setAdd(false)
                see.setAdd(false)
            }
        }
    }, [fav, list, see, idResult, lists])
    
    const handleList = async (e, tkn) => {
        const { name } = e.target;
        if(!localStorage.getItem('tk')){
            return toast.warning('Inicia sesión para esta acción')
        }else{
            if(lists.length !== 0){
                const inArray = lists.map(l => l.idList).includes(idResult);
                const findInList = lists.filter(l => l.idList === idResult)
                let favourite;
                let seen;
                switch(name){
                    case 'lista':
                        if(!inArray){
                            try{
                                const res = await addToList(idResult, tkn.username, title, urlImg, typeList);
                                await getListByUser(tkn.username, API)
                                list.setAdd(true);
                                toast.success(res.data.message)
                            }catch(error){
                                return toast.error(error.response.data.message)
                            }
                        }else{
                            try{
                                const res = await deleteFromList(findInList[0]._id, findInList[0].author, tkn.username)
                                await getListByUser(tkn.username, API)
                                list.setAdd(false);
                                toast.success(res.data.message);
                            }catch(error){
                                return toast.error(error.response.data.message)
                            }
                        }
                        break;
                    case 'favoritos':
                        if(!inArray){
                            try{
                                favourite = true;
                                seen = false;
                                const res = await addToList(idResult, tkn.username, title, urlImg, typeList, favourite, seen);
                                await getListByUser(tkn.username, API)
                                list.setAdd(true);
                                toast.success(res.data.message)
                            }catch(error){
                                return toast.error(error.response.data.message)
                                
                            }
                        }else{
                            try{
                                const res = await updateToList(idResult, findInList[0].author, title, urlImg, typeList, !findInList[0].favourite, seen, tkn.username, findInList[0]._id)
                                await getListByUser(tkn.username, API)
                                // list.setAdd(true)
                                toast.success(res.data.message)
                            }catch(error){
                                return toast.error(error.response.data.message)
                            }
                        }
                        break;
                    case 'vistos':
                        if(!inArray){
                            try{
                                favourite = false;
                                seen = true;
                                const res = await addToList(idResult, tkn.username, title, urlImg, typeList, favourite, seen);
                                await getListByUser(tkn.username, API)
                                list.setAdd(true);
                                toast.success(res.data.message)
                            }catch(error){
                                return toast.error(error.response.data.message)
                                
                            }
                        }else{
                            try{
                                const res = await updateToList(idResult, findInList[0].author, title, urlImg, typeList, favourite, !findInList[0].seen, tkn.username, findInList[0]._id)
                                await getListByUser(tkn.username, API)
                                // list.setAdd(true)
                                toast.success(res.data.message)
                            }catch(error){
                                return toast.error(error.response.data.message)
                            }
                        }
                        break;        
                    default:
                        break;        
                }
            }

        }
    }

    return (
        <ContainerAddList>
            <span >
                <img 
                    src={list.add ? todolistcheck : todolist} 
                    alt="" 
                    name="lista"
                    data-tip={list.add ? 'Agregado a la Lista': 'Agregar a la Lista'}
                    onClick={(e) => handleList(e,tkn)}
                />
                
            </span>
            <span >
                <img 
                    src={fav.add ? favourite : star} 
                    alt="" 
                    name="favoritos"
                    data-tip={fav.add ? 'Agregado a Favorito' : 'Agregar a Favorito'}
                    onClick={(e) => handleList(e,tkn)} 
                />
                
            </span>
            <span >
                <img 
                    src={see.add ? seen : unseen} 
                    alt="" 
                    name="vistos" 
                    data-tip={see.add ? 'Agregado a Vistos' : 'Agregar a Vistos'}
                    onClick={(e) => handleList(e,tkn)}
                />
            </span>
            <ReactTooltip />
        </ContainerAddList>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
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

export default connect(mapStateToProps, mapDispatchToProps)(AddList)
