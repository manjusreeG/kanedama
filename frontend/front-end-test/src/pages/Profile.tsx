import React from 'react';
import styled from 'styled-components';


const Heading= styled.div`
    font-size: 1.5em;
`;

const Profile: React.FC=()=>{
    
    return <div style={{marginLeft:'17%'}}>
            <Heading>User Profile Info: </Heading>
        </div>
}

export default Profile;
