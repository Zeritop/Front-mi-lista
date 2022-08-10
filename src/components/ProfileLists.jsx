import React, { useEffect, useState } from 'react'
import { ContainerProfileLists, ContainerButtonsLists, ButtonProfile } from '../elements/ProfileElements';
import Lists from './Lists';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

const ProfileLists = () => {

    const [usrTk, setUsrTk] = useState('')
    const [stateList, setStateList] = useState('lista')
    
    useEffect(() => {
        if(localStorage.getItem('tk')){
            const tkn_local = jwt_decode(localStorage.getItem('tk'));
            setUsrTk(tkn_local)
        }
    }, [])

    const handleStateList = (e) => {
        const { name } = e.target;
        setStateList(name);
    }

    return (
        <ContainerProfileLists>
            <ContainerButtonsLists>
                <ButtonProfile
                    name="lista"
                    selected={stateList === 'lista' ? true : false}
                    onClick={(e) => handleStateList(e)}
                >
                    Pendientes
                </ButtonProfile>
                <ButtonProfile
                    name="favoritos"
                    selected={stateList === 'favoritos' ? true : false}
                    onClick={(e) => handleStateList(e)}
                >
                    Favoritos
                </ButtonProfile>
                <ButtonProfile
                    name="vistos"
                    selected={stateList === 'vistos' ? true : false}
                    onClick={(e) => handleStateList(e)}
                >
                    Vistos
                </ButtonProfile>
            </ContainerButtonsLists>
            <Lists  usrTk={usrTk} stateList={stateList} />   
        </ContainerProfileLists>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLists)
