import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../App';


const Heading= styled.div`
    font-size: 1.5em;
`;

const Profile: React.FC=()=>{
    const userData: any = useContext(UserContext);
    
    return <div style={{marginLeft:'17%'}}>
            <Heading>User Profile Info: </Heading>
            <div>Name: {userData.name && userData.name.last}</div>
        </div>
}

export default Profile;
