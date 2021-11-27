import styled from 'styled-components';

const ConatinerResult = styled.div`
    width: 100%;
    height: 90%;
    overflow: auto;
    padding: 10px;
`;

const ResultHeader = styled.div`
    display: flex;
    margin-bottom: 20px;

    img{
        width: 20%;
    }
`;

const ResultDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    ul{
        list-style: none;
        padding: 0;
    }
`;

const ResultDescription = styled.div`
    width: 65vw;
`;

const ContainerAddList = styled.div`
    display: flex;
    width: 20%;
    margin-left: 20px;

    span{
        img{
            width: 50%;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
`;

const NoResults = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    img{
        width: 40%;
    }
`;



export {
    ConatinerResult,
    ResultHeader,
    ResultDetails,
    ResultDescription,
    ContainerAddList,
    NoResults
}