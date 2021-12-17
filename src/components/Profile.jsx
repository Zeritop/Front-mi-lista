import React, { useEffect, useState } from 'react'
import { AppContainer } from '../styles/AppStyles';
import { ContainerProfile } from '../elements/ProfileElements';
import userImg from '../img/user.png';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Loading } from '../elements/Loading';
import { NoResults } from '../elements/ResultElements';
import ProfileLists from './ProfileLists';

const Profile = ({getUser, users, lists}) => {

    const [loadUser, setLoadUser] = useState(false);
    const { username } = useParams();
    const navigate = useNavigate();
    const allLists = lists.filter(l => l.favourite === false && l.seen === false).length;
    const favLists = lists.filter(l => l.favourite === true).length;
    const seenLists = lists.filter(l => l.seen === true).length;

    useEffect(() => {
        let tiempo;
        tiempo = setTimeout(async () => {
            try{
                await getUser(username);    
                setLoadUser(true);
            }catch(error){
                navigate("/not-found")
            }
        }, 1000);

       return(() => clearTimeout(tiempo)); 
    }, [getUser, username, navigate])

    return (
            <AppContainer>
                {
                    loadUser ? (
                    <>
                        <ContainerProfile>
                            <img src={userImg} alt="" />
                            {
                                <>
                                    <h2>{ users.username }</h2>
                                    {/* <p>follows</p>
                                    <p>followers</p> */}
                                </>
                            }
                            <p>Lista: { allLists }</p>
                            <p>Favoritos: { favLists }</p>
                            <p>Vistos: { seenLists }</p>
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
    async getUser(username){

        const res = await axios.post('http://localhost:4000/api/users/get-user', {
            username
        });
        dispatch({
            type: 'GET_USER',
            payload: res.data.data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
