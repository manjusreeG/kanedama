import useRandomAPI from "../hooks/useRandomAPI";
import useSirenAPI from "../hooks/useSirenAPI";

import styled from 'styled-components';

const HomeContainer = styled.div`
  font-size: 1.2em;
  color: #00000f;
  display: inline-flex;
  height: 90%;
`;
const CompanyInfo = styled.span`
    display: block;
`;
const Heading= styled.div`
    font-size: 1.5em;
`;

const Home: React.FC= ()=>{
    // Fetching  personal information
    const userData: any = useRandomAPI()[0];
    // Fetching  business information
    const companyData: any = useSirenAPI();

 return <HomeContainer>
     <div style={{height:'100%',backgroundColor:'#cbc2f0'}}>
     <ul style={{marginRight:'20px'}}>
        <li>Accounts</li>
        <li>Profile</li>
     </ul>
     </div>
     {/* {userData.map((user:any,idx:number)=><p key={idx}>{user.gender}+{user.name && user.name.first}</p>)}</div> */}
     <div style={{marginLeft:'10px'}}>
         <p style={{fontSize:'2em'}}>{userData.gender==='male'?"M.": "Mme."}{userData.name && userData.name.last}</p>
         <div>
            <Heading>Company:</Heading>
            {companyData.map((data: any)=>data.unite_legale &&
            <div> 
            <CompanyInfo>Name: {data.unite_legale.nom}</CompanyInfo>
            <CompanyInfo>SIRET: {data.unite_legale.siren}</CompanyInfo>
            <CompanyInfo>Address: {data.unite_legale.etablissement_siege.geo_adresse}</CompanyInfo>
            </div>)}
         </div>
     </div>
     </HomeContainer>

}
export default Home