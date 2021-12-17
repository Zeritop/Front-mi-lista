import styled from 'styled-components';

const ConatinerResult = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0px;

    @media(max-width: 375px){
        padding: 0;
    }
`;

const ResultHeader = styled.div`
    display: flex;
    margin-bottom: 20px;

    img{
        width: 20%;
    }

    @media(max-width: 430px){
        img{
            display: none;
        }
    }

    @media(min-width: 430px) and (max-width: 810px){
        img{
            width: 50%;
        }
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

    @media(max-width: 375px){
        margin-left: 30px;
    }
`;

const ResultDescription = styled.div`
    width: 80%;

    @media(max-width: 430px){
        margin-left: 30px;
    }
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

    @media(max-width: 430px){
        width: 90%;
        
        span{
            text-align: center;
            img{
                width: 25%;
            }
        }
    }

    @media(min-width: 430px) and (max-width: 810px){
        width: 30%;
    }
`;

const NoResults = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    img{
        width: 40%;
    }

    @media(max-width: 375px){
        
        img{
            width: 60%;
        }

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