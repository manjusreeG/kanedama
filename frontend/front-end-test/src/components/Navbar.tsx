import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';


const NavbarComp = styled.div`
    height: 100%;
    width: 15%;
    background-color: #CBC2F0;
    position:fixed;
    .navList{
        margin-right: 20px;
        list-style: none;
        margin: 5px;
        border: 1px solid;
        text-decoration: none;
    }
    .active{
        background-color: #00000F;
    }
`;


const Navbar: React.FC = ()=>{
 return ( 
 <NavbarComp>
    <ul className='navList'>
        <li><NavLink activeClassName='active' to='/accounts'> Accounts</NavLink></li>
        <li><NavLink activeClassName='active' to='/profile'> Profile</NavLink></li>
    </ul>
 </NavbarComp>
 )}

export default Navbar;