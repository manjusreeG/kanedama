import React from "react";
// import {Link} from "react-router-dom";
import useRandomAPI from "../hooks/useRandomAPI";
import useSirenAPI from "../hooks/useSirenAPI";
// import useAccountsAPI from "../hooks/useAccountsAPI";
// import CompanyInfo from '../components/CompanyInfo';
import Accounts from '../components/Accounts';
import styled from 'styled-components';

export const Container  = styled.div`
  font-size: 1.2em;
  color: #00000f;
  display: inline-flex;
  height: 100%;
  margin-top: 5%;
  width:100%;
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

 return (<div style={{marginLeft:'17%'}}>
         <p style={{fontSize:'2em'}}>{userData.gender==='male'?"M.": "Mme."}{userData.name && userData.name.last}</p>
         <div>
            <Heading>Company:</Heading>
            {/* <CompanyInfo />  */}
            {companyData.map((data: any)=>data.unite_legale &&
            <div> 
            <CompanyInfo>Name: {data.unite_legale.nom?data.unite_legale.nom:data.unite_legale.denomination}</CompanyInfo>
            <CompanyInfo>SIRET: {data.unite_legale.siren}</CompanyInfo>
            <CompanyInfo>Address: {data.unite_legale.etablissement_siege.geo_adresse}</CompanyInfo>
            </div>)}
         </div>
         <Accounts />
     </div>)
}

export default Home