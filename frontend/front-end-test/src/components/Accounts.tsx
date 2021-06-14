import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import useAccountsAPI from '../hooks/useAccountsAPI';
import DatePicker from 'react-date-picker';
import moment from "moment";
import { useHistory } from 'react-router-dom';
import { Heading } from '../pages/Home';


// Convert Date to ISO format helper
const convertDateToISO = (date: Date) => { return new Date(date).toISOString() };

export const AccountDetailsBlock = styled.div`
    .accountDetails {
        display: inline-block;
        margin: 10px 20px 10px 0px;
        width: 45%;
        border: 1px solid pink;
        border-radius: 5px;
        // background-color: rgba(247, 143, 197, 0.5);
        background: linear-gradient(90deg ,rgba(247, 143, 197, 0.56), rgba(203, 194, 240, 0.45)  );
        padding: 10px 15px;
        font-size: 1.2em;
    }
    .accountHeading{
        padding: 5px 0px;
    }
    span{
       float: right;
    }
    button{
        border: 1px solid;
        background-color: #DF4DD7;
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin: 10px 0px;
    }
    .accBalance{
        font-size: 30px;
    }
`;

const ModalComp = styled(Modal)`
    border: 1px solid red;
    border-radius: 5px;
    margin: 10% 30% 5%;
    padding: 20px;
    .modalTitle {
        color: blue;
        margin: 10px 5px 10px 0px;
    }
    .submitBtn{
        border:1px solid red
    }
`
const Accounts = (): JSX.Element => {
    const [openModal, setOpenModal] = useState(false);
    const [fetchDate, setFetchDate] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<any>();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const accounts: any = useAccountsAPI();
    let history = useHistory();
    const openAccountModal = (accounts: any) => {
        console.log('aacc', accounts)
        setSelectedAccount(accounts)
        setOpenModal(true);
    }
    const checkTransactions = () => {
        setOpenModal(false);
        history.push({
            pathname: `/accounts/${selectedAccount.account_id}`,
            search: `startDate=${convertDateToISO(startDate)}&endDate=${convertDateToISO(endDate)}`,
            state: selectedAccount
        })
    }
    const fetchLastTrans = () => {
        setFetchDate(false);
        setOpenModal(false);
        history.push({
            pathname: `/accounts/${selectedAccount.account_id}`,
            state: selectedAccount
        })
    }
    return <AccountDetailsBlock>
        <Heading>Accounts: </Heading>
        {accounts.map((account: any) =>
            <div key={account.account_id} className='accountDetails'>
                <div className='accountHeading'>Account Number:<span> {account.account_number} </span></div>
                <div className='accountHeading'>Balance:<span className='accBalance'>{account.available} {account.currency}</span></div>
                <button onClick={() => openAccountModal(account)}>View Transactions</button>
            </div>
        )}
        <ModalComp
            isOpen={openModal}
            contentLabel="Transaction"
        >
            {fetchDate ?
                <>
                    <div className="modalTitle">Please select date range:</div>
                    <label>Start Date</label>
                    <DatePicker value={startDate} onChange={setStartDate}
                        minDate={moment().subtract(1, "years").toDate()} />
                    <label>End Date</label>
                    <DatePicker value={endDate} onChange={setEndDate} />
                    <button className="submitBtn" onClick={checkTransactions}>Check transactions</button>
                </>
                : <div>Do you want to view transactions for the specified dates?
                        <button className="submitBtn" onClick={() => setFetchDate(true)}>Yes</button>
                    <button className="submitBtn" onClick={fetchLastTrans}>No</button>
                </div>}
        </ModalComp>
    </AccountDetailsBlock>
}

export default Accounts;
