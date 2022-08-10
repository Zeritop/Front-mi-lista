import React from 'react'
import { UserContainer, UserOptions } from '../elements/UserElements';
import ClickAwayListener from 'react-click-away-listener';
import { LinkLi } from '../elements/UserElements';
import { connect } from 'react-redux';
import { useBoolean } from '../hooks/customHooks';

const User = ({user, setTkLocal, loggedOut}) => {

    const options = useBoolean();

    const showOptions = () => {
        options.setBoolean(!options.boolean);
    }

    const logOut = () => {
        localStorage.removeItem('tk');
        setTkLocal(false);
        loggedOut();
    }

    const handleClickAway = () => {
        if(options.boolean) return options.setBoolean(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserContainer>
                <h3 onClick={showOptions} >{ user.username }</h3>
                {
                    options.boolean && <UserOptions>
                    <ul>
                        <li onClick={() => options.setBoolean(false)}>
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
