import React, { useEffect, useState } from 'react'
import { AppContainer } from '../styles/AppStyles';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { API } from '../entorno';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
// Components
import ProfileLists from './ProfileLists';
import ProfileImg from './ProfileImg';
import { toast } from 'react-toastify';
// Elements
import { NoResults } from '../elements/ResultElements';
import { ContainerProfile, UlProfileList, UlContainer } from '../elements/ProfileElements';
import { Loading } from '../elements/Loading';
// Services
import { uploadImage } from '../services/AuthServices';

const Profile = ({getUser, users, lists}) => {

    // States
    const [loadUser, setLoadUser] = useState(false);
    const [image, setImage] = useState(null);
    const [user_name, setUser_name] = useState(null);
    const [sameUser, setSameUser] = useState(false);
    const [editing, setEditing] = useState(false);
    const [refresh, setRefresh] = useState(false);

    // Router Dom
    const { username } = useParams();
    const navigate = useNavigate();

    //Variables
    const allLists = lists.filter(l => l.favourite === false && l.seen === false).length;
    const favLists = lists.filter(l => l.favourite === true).length;
    const seenLists = lists.filter(l => l.seen === true).length;

    
    useEffect(() => {
        setUser_name(username) // Se gurda el username en el estado user_name
        let tiempo;
        tiempo = setTimeout(async () => {
            // Si hay un item en el local storage llamado tk se guarda en la variable usuario
            if(localStorage.getItem('tk')){
                let usuario = jwt_decode(localStorage.getItem('tk'))
                if(username === usuario.username){ 
                    // si el username coincide con el username de usuario la variable sameUSer se vuelve true
                    setSameUser(true)
                }else{
                    // Sino False
                    setSameUser(false)
                }
            }
            try{
                await getUser(username, API); // Llamada a la api para obtener al usuario    
                setLoadUser(true); // variable para controlar el cargado en true
            }catch(error){
                navigate("/not-found") // Sino se navega hacia not-found
            }
        }, 1000);

       return(() => clearTimeout(tiempo)); 
    }, [getUser, username, navigate])

    const handleChange = (e) => {
        // Se controla el input file y se guarda su contenido en la variable image
        setImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token_user = null
        let config = null
        let getToken = null
        if(localStorage.getItem('tk')){
            getToken = localStorage.getItem('tk')
            token_user = jwt_decode(getToken)
        }
        
        if(image !== null){
            const formdata = new FormData();
            formdata.append('image', image);

            try{
                if(token_user !== null){ // Si hay un token se crea la configuracion con los headers
                    config = {
                        headers: {
                            user: token_user.id,
                            'auth-token': `Bearer ${getToken}`
                        }
                    };
                }
                const res = await uploadImage(formdata, config)
                toast.success(res.data.message)
            }catch(error){
                toast.error(error.response.data.message)
            }
        }else{
            toast.warning('Por favor seleccionar una imagen')
        }
        setEditing(false)
        setRefresh(true);
    }

    return (
            <AppContainer>
                {
                    loadUser ? (
                    <>
                        <ContainerProfile>
                            <ProfileImg 
                                username={user_name}
                                sameUser={sameUser}
                                setEditing={setEditing}
                                editing={editing}
                                refresh={refresh}
                                setRefresh={setRefresh}
                            />
                            {
                                editing && <form 
                                                onSubmit={handleSubmit}
                                                encType="multipart/form-data"
                                            >
                                                <input
                                                    type="file"
                                                    onChange={handleChange}
                                                    name="image"
                                                />
                                                <button>Subir</button>
                                            </form>
                            }
                            
                            {
                                <>
                                    <h2>{ users.username }</h2>
                                    {/* <p>follows</p>
                                    <p>followers</p> */}
                                </>
                            }
                            <UlContainer>
                                <UlProfileList>
                                    <li> 
                                        <b>Lista:</b> { allLists }
                                    </li>
                                    <li>
                                    <b>Favoritos:</b> { favLists }
                                    </li>
                                    <li>
                                    <b>Vistos:</b> { seenLists }
                                    </li>
                                </UlProfileList>
                                {/* <UlProfileList>
                                    <li>Follows</li>
                                    <li>Followers</li>
                                </UlProfileList> */}
                            </UlContainer>
                        </ContainerProfile>
                        
                        <ProfileLists />
                    </>
                    )
                    : (
                    <>
                        <div></div>
                        <NoResults>
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
                        </NoResults>
                    </>
                    )
                }
                
            </AppContainer>
    )
}

const mapStateToProps = state => ({
    users: state.users,
    lists: state.lists
})

const mapDispatchToProps = dispatch => ({
    async getUser(username, API){

        const res = await axios.post(`${API}/api/users/get-user`, {
            username
        });
        dispatch({
            type: 'GET_USER',
            payload: res.data.data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
