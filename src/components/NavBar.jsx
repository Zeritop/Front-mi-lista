import React from 'react'
import { NavBarContent, BrandImg, ProfileImg } from '../elements/NavBarElements';
import logo from '../img/logo_size_invert_email.jpg';
import profile from '../img/user.png';

const NavBar = () => {
    return (
        <NavBarContent>
            <div>
                <BrandImg src={logo} alt="" />
            </div>
            {/* <div> */}
                {/* <span> */}
                    <ProfileImg src={profile} alt="" />
                {/* </span> */}
            {/* </div> */}
        </NavBarContent>
    )
}

export default NavBar
