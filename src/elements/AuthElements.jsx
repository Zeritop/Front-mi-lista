import styled from 'styled-components';

const BackgroundAuth = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0, .3);
    position: absolute;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
`;

const ContainerAuth = styled.div`
    width: 40%;
    height: 60%;
    background: #fff;
    border-radius: 5px;
`;

const HeaderAuth = styled.div`
    padding: 2px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        margin-left: 10px;
    }

    span{
        font-size: 30px;
        margin-right: 10px;
        cursor: pointer;

        &:hover{
            color: salmon;
        }
    }
`;

const BodyAuth = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

const FormAuth = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const InputAuth = styled.input`
    border: transparent 5px solid;
    outline: none;
    border-bottom: black solid 1px;
    font-size: 20px;
    padding: 3px;
    margin-bottom: 10px;

    &:focus{
        border-left: blue 5px solid;
    }
`;

const ButtonAuth = styled.button`
    background: #08f;
    border: transparent 1px solid;
    cursor: pointer;
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;

    &:hover{
        outline: blue 1px solid;
    }
`;

const ButtonChangeAuth = styled.button`
    background: #333;
    border: transparent 1px solid;
    cursor: pointer;
    width: 80%;
    padding: 5px 10px;
    font-size: 16px;
    margin-bottom: 40px;
    color: #fff;

    &:hover{
        outline: #000 1px solid;
    }

`;

export {
    BackgroundAuth,
    ContainerAuth,
    HeaderAuth,
    BodyAuth,
    FormAuth,
    InputAuth,
    ButtonAuth,
    ButtonChangeAuth
}