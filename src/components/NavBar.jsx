import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavBarContent, BrandImg, ProfileImg } from '../elements/NavBarElements';
import logo from '../img/logo_size_invert_email.jpg';
import profile from '../img/user.png';
import Auth from './Auth';
import jwt_decode from 'jwt-decode';
import User from './User';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const NavBar = () => {

    const [auth, setAuth] = useState(false);
    const [tkLocal, setTkLocal] = useState(false);
    const [user, setUser] = useState('');
    
    useEffect(() => {
        if(localStorage.getItem('tk')){
            const jwt_tk = jwt_decode(localStorage.getItem('tk'))
            setUser(jwt_tk);
            setTkLocal(true);
        }
    }, [tkLocal])


    return (
        <>
        {
            auth && (
                <Provider store={store}>
                    <Auth setAuth={setAuth} setTkLocal={setTkLocal} />
                </Provider>
            )
        } 
            <NavBarContent>
                <div>
                    <Link to="/" >
                        <BrandImg src={logo} alt="" />
                    </Link>
                </div>
                {
                    tkLocal ? (
                        <Provider store={store}>
                            <User user={user} setTkLocal={setTkLocal} />
                        </Provider>
                    )
                :
                (
                <ProfileImg 
                    src={profile} 
                    alt=""
                    onClick={() => setAuth(true)} 
                />
                )
                } 
            </NavBarContent>
        </>
    )
}

export default NavBar
