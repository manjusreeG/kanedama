import useRandomAPI from "../hooks/useRandomAPI";
import styled from 'styled-components';


const HomeContainer = styled.div`
  font-size: 1.2em;
  color: palevioletred;
  display: inline-flex;
`;

const Home: React.FC= ()=>{

    const userData: any = useRandomAPI()[0];
    console.log('userData name',userData)
 return <HomeContainer style={{display: 'inline-flex'}}>
     <div>
     <ul style={{marginRight:'20px'}}>
        <li>Accounts</li>
        <li>Profile</li>
     </ul>
     </div>
     {/* {userData.map((user:any,idx:number)=><p key={idx}>{user.gender}+{user.name && user.name.first}</p>)}</div> */}
     <div><p style={{fontSize:'2em'}}>{userData.gender==='male'?"M.": "Mme."}{userData.name && userData.name.last}</p></div>
     </HomeContainer>

}
export default Home