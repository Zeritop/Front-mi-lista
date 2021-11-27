import React, { useEffect, useState } from 'react'
import { ContainerList } from '../elements/ProfileElements'
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ListImg,
    TitleTable,
    Table,
    ButtonImg,
    ContainerButtons,
    TdButtonsTable,
    ScrollabeDiv
} from '../elements/ListsElements';
import star from '../img/star.png';
import unseen from '../img/hidden.png';
import fav from '../img/favorite.png';
import seen from '../img/view.png';
import delIcon from '../img/delete.png';
import { Loading } from '../elements/Loading';
import { NoResults } from '../elements/ResultElements';
import ReactTooltip from 'react-tooltip';
import { updateToList, deleteFromList } from '../services/ListServices';
import { toast } from 'react-toastify';

const Lists = ({getListByUser, usrTk, lists, stateList}) => {
    const { username } = useParams();
    const [loadList, setLoadList] = useState(false);
    const lista = lists.filter(list => {
        if(stateList === 'favoritos'){
            return list.favourite === true
        }else if(stateList === 'vistos'){
            return list.seen === true
        }
        return list.favourite === false && list.seen === false
    }).length;
    
    useEffect(() => {

        let tiempo;
        tiempo = setTimeout(async () => {
            try{
                await getListByUser(username)
                setLoadList(true);
            }catch(error){
                console.log(error);
            }
        }, 500)

        return(() => clearTimeout(tiempo));
    }, [username, getListByUser])


    const handleActions = async (e, idList, urlImg, title, typeList, id, author, fav, seenUnseen ) => {
        const { name } = e.target

        switch(name){
            case 'favourite':
                try{
                    await updateToList(idList, author, title, urlImg, typeList, !fav, seenUnseen, usrTk.username, id);
                }catch(error){
                    toast.error(error.response.data.message)
                }
                await getListByUser(username)
                break;
            case 'seen':
                try{
                    await updateToList(idList, author, title, urlImg, typeList, fav, !seenUnseen, usrTk.username, id);
                }catch(error){
                    toast.error(error.response.data.message)
                }
                await getListByUser(username)
                break;
            case 'delete':
                try{
                    const res = await deleteFromList(id, author, usrTk.username)
                    toast.success(res.data.message)
                    await getListByUser(username)
                }catch(error){
                    toast.error(error.response.data.message)
                }
                break;
            default:
                break;    
        }
    }


    return (
        <ContainerList>
            {
                lista !== 0 ? (<ScrollabeDiv>
                    {
                        loadList ? (<Table>
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
                                    lists.filter(list => {
                                        if(stateList === 'favoritos'){
                                            return list.favourite === true
                                        }else if(stateList === 'vistos'){
                                            return list.seen === true
                                        }
                                        return list.favourite === false && list.seen === false
                                    })
                                    .map(l => (
                                        <tr key={l.idList}>
                                            <td>
                                                <ListImg src={l.urlImg} alt="" />
                                            </td>
                                            <td>
                                                <TitleTable>
                                                    { l.title }
                                                </TitleTable>
                                            </td>
                                            <td>{ l.typeList }</td>
                                            <TdButtonsTable>
                                                <ContainerButtons>
                                                    <ButtonImg>
                                                        <img 
                                                            src={l.favourite ? fav : star}
                                                            alt=""
                                                            data-tip="Agregar a Favoritos"
                                                            name="favourite"
                                                            onClick={(e) => handleActions(e, l.idList, l.urlImg, l.title, l.typeList, l._id, l.author, l.favourite, l.seen)}
                                                         />
                                                    </ButtonImg>
                                                    <ButtonImg>
                                                        <img 
                                                            src={l.seen ? seen : unseen}
                                                            alt=""
                                                            data-tip="Agregar a Vistos"
                                                            name="seen"
                                                            onClick={(e) => handleActions(e, l.idList, l.urlImg, l.title, l.typeList, l._id, l.author, l.favourite, l.seen)}
                                                        />
                                                    </ButtonImg>
                                                    <ButtonImg>
                                                        <img 
                                                            src={delIcon}
                                                            alt=""
                                                            data-tip="Eliminar de toda la lista"    
                                                            name="delete"
                                                            onClick={(e) => handleActions(e, l.idList, l.urlImg, l.title, l.typeList, l._id, l.author)}
                                                        />
                                                    </ButtonImg>
                                                    <ReactTooltip />
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
            
        </ContainerList>
    )
}

const mapStateToProps = state => ({
    lists: state.lists 
})

const mapDispatchToProps = dispatch => ({
    async getListByUser(author){
        const res = await axios.post(`http://localhost:4000/api/lists-no-tk/get-lists`, {author})
        dispatch({
            type: 'GET_LISTS_BY_USER',
            payload: res.data.data
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists);