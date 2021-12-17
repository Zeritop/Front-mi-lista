import React from 'react'
import { AppContainer } from '../styles/AppStyles';
import { NoResults } from '../elements/ResultElements';
import notFound from '../img/anime-not-found.jpg';
import styled from 'styled-components';

const UpsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Profile404 = () => {
    return (
        <AppContainer>
            <UpsContainer>
                <h2>Oopps!</h2>
                <h4>Algo salió mal!</h4>
            </UpsContainer>
            <NoResults>
                <img src={notFound} alt="" />
                <h2>Sin Resultados</h2>
            </NoResults>
        </AppContainer>
    )
}

export default Profile404
