import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import useAccountTransactions from '../hooks/useAccountTransactions';


const Heading= styled.div`
    font-size: 1.5em;
`;

const Transactions: React.FC=()=>{
    const location = useLocation();
    const queryParams= new URLSearchParams(location.search);
    const accountDetails:any = location.state;
    const startDate: any = queryParams.get('startDate');
    const endDate: any = queryParams.get('endDate');
    const transactionInfo= useAccountTransactions(accountDetails.account_id, startDate, endDate);

    console.log("trans ",transactionInfo);

    return <div style={{marginLeft:'17%'}}>
            <Heading>Transactions Info: </Heading>
            <div>
                <div>Account Number: {accountDetails.account_number} </div>
                <div>Balance:{accountDetails.available} </div>
            </div>
            <p>Start Date: {queryParams.get('startDate')}</p>
            <p>End Date: {queryParams.get('endDate')}</p>
            <ul>
            {transactionInfo ? transactionInfo.map((trannaction: any)=>
                <li>{trannaction.amount} Currency: {trannaction.currency}</li>)
                :<></>
            }
            </ul>
        </div>
}

export default Transactions;
