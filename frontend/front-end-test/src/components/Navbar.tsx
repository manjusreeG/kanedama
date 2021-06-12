import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';


const NavbarComp = styled.div`
    height: 100%;
    width: 15%;
    background-color: #CBC2F0;
    position:fixed;
`;

const Navbar: React.FC = ()=>{
 return ( <NavbarComp>
 <ul style={{marginRight:'20px'}}>
    <li><NavLink to='/accounts'> Accounts</NavLink></li>
    <li><NavLink to='/profile'> Profile</NavLink></li>
 </ul>
 </NavbarComp>)
}

export default Navbar;