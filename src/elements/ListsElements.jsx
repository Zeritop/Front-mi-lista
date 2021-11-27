import styled from 'styled-components';

const ListImg = styled.img`
    width: 40%;
`;

const TitleTable = styled.div`
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Table = styled.table`
    width: 90%;
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
`;

const ContainerButtons = styled.div`
    width: 100%;
    opacity: 0;
`;

const TdButtonsTable = styled.td`
    width: 8%;
`;

const ScrollabeDiv = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
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