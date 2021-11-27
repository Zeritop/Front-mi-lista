import styled from 'styled-components';

const ContainerProfile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 30%;
        margin-bottom: 10px;
    }
`;

const ContainerProfileLists = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const ContainerButtonsLists = styled.div`
    width: 30%;
    height: 20%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    
`;

const ContainerList = styled.div`
    width: 80%;
    height: 60vh;
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
    
`;

export {
    ContainerProfile,
    ContainerProfileLists,
    ContainerButtonsLists,
    ContainerList,
    ButtonProfile
}