import React from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { BodyAuth,
    ContainerAuth,
    HeaderAuth,
    FormAuth,
    InputAuth,
    ButtonAuth,
    ButtonChangeAuth 
} from '../elements/AuthElements';
import { useFormAuth } from '../hooks/customHooks';
import { loginAuth } from '../services/AuthServices';

const Login = ({setAuth, setRegister, setTkLocal, logIn}) => {

    const email = useFormAuth();
    const password = useFormAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch(name){
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

        if(email.inpVal === '' || password.inpVal === '') return toast.warning('Completar los campos');

        const verificarCorreoER = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.-]+/;
        if(!verificarCorreoER.test(email.inpVal)) return toast.warning('Ingrese un email valido');

        try{
            const res = await loginAuth(email.inpVal, password.inpVal);
            toast.success(res.data.message);
            email.setInpVal('');
            password.setInpVal('');
            localStorage.setItem('tk', res.data.data);
            setTkLocal(true);
            setAuth(false);
            logIn();
        }catch(error){
            toast.error(error.response.data.message)
        }
    }

    return (
        <ContainerAuth>
            <HeaderAuth>
                <h3>Login</h3>
                <span
                    onClick={() => setAuth(false)}
                >
                    &times;
                </span>
            </HeaderAuth>
            <BodyAuth>
                <FormAuth onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <InputAuth 
                        type="text" 
                        placeholder="user@mail.com"
                        name="email"
                        value={email.inpVal}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Password</label>
                    <InputAuth 
                        type="password" 
                        placeholder="****"
                        name="password"
                        value={password.inpVal} 
                        onChange={handleChange}
                    />
                    <ButtonAuth
                        type="submit"
                    >
                        Login
                    </ButtonAuth>
                </FormAuth>
                <ButtonChangeAuth onClick={() => setRegister(true)}>
                    Register
                </ButtonChangeAuth>
            </BodyAuth>
        </ContainerAuth>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    logIn(){
        dispatch({
            type: 'LOGGED_IN',
            payload: true
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login) 
