import React, { useEffect, useState } from 'react'
import { getImgProfile } from '../services/AuthServices';
import { API } from '../entorno';
import { Fragment } from 'react';
import styled from 'styled-components';
import editar from '../img/editar.png';
import ReactTooltip from 'react-tooltip';

const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
`;

const ContainerProfileImg = styled.div`
    width: 48%;
    height: 11rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    img{
        width: 100%;
        // Si la propiedad img con tiene la palabra 'user.png' se devuelve contain sino cover
        object-fit: ${props => props.img === 'user.png' ? 'contain' : 'cover'};
    }
`;

const ImgProfile = styled.img`
    border-radius: 100%;
`;

const Edit = styled.div`
    border-radius: 100%;
    position: absolute;
    z-index: 999;
    width: 6rem;
    text-align: end;
    margin-left: 100px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover{
        width: 7rem;
    }
`;

const ImgEdit = styled.img`
    object-fit: cover;
`;

const ProfileImg = ({username, sameUser, setEditing, editing, refresh, setRefresh}) => {
    const [avatar, setAvatar] = useState('')
    const [load, setLoad] = useState(false);

    useEffect(() => {
        let tiempo
        tiempo = setTimeout(async () => {
            const res = await getImgProfile(username)
            setAvatar(res.data.img)
            setLoad(true);
            setRefresh(false);
        }, 500)
        return(() => clearTimeout(tiempo))
    }, [username, setRefresh, refresh])
    
    return (
        <Fragment>
            {
                load && <ContainerImage>
                    <ContainerProfileImg img={avatar}>
                        <ImgProfile src={`${API}/public/${avatar}`} alt="user profile" />
                    </ContainerProfileImg>
                    {
                        sameUser && <Edit>
                            <ImgEdit 
                                src={editar} 
                                alt="" 
                                onClick={() => setEditing(!editing)}
                                data-tip="Editar Imagen"
                            />
                        </Edit>
                    }
                    <ReactTooltip />
                </ContainerImage>
            }
        </Fragment>
    )
}

export default ProfileImg
