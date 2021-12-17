import styled from 'styled-components';

const ContainerPrincipal = styled.div`
    height: 60%;
`;

const ContainerBuscador = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 430px) and (max-width: 810px){
        width: 90%
    }
`;

const ContainerAMBtns = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    @media(min-width: 430px) and (max-width: 810px){
        width: 100%;
    }
`;

const Resultados = styled.div`
    margin-top: 10px;
    height: 50vh;
    overflow: auto;
    padding: 0 10px;

    ul{
        list-style: none;

        li{
            cursor: pointer;
            text-align: center;
            img{
                height: 100px;
            }
        }
    }

    @media(max-width: 430px){
        height: 100%;
        ul{
            padding: 0;
        }
    } 
`;

const ContainerNavegacionBtns = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
`;

const ButtonsNav = styled.button`
    border-radius: 5px;
    outline: none;
    border: transparent 1px solid;
    width: 20%;
    background: #08f;
    cursor: pointer;
    transition: width 0.3s ease;
    padding: 5px;
    text-transform: uppercase;

    &:hover{
        outline: blue 1px solid;
    }
    &:active{
        width: 15%;
    }

    @media(max-width: 375px){
        width: 15%;
    }
`;

const ButtonsAM = styled.button`
    background: #08f;
    border: transparent 1px solid;
    outline: ${props => {
        if(props.anime === 'anime'){
            return  'blue 1px solid'
        }else if(props.anime === 'manga'){
            return 'blue 1px solid'
        }
    }};
    cursor: pointer;
    width: 25%;
    padding: 5px 10px;
    margin-left: 1px;

    &:hover{
        outline: blue 1px solid;
    }

    @media(min-width: 430px) and (max-width: 810px){
        width: 40%;
    }

`;

const InputBuscador = styled.input`
    outline: none;
    border: none;
    background: transparent;
    border-left: transparent 5px solid;
    border-bottom: #000 1px solid;
    padding-left: 5px;
    padding-top: 5px;
    color: #000;
    text-transform: uppercase;
    height: auto;
    font-size: 15px;

    &::placeholder{
        color: #000;
    }

    &:focus{
        border-left: blue 5px solid;

    }

    @media(min-width: 430px) and (max-width: 810px){
        width: 100%;
    }
`;

const ButtonSearch = styled.button`
    width: 8%;
    border: transparent 1px solid;
    outline: none;
    background: #08f;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;

    &:hover{
        outline: blue 1px solid;
    }

    img{
        width: 100%;
    }

    @media(max-width: 376px){
        width: 8%;
    }

    @media(min-width: 430px) and (max-width: 810px){
        width: 20%;
    }
`;

const ConatainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    Resultados,
    ContainerNavegacionBtns,
    ButtonsNav,
    ContainerBuscador,
    ContainerAMBtns,
    ButtonsAM,
    InputBuscador,
    ButtonSearch,
    ConatainerInput,
    ContainerPrincipal
}