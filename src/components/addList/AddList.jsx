import React, { useEffect, useState } from 'react'
//Elements
import { ContainerAddList } from '../../elements/ResultElements';
//Images
import todolist      from '../../img/to-do-list.png';
import todolistcheck from '../../img/verified.png';
import favourite     from '../../img/favorite.png';
import unseen        from '../../img/hidden.png';
import star          from '../../img/star.png';
import seen          from '../../img/view.png';
//Hooks
import { useBoolean } from '../../hooks/customHooks';
//services
import { addToList, deleteFromList, updateToList } from '../../services/ListServices';
//Functions
import { handleList } from './functions'
//Other
import ReactTooltip from 'react-tooltip';
import { connect }  from 'react-redux';
import jwt_decode   from 'jwt-decode';
import axios        from 'axios';

const AddList = ({idResult, title, urlImg, typeList, lists, getListByUser, description, users}) => {
    const [tkn, setTkn] = useState('');
    const getToken = localStorage.getItem('tk')
    
    const list = useBoolean();
    const fav  = useBoolean();
    const see  = useBoolean();

    useEffect(() => {
        if(getToken){
            const token = jwt_decode(getToken);
            setTkn(token);
        }
    }, [getToken, users])

    useEffect(() => {
        if(lists.length !== 0){
            const exist = lists.map(l => l.lista?.idList).includes(idResult);
            if(exist){
                const resultList = lists.filter(l => l.lista?.idList === idResult)
                resultList[0].favourite ? fav.setBoolean(true) : fav.setBoolean(false)
                resultList[0].seen ? see.setBoolean(true) : see.setBoolean(false)
                list.setBoolean(true)
            }else{
                list.setBoolean(false)
                fav.setBoolean(false)
                see.setBoolean(false)
            }
        }
    }, [fav, list, see, idResult, lists])
    

    return (
        <ContainerAddList>
            <span >
                <img 
                    src={list.boolean ? todolistcheck : todolist} 
                    alt="" 
                    name="lista"
                    data-tip={list.boolean ? 'Agregado a la Lista': 'Agregar a la Lista'}
                    onClick={(e) => handleList(e,tkn, idResult, title, urlImg, typeList, description, lists, list, addToList, getListByUser, deleteFromList, updateToList, users.username)}
                />
                
            </span>
            <span >
                <img 
                    src={fav.boolean ? favourite : star} 
                    alt="" 
                    name="favoritos"
                    data-tip={fav.boolean ? 'Agregado a Favorito' : 'Agregar a Favorito'}
                    onClick={(e) => handleList(e,tkn, idResult, title, urlImg, typeList, description, lists, list, addToList, getListByUser, deleteFromList, updateToList, users.username)} 
                />
                
            </span>
            <span >
                <img 
                    src={see.boolean ? seen : unseen} 
                    alt="" 
                    name="vistos" 
                    data-tip={see.boolean ? 'Agregado a Vistos' : 'Agregar a Vistos'}
                    onClick={(e) => handleList(e,tkn, idResult, title, urlImg, typeList, description, lists, list, addToList, getListByUser, deleteFromList, updateToList, users.username)}
                />
            </span>
            <ReactTooltip />
        </ContainerAddList>
    )
}

const mapStateToProps = state => ({
    lists: state.lists,
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    async getListByUser(username, API){
        const res = await axios.post(`${API}/api/lists-no-tk/get-lists`, { username })
        dispatch({
            type: 'GET_LISTS_BY_USER',
            payload: res.data.data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddList)
