import styled from 'styled-components';

const AppContainer = styled.div`
    /* margin-top: 50px; */
    background: #deeff6;
    width: 90vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 30% 1fr;
    box-shadow: 0px 5px rgba(0,0,0, .3);

    @media(max-width: 430px){
        height: 100%;
        width: 100%;
        grid-gap: 10px;
        grid-template-columns: 100%;
        grid-template-rows: 50%;
    }

`;

export {
    AppContainer
}