import styled from 'styled-components';

const ContainerBuscador = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContainerAMBtns = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
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
`;

const ButtonSearch = styled.button`
    width: 10%;
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
    ConatainerInput
}