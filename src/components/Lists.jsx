import React, { useEffect, useState } from 'react'
//Elements
import { ListImg,
    TitleTable,
    Table,
    ButtonImg,
    ContainerButtons,
    TdButtonsTable,
    ScrollabeDiv
} from '../elements/ListsElements';
import { ContainerList } from '../elements/ProfileElements';
import { NoResults }     from '../elements/ResultElements';
import { Loading }       from '../elements/Loading';
//Images
import fav     from '../img/favorite.png';
import unseen  from '../img/hidden.png';
import delIcon from '../img/delete.png';
import star    from '../img/star.png';
import seen    from '../img/view.png';
//Components
import ListModal from './ListModal';
//Services
import { updateToList, deleteFromList } from '../services/ListServices';
//Others
import { useBoolean } from '../hooks/customHooks'
import { useParams }  from 'react-router-dom';
import { toast }      from 'react-toastify';
import ReactTooltip   from 'react-tooltip';
import { connect }    from 'react-redux';
import jwt_decode     from 'jwt-decode';
import { API }        from '../entorno';
import axios          from 'axios';

const Lists = ({getListByUser, usrTk, lists, stateList, loggedIn, logIn, users}) => {
    const { username } = useParams();
    const [modalDesc, setModalDesc] = useState({})

    const igualdadNick = useBoolean();
    const loadList     = useBoolean();
    const modal        = useBoolean();
    
    const lista = lists.filter(list => {
                    if(stateList === 'favoritos'){
                        return list.favourite === true
                    }else if(stateList === 'vistos'){
                        return list.seen === true
                    }
                    return list.favourite === false && list.seen === false
                });

    const getToken = localStorage.getItem('tk') ? localStorage.getItem('tk') : '';

    useEffect(() => {
        if(localStorage.getItem('tk')){
            logIn()
        }
        if(loggedIn){
            if(getToken !== ''){
                const token = jwt_decode(getToken)
                if(token.username === username){
                    igualdadNick.setBoolean(true);
                }else{
                    igualdadNick.setBoolean(false);
                }
            }else{
                igualdadNick.setBoolean(false);
            }
        }else{
            igualdadNick.setBoolean(false)
        }
    }, [username, getToken, loggedIn, logIn, igualdadNick])
    
    useEffect(() => {

        let tiempo;
        tiempo = setTimeout(async () => {
            try{
                await getListByUser(username, API)
                loadList.setBoolean(true);
            }catch(error){
                console.log(error);
            }
        }, 500)

        return(() => clearTimeout(tiempo));
    }, [username, getListByUser, loadList])


    const handleActions = async (e, id, fav, seenUnseen ) => {
        const { name } = e.target
        const nameLogin = users.username

        switch(name){
            case 'favourite':
                try{
                    await updateToList(nameLogin, id, !fav, seenUnseen, usrTk.username);
                    await getListByUser(username, API)
                }catch(error){
                    toast.error(error.response.data.message)
                }
                break;
            case 'seen':
                try{
                    await updateToList(nameLogin, id, fav, !seenUnseen, usrTk.username);
                    await getListByUser(username, API)
                }catch(error){
                    toast.error(error.response.data.message)
                }
                break;
            case 'delete':
                try{
                    const res = await deleteFromList(nameLogin, id, usrTk.username)
                    toast.success(res.data.message)
                    await getListByUser(username, API)
                }catch(error){
                    toast.error(error.response.data.message)
                }
                break;
            default:
                break;    
        }
    }

    const modalDescription = (title, urlImg, id, typelist) => {
        modal.setBoolean(true);
        setModalDesc({
            title,
            urlImg,
            id,
            typelist
        })
    }


    return (
        <ContainerList>
            {
                lista.length !== 0 ? (<ScrollabeDiv>
                    {
                        loadList.boolean ? (<Table>
                            <thead>
                                <tr>
                                    <th>IMG</th>
                                    <th>Titulo</th>
                                    <th>Tipo</th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    
                                    lista.map(l => (
                                        <tr 
                                            key={l.lista?.idList}   
                                        >
                                            <td
                                                onClick={() => modalDescription(l.lista?.title, l.lista?.urlImg, l.lista?.idList, l.lista?.typeList)}
                                            >
                                                <ListImg src={l.lista?.urlImg} alt="" />
                                            </td>
                                            <td
                                                onClick={() => modalDescription(l.lista?.title, l.lista?.urlImg, l.lista?.idList, l.lista?.typeList)}
                                            >
                                                <TitleTable>
                                                    { l.lista?.title }
                                                </TitleTable>
                                            </td>
                                            <td 
                                                onClick={() => modalDescription(l.lista?.title, l.lista?.urlImg, l.lista?.idList, l.lista?.typeList)}
                                            >
                                                { l.lista?.typeList }</td>
                                            <TdButtonsTable>
                                                <ContainerButtons igual={igualdadNick.boolean}>
                                                    {
                                                        igualdadNick.boolean && <>
                                                        <ButtonImg>
                                                        <img 
                                                            src={l.favourite ? fav : star}
                                                            alt=""
                                                            data-tip={l.favourite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                                                            name="favourite"
                                                            onClick={(e) => handleActions(e, l._id, l.favourite, l.seen)}
                                                         />
                                                    </ButtonImg>
                                                    <ButtonImg>
                                                        <img 
                                                            src={l.seen ? seen : unseen}
                                                            alt=""
                                                            data-tip={l.seen ? 'Quitar de Vistos' : 'Agregar a Vistos'}
                                                            name="seen"
                                                            onClick={(e) => handleActions(e, l._id, l.favourite, l.seen)}
                                                        />
                                                    </ButtonImg>
                                                    <ButtonImg>
                                                        <img 
                                                            src={delIcon}
                                                            alt=""
                                                            data-tip="Eliminar de toda la lista"    
                                                            name="delete"
                                                            onClick={(e) => handleActions(e, l._id)}
                                                        />
                                                    </ButtonImg>
                                                    <ReactTooltip /></>
                                                    }
                                                    
                                                </ContainerButtons>
                                            </TdButtonsTable>
                                        </tr>
                                    ))
                                }
                            </tbody> 
                            
                        </Table>)
                        :
                        (<NoResults>
                            <Loading>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Loading>
                        </NoResults>)
                    }
                </ScrollabeDiv>)
                :
                (<div>Sin Resultados</div>)
            }
            {
              modal.boolean && <ListModal description={modalDesc} setModal={modal.setBoolean} />  
            } 
        </ContainerList>
    )
}

const mapStateToProps = state => ({
    lists: state.lists,
    loggedIn: state.loggedIn,
    users: state.users 
})

const mapDispatchToProps = dispatch => ({
    async getListByUser(username, API){
        const res = await axios.post(`${API}/api/lists-no-tk/get-lists`, { username })
        dispatch({
            type: 'GET_LISTS_BY_USER',
            payload: res.data.data
        })
    },
    logIn(){
        dispatch({
            type: 'LOGGED_IN',
            payload: true
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
