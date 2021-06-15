import React, { useContext } from 'react';
// Styling
import styled from 'styled-components';
// Context
import { UserContext } from '../App';
import { NavLink } from 'react-router-dom';

const NavbarComp = styled.div`
    height: 100%;
    width: 15%;
    background-color: #CBC2F0;
    justify-content: space-between;
    position: fixed;
    top: 10%;
    left: 0;
    z-index: 0;
    .navList{
        margin-right: 20px;
        list-style: none;
        margin: 5px;
        padding: 10px;
    }
    .listItem{
        text-decoration: none;
        padding: 10px;
        padding-left: 15px;
        display:block;
    }
    .active{
        background-color: rgba(247, 143, 197, 0.56);
        border-radius: 2px;
    }
`;
const UserProfile = styled.div`
    margin: 10%;
    padding: 10px;
    .profileImg{
        border-radius: 50%;
        width: 100%;
    }
    .title{
        text-align: center;
        font-size: 22px;
        margin: 5px;
    }
`;

const Navbar: React.FC = () => {

    const userData: any = useContext(UserContext);

    return (
        <NavbarComp>
            <UserProfile className='userProfile'>
                <img className='profileImg' src={`${userData.picture && userData.picture.large}`} alt='User profile' ></img>
                {userData.name && <div className='title'>{userData.name.first} {userData.name.last}</div>}
            </UserProfile>
            <div className='navList'>
                <NavLink className='listItem' activeClassName='active' to='/accounts'> Accounts</NavLink>
                <NavLink className='listItem' activeClassName='active' to='/profile'> Profile</NavLink>
            </div>
        </NavbarComp>
    )
}

export default Navbar;