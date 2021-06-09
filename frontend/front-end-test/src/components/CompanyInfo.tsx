import React from 'react';
import { useState } from "react";
import useSirenAPI from "../hooks/useSirenAPI";

import styled from 'styled-components';


const CompanyInfoBlock = styled.span`
    display: block;
`;

interface CompanyInfoProps{
    
}

const CompanyInfo: React.FC=()=>{
    
    // Fetching  business information
    const companyInfo = useSirenAPI();
    console.log("company",companyInfo)
    
    return  <div> 
    {companyInfo && companyInfo.map((data: any)=>data.unite_legale &&
        <><CompanyInfo>Name: {data.unite_legale.nom}</CompanyInfo>
        <CompanyInfo>SIRET: {data.unite_legale.siren}</CompanyInfo>
        <CompanyInfo>Address: {data.unite_legale.etablissement_siege.geo_adresse}</CompanyInfo>
        </>
    )}
        </div>
}

export default CompanyInfo