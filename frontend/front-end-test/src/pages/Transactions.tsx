import React from 'react';
// styled
import styled from 'styled-components';
// Hooks
import useAccountTransactions from '../hooks/useAccountTransactions';
import { useLocation } from 'react-router';
// Components
import { AccountDetailsBlock } from '../components/Accounts';
import { MainContent, Heading } from './Home';
const moment = require('moment');

const TransactionTable = styled.table`
    width: 100%;
    th, td{
        padding: 15px 15px 20px 15px;
        margin: 5px;
    }
    th{ 
        font-family:  Apple Chancery, cursive;
    }
    td{
        border-right: 2px solid
    }
`
const TransactionInfo = styled.div`
    .dateDisp{
        margin: 15px;
    }
    .noData{
        text-align: center;
        margin: 40px 15%;
        padding: 30px;
        border: 1px solid;
        border-radius: 5px;
    }
`;

const Transactions: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const accountDetails: any = location.state;
    let startDate: any;
    let endDate: any;
    // fetch transaction history
    const transactionInfo = useAccountTransactions(accountDetails.account_id, queryParams.get('startDate'), queryParams.get('endDate'));

    if(queryParams.get('startDate')){
        startDate = moment(queryParams.get('startDate')).toISOString().split('T')[0];
    }if(queryParams.get('endDate')){
        endDate = moment(queryParams.get('endDate')).toISOString().split('T')[0];
    }

    return <MainContent style={{textAlign: 'center'}}>
        <Heading>Transactions Info: </Heading>
        <AccountDetailsBlock>
            <div key={accountDetails.account_id} className='accountDetails'>
                <div className='accountHeading'>Account Number:<span> {accountDetails.account_number} </span></div>
                <div className='accountHeading'>Balance:<span className='accBalance'>{accountDetails.available} {accountDetails.currency}</span></div>
            </div>
        </AccountDetailsBlock>
        <TransactionInfo>
            {startDate && endDate && <div className='dateDisp'> Transaction history from {moment(startDate).format('DD MMM YYYY')} to {moment(endDate).format('DD MMM YYYY')} </div>}
            {transactionInfo.length > 0 ?
                <TransactionTable>
                    {transactionInfo.map((transaction: any) =>
                        !Array.isArray(transaction) ? <>
                            <thead>
                                <th>Date</th>
                                <th>Transaction type</th>
                                <th>Transaction Category</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </thead>
                            <tbody key={transaction.timestamp}>
                                <td>{transaction.timestamp}</td>
                                <td>{transaction.transaction_type}</td>
                                <td>{transaction.transaction_category}</td>
                                <td>{transaction.amount} {transaction.currency}</td>
                                <td>{transaction.status}</td>
                            </tbody>
                        </>:  <tbody><div className='noData'>No transaction history found</div></tbody>
                    )}
                </TransactionTable>
                :
                <div className='noData'>No transactions history found</div>}
        </TransactionInfo>
    </MainContent>
}

export default Transactions;
