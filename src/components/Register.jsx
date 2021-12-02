import React from 'react';
import { ButtonChangeAuth,
     ContainerAuth,
      HeaderAuth,
      BodyAuth,
      FormAuth,
      InputAuth, 
      ButtonAuth
 } from '../elements/AuthElements';
import { useFormAuth } from '../hooks/customHooks';
import { registerAuth } from '../services/AuthServices';
import { toast } from 'react-toastify';

const Register = ({setRegister, setAuth}) => {

    const email = useFormAuth();
    const username = useFormAuth();
    const password = useFormAuth();

    const handleChange = (e) => {
        const { name, value } = e.target; 

        switch(name){
            case 'username':
                return username.setInpVal(value);
            case 'email':
                return email.setInpVal(value);
            case 'password':
                return password.setInpVal(value);
            default:
                break;            
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.inpVal === '' || username.inpVal === '' || password.inpVal === ''){
            return toast.warning('Completar los campos')
        }

        const verificarCorreoER = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.-]+/;
        if(!verificarCorreoER.test(email.inpVal)) return toast.warning('Ingrese un email valido');

        try{
            const res = await registerAuth(username.inpVal, email.inpVal, password.inpVal);
            toast.success(res.data.message);
            setRegister(false);
        }catch(error){
            toast.error(error.response.data.message ? error.response.data.message : error.response.data.error)
        }
    }

    return (
        <ContainerAuth>
            <HeaderAuth>
            <h3>Register</h3>
            <span onClick={() => setAuth(false)}>
                &times;
            </span>
            </HeaderAuth>
            <BodyAuth>
                <FormAuth onSubmit={handleSubmit}>
                    <InputAuth 
                        placeholder="User Name"
                        value={username.inpVal}
                        name="username"
                        onChange={handleChange}
                    />
                    
                    <InputAuth 
                        placeholder="Email"
                        type="email"
                        value={email.inpVal}
                        name="email"
                        onChange={handleChange}
                    />
                    
                    <InputAuth 
                        placeholder="Password"
                        type="password"
                        value={password.inpVal}
                        name="password"
                        onChange={handleChange}
                    />
                    <ButtonAuth
                        type="submit"
                    >
                        Register
                    </ButtonAuth>
                </FormAuth>
                <ButtonChangeAuth onClick={() => setRegister(false)}>
                    Back
                </ButtonChangeAuth>
            </BodyAuth>
        </ContainerAuth>
    )
}

export default Register
