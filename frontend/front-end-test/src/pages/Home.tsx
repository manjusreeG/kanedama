import React, { useContext } from "react";
// Hooks
import useSirenAPI from "../hooks/useSirenAPI";
// styles
import styled from 'styled-components';
// Commponents
import { UserContext } from "../App";
import Accounts from '../components/Accounts';

export const Container = styled.div`
  font-size: 1.2em;
  color: #00000f;
  display: inline-flex;
  height: 100%;
  margin-top: 5%;
  padding-top: 10px;
  width:100%;
`;

const CompanyInfo = styled.span`
    display: block;
    .details-block{
        margin: 10px 0px;
    }
    .details{
        width: 100%; 
        max-width: 40px;
        padding: 0px 15px 0px 2px;
    }
`;

export const Heading = styled.div`
    font-size: 1.5em;
    padding: 5px 0px;
    font-style: italic;
`;

const UserTitle= styled.div`
    font-family: Apple Chancery, cursive;
    font-size: 1.8em;
    padding: 15px 0px;
`;

export const MainContent = styled.div`
    margin: 5px;
    margin-left: 17%;
    width: calc(100% - 15%);
    padding: 5px;
`;

const Home: React.FC = () => {
    // Fetching  business information
    const companyData: any = useSirenAPI();
    // Getting  user information
    const userData: any = useContext(UserContext);

    return (<MainContent>
        <UserTitle >Hello {userData.gender === 'male' ? "M." : "Mme."}{userData.name && userData.name.last}, </UserTitle>
        <CompanyInfo>
            <Heading>Company:</Heading>
            {companyData.map((data: any) => data.unite_legale &&
                <div key={data.unite_legale.id}>
                    <div className='details-block'>
                        <span className='details'>Name:</span>
                        {data.unite_legale.nom ? data.unite_legale.nom : data.unite_legale.denomination}
                    </div>
                    <div className='details-block'>
                        <span  className='details'>SIRET:</span>
                        {data.unite_legale.siren}
                    </div>
                    <div className='details-block'>
                        <span  className='details'>Address:</span>
                        {data.unite_legale.etablissement_siege.geo_adresse}
                    </div>
                </div>)}
        </CompanyInfo>
        <Accounts />
    </MainContent>)
}

export default Home