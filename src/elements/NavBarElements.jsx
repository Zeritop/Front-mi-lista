import styled from 'styled-components';

const NavBarContent = styled.nav`
    width: 100%;
    background: #1290cb;
    padding: 5px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 375px){
        padding: 0;
        justify-content: space-around;
    }
`;

const BrandImg = styled.img`
    width: 250px;
    margin-left: 30px;
    object-fit: none;
    cursor: pointer;

    @media(max-width: 375px){
        margin-left: 0px;
        width: 15rem;
    }
`;

const ProfileImg = styled.img`
    width: 3%;
    margin-right: 100px;
    cursor: pointer;
`;

export {
    NavBarContent,
    BrandImg,
    ProfileImg
}