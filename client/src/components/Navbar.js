import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
 

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
 
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        HOME
                    </NavLink>
                    <NavLink to="/womentswear" activeStyle>
                       WOMENSWEAR
                    </NavLink>
                    <NavLink to="/menswear" activeStyle>
                      MENSWEAR
                    </NavLink>
                    <NavLink to="/Profile" activeStyle>
                        PROFILE
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                       ABOUT
                    </NavLink>
                    <NavLink to="/register" activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
 
export default Navbar