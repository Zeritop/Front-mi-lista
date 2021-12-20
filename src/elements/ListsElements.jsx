import styled from 'styled-components';

const ListImg = styled.img`
    max-width: 45%;
`;

const TitleTable = styled.div`
    width: 30rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Table = styled.table`
    width: 100%;
    text-align: center;
    overflow: auto;
    border-collapse: collapse;
    
    tbody{
        tr{
            &:hover{
                background: #bbb;
                cursor: pointer;
                td{
                    div{
                        transition: opacity .6s;
                        opacity: 1;
                    }
                }
            }
        }
    }

    td{
        padding: 5px;
        border-bottom: 1px solid black;

    }

    @media(max-width: 1000px){
        
        tbody{
            tr{
                td{
                    div{
                        opacity: 1;
                    }
                } 
            }
        }

        thead tr th:nth-child(1){
            display: none;
        }

        tbody tr td:nth-child(1){
            display: none;
        }
    }

    
`;

const ButtonImg = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    width: 100%;
    cursor: pointer;
    border: none;
    outline: transparent 1px solid;
    background: transparent;


    img{
        width: 50%;
    }

    @media(max-width: 430px){
        img{
            width: 100%;
        }
    }
`;

const ContainerButtons = styled.div`
    width: 100%;
    opacity: 0;

    @media(max-width: 430px){
        display: flex;
        opacity: 1;
        width: 5rem;
    } 
    @media(min-width: 430px) and (max-width: 1000px){
        display: flex;
        opacity: 1;
        width: 8rem;
    }
`;

const TdButtonsTable = styled.td`
    width: 8%;
`;

const ScrollabeDiv = styled.div`
    max-height: 30rem;
    width: 100%;
    overflow: auto;

    @media(max-width: 810px){
        cursor: move;
    }

    @media(max-width: 430px){
        width: 100%;
        height: 100%;
    }

`;

export {
    ListImg,
    TitleTable,
    Table,
    ButtonImg,
    ContainerButtons,
    TdButtonsTable,
    ScrollabeDiv
}