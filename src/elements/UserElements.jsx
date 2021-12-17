import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserContainer = styled.div`
    cursor: pointer;
    margin-right: 100px;

    h3{
        &:hover{
            color: white;
            text-decoration: underline;
        }
        
    }

    @media(max-width: 375px){
        margin-right: 0;
    }
`;

const UserOptions = styled.div`
    background: white;
    position: absolute;
    border-radius: 5px;
    width: 100px;

    ul{
        list-style: none;
        padding: 0;
        padding: 0 10px;

        li{
            width: 100%;
            &:hover{
                background: #eee;
            }
        }
    }

    @media(max-width: 375px){
        right: 1rem;
    }
`;

const LinkLi = styled(Link)`
    text-decoration: none;
    color: #000;
`;

export {
    UserContainer,
    UserOptions, 
    LinkLi
}