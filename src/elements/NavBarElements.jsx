import styled from 'styled-components';

const NavBarContent = styled.nav`
    
    background: #1290cb;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BrandImg = styled.img`
    width: 250px;
    margin-left: 30px;
    object-fit: none;
    cursor: pointer;
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