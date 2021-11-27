import React, { useState } from 'react'
import { UserContainer, UserOptions } from '../elements/UserElements';
import ClickAwayListener from 'react-click-away-listener';
import { LinkLi } from '../elements/UserElements';

const User = ({user, setTkLocal}) => {

    const [options, setOptions] = useState(false);

    const showOptions = () => {
        setOptions(!options);
    }

    const logOut = () => {
        localStorage.removeItem('tk');
        setTkLocal(false);
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

export default User
