import React from "react";
// import {Link} from "react-router-dom";
import useRandomAPI from "../hooks/useRandomAPI";
import useSirenAPI from "../hooks/useSirenAPI";
// import useAccountsAPI from "../hooks/useAccountsAPI";
// import CompanyInfo from '../components/CompanyInfo';
import Accounts from '../components/Accounts';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  font-size: 1.2em;
  color: #00000f;
  display: inline-flex;
  height: 100%;
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
    // Fetching  financial information
    // const accounts: any = useAccountsAPI();
    // const onClick = () =>{
    //     console.log('val')
    // }

 return <>
     {/* <div style={{height:'100%',backgroundColor:'#cbc2f0'}}>
     <ul style={{marginRight:'20px'}}>
        <li><Link to="/">
Accounts</Link></li>
        <li>Profile</li>
     </ul>
     </div> */}
     {/* {userData.map((user:any,idx:number)=><p key={idx}>{user.gender}+{user.name && user.name.first}</p>)}</div> */}
     <div style={{marginLeft:'10px'}}>
         <p style={{fontSize:'2em'}}>{userData.gender==='male'?"M.": "Mme."}{userData.name && userData.name.last}</p>
         <div>
            <Heading>Company:</Heading>
            {/* <CompanyInfo />  */}
            {companyData.map((data: any)=>data.unite_legale &&
            <div> 
            <CompanyInfo>Name: {data.unite_legale.nom}</CompanyInfo>
            <CompanyInfo>SIRET: {data.unite_legale.siren}</CompanyInfo>
            <CompanyInfo>Address: {data.unite_legale.etablissement_siege.geo_adresse}</CompanyInfo>
            </div>)}
         </div>
         <Accounts />
     </div>
     </>

}

export default Home