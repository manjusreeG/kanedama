import React, { useContext } from 'react';

// styled
import styled from 'styled-components';
import { FcPhoneAndroid,FcPhone, FcFeedback } from 'react-icons/fc';

// Components
import { UserContext } from '../App';
import { MainContent, Heading } from './Home';
const UserProfileData = styled.div`
    padding: 20px 0px;
    // .image, .info{
    //     display: inline-block;
    // }
    .info{
        padding-top: 20px;
        span{
            display: block;
            padding: 5px;
        }
    }
    .profileImg{
        width: 200px;
        height: 200px;
    }

`;
const Profile: React.FC=()=>{
    const userData: any = useContext(UserContext);
    
    return <MainContent>
            <Heading>My Profile: </Heading>
            <UserProfileData>
                <div className='image'>
                    <img className='profileImg' src={`${userData.picture && userData.picture.large}`} alt='User profile' ></img>
                </div>
                <div className='info'><span>Hi, I'm {userData.name && userData.name.first}.</span>
                {userData.location && <span> I'm living in {userData.location.city}, {userData.location.state} {userData.location.country} {userData.location.postcode}.</span>} 
                <span className='contactInfo'>Here's my contact information:</span>
                <span><FcPhoneAndroid/>{userData.cell}</span>
                <span><FcPhone/>{userData.phone}</span>                    
                <span><FcFeedback />{userData.email}</span>
                </div>
            </UserProfileData>
        </MainContent>
}

export default Profile;
