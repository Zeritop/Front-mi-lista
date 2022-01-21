import styled from 'styled-components';

const ContainerPrincipalProfile = styled.div`
    height: 100%;
`;

const ContainerProfile = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 30%;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    @media(max-width: 375px){
        img{
            margin-top: 4rem;
            width: 10%;
        }
    }

    @media(max-width: 430px){
        img{
            margin-top: 4rem;
            width: 20%;
        }
    }
`;

const ContainerProfileLists = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 375px){
        width: 23rem;
    }
    
`;

const ContainerButtonsLists = styled.div`
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    @media(max-width: 430px){
        width: 60%;
    }
    
    @media(min-width: 430px) and (max-width: 1000px){
        width: 60%;
    }
    
`;

const ContainerList = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: center;
`;

const ButtonProfile = styled.button`  
    background: #08f;
    border: transparent 1px solid;
    outline: ${props => {
        if(props.selected === true){
            return 'blue 1px solid'
        }else{
            return 'transparent 1px solid'
        }
    }};
    margin-right: ${props => {
        if(props.selected === true){
            return '1px'
        }
    }};
    cursor: pointer;
    width: 25%;
    padding: 5px 10px;
    height: 50%;

    &:hover{
        outline: blue 1px solid;
        margin-right: 1px;
    }

    @media(max-width: 430px){
        width: 60%;
        height: 70%;
    }

    @media(min-width: 430px) and (max-width: 1000px){
        width: 80%;
    }

    
`;

const UlProfileList = styled.ul`
    list-style: none;
    padding: 0;
    text-align: end;
`;

const UlContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export {
    ContainerProfile,
    ContainerProfileLists,
    ContainerButtonsLists,
    ContainerList,
    ButtonProfile,
    ContainerPrincipalProfile,
    UlProfileList,
    UlContainer
}