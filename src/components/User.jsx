import React, { useState } from 'react'
import { UserContainer, UserOptions } from '../elements/UserElements';
import ClickAwayListener from 'react-click-away-listener';
import { LinkLi } from '../elements/UserElements';
import { connect } from 'react-redux';

const User = ({user, setTkLocal, loggedOut}) => {

    const [options, setOptions] = useState(false);

    const showOptions = () => {
        setOptions(!options);
    }

    const logOut = () => {
        localStorage.removeItem('tk');
        setTkLocal(false);
        loggedOut();
    }

    const handleClickAway = () => {
        if(options) return setOptions(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserContainer>
                <h3 onClick={showOptions} >{ user.username }</h3>
                {
                    options && <UserOptions>
                    <ul>
                        <li onClick={() => setOptions(false)}>
                            <LinkLi to={`/profile/${user.username}`}>Profile</LinkLi>
                        </li>
                        <li onClick={logOut} >Log Out</li>
                    </ul>
                </UserOptions>
                }
            </UserContainer>
        </ClickAwayListener>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    loggedOut(){
        dispatch({
            type: 'LOGGED_IN',
            payload: false
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
