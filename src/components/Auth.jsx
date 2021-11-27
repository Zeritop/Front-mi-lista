import React, { useState } from 'react'
import Login from './Login'
import { BackgroundAuth } from '../elements/AuthElements';
import Register from './Register';

const Auth = ({setAuth, setTkLocal}) => {

    const [register, setRegister] = useState(false);

    return (
        <BackgroundAuth>
            {
                register ? <Register setRegister={setRegister} setAuth={setAuth} />  
                : (
                <Login 
                    setAuth={setAuth}
                    setRegister={setRegister}
                    setTkLocal={setTkLocal}
                /> 
            )
            }
            
            
        </BackgroundAuth>
    )
}

export default Auth
