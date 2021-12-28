import styled from 'styled-components';

const ListImg = styled.img`
    max-width: 4rem;
`;

const TitleTable = styled.div`
    width: 30rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media(max-width: 430px){
        width: 10rem;
    }
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
    width: 3rem;
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
        height: 17rem;
    }

`;

const ModalConatainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0, 0.3);
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
 
    @media(max-width: 430px){
        position: fixed;
    }
`;

const ModalCard = styled.div`
    width: 50%;
    //height: 70%;
    background: #fff;
    border-radius: 10px;

    @media(max-width: 430px){
        position: fixed;
        width: 80%;
        /* height: 70%; */
    }
`;

const ContainerModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: #000 1px solid;

`;

const ModalHeader = styled.div`
    text-align: center;
    font-size: 30px;
    width: 20rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const ModalBodyContainer = styled.div`
    height: 26rem;
    overflow: auto;
    text-align: center;

    @media(max-width: 430px){
        height: 35em;
    }
`;

const ModalBody = styled.div`
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
    img{
        width: 30%;
        margin-top: 10px;
        height: 50%;
    }

    @media(max-width: 430px){
        img{
            width: 50%;
        }
    }
`;

const ModalFooter = styled.div`
    height: 100%;
    text-align: center;
    padding-bottom: 5px;

    button{
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        transition: font-size ease .3s;
        height: 3rem;

        &:hover{
            font-size: large;
        }
    }
`;

export {
    ListImg,
    TitleTable,
    Table,
    ButtonImg,
    ContainerButtons,
    TdButtonsTable,
    ScrollabeDiv,
    ModalConatainer,
    ModalCard,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ContainerModalHeader,
    ModalBodyContainer
}