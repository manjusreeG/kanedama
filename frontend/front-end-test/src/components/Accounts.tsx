import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import useAccountsAPI from '../hooks/useAccountsAPI';
import DatePicker from 'react-date-picker';
import moment from "moment";
import { useHistory } from 'react-router-dom';


// Convert Date to ISO format helper
const convertDateToISO = (date: Date) => {return new Date(date).toISOString()};

const Heading= styled.div`
    font-size: 1.5em;
`;
const AccountDetails= styled.div`
    .account-details {
        display: inline-block;
        margin: 10px 10px 10px 0px;
        width: 30%;
        border: 1px solid pink;
        padding: 10px;
    }
`;

const ModalComp = styled(Modal)`
    border: 1px solid red;
    border-radius: 5px;
    margin: 10% 30% 5%;
    padding: 20px;
    .modal-title {
        color: blue;
        margin: 10px 5px 10px 0px;
    }
    .submitBtn{
        border:1px solid red
    }
`
const Accounts=():JSX.Element=>{
    const [openModal,setOpenModal] = useState(false);
    const [selectedAccount,setSelectedAccount] = useState<any>();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const accounts: any = useAccountsAPI();
    let history = useHistory();
    const openAccountModal = (accounts: any)=>{
        console.log('aacc',accounts)
        setSelectedAccount(accounts)
        setOpenModal(true);
    }
    const checkTransactions= ()=>{
        setOpenModal(false);
        history.push({
            pathname:`/accounts/${selectedAccount.account_id}`,
            search: `startDate=${convertDateToISO(startDate)}&endDate=${convertDateToISO(endDate)}`,
            state: selectedAccount
        })
            // `/accounts/${selectedAccountId}?startDate=2015-02-04T22:44:30.652&endDate=2015-12-31T22:44:30.652Z`)
    }
    return <AccountDetails>
    <Heading>Accounts: </Heading>
    {accounts.map((account:any)=>
        <div  className='account-details'>
            <div>Account Number: {account.account_number} </div>
            <div>Balance:{account.available} </div>
            <button onClick={()=>openAccountModal(account)}>View Transactions</button>
        </div>
    )}
    <ModalComp
        isOpen={openModal}
        contentLabel="Transaction"
      >
        <div className="modal-title">Please select date range:</div>
        <label>Start Date</label>
        <DatePicker value={startDate} onChange={setStartDate} 
        minDate={moment().subtract(1, "years").toDate()}/>
        <label>End Date</label>
        <DatePicker value={endDate} onChange={setEndDate}/>
        <button className="submitBtn" onClick={checkTransactions}>Check transactions</button>
      </ModalComp>
 </AccountDetails>
}

export default Accounts;
