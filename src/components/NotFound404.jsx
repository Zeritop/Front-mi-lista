import React from 'react'
import { AppContainer } from '../styles/AppStyles';
import { NoResults } from '../elements/ResultElements';
import notFound from '../img/anime-not-found.jpg';

const Profile404 = () => {
    return (
        <AppContainer>
            <div></div>
            <NoResults>
                <img src={notFound} alt="" />
                <h2>Sin Resultados</h2>
            </NoResults>
        </AppContainer>
    )
}

export default Profile404
