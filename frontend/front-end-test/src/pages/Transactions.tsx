import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { AccountDetailsBlock } from '../components/Accounts';
import useAccountTransactions from '../hooks/useAccountTransactions';
import { MainContent, Heading} from './Home';

const Transactions: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const accountDetails: any = location.state;
    const startDate: any = queryParams.get('startDate');
    const endDate: any = queryParams.get('endDate');
    const transactionInfo = useAccountTransactions(accountDetails.account_id, startDate, endDate);

    console.log("trans ", transactionInfo);

    return <MainContent>
        <Heading>Transactions Info: </Heading>
        <AccountDetailsBlock>
            <div key={accountDetails.account_id} className='accountDetails'>
                <div className='accountHeading'>Account Number:<span> {accountDetails.account_number} </span></div>
                <div className='accountHeading'>Balance:<span className='accBalance'>{accountDetails.available} {accountDetails.currency}</span></div>
            </div>
        </AccountDetailsBlock>
        <p>Start Date: {queryParams.get('startDate')}</p>
        <p>End Date: {queryParams.get('endDate')}</p>
        {transactionInfo.length>0?
        <ul>
            {transactionInfo.map((trannaction: any) =>
                <li>{trannaction.amount} Currency: {trannaction.currency}</li>
                )}
        </ul>: 
        <div>No transactions found</div>}
    </MainContent>
}

export default Transactions;
