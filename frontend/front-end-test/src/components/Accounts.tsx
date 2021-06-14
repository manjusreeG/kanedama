import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import useAccountsAPI from '../hooks/useAccountsAPI';
import DatePicker from 'react-date-picker';
import moment from "moment";
import { DateRangePicker } from 'react-date-range';
import { useHistory } from 'react-router-dom';
import { Heading } from '../pages/Home';
import 'react-date-picker/dist/DatePicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


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
    border: 1px solid pink;
    border-radius: 5px;
    margin: 15% 30% 5%;
    padding: 20px;
    background: linear-gradient(180deg,rgba(247, 143, 197, 0.20), rgba(203, 194, 240, 0.56));
    .modal {

    }
    .hintMsg{
        color: red;
        // padding: 40px 0px;
        margin: 20px 0px;
    }
    .confirmTransaction{
        font-size: 20px;
        text-align: center;
    }
    .modalTitle {
        font-size: 24px;
        margin: 10px 5px 10px 0px;
    }
    button:disable{
        color: red;
    }
    .submitBtn{
        font-size: 1em;
        padding: 10px;
        margin: 10px;
        width: 15%;
        border: 1px solid;
        background-color: rgba(223, 77, 215, 0.7);
        color: white;
        border-radius: 5px;
        border: 1px solid pink;
    }
    .checkTransaction{
        width: 35%;
        margin: 0% 35%;
    }
`
const Accounts = (): JSX.Element => {
    const [openModal, setOpenModal] = useState(false);
    const [fetchDate, setFetchDate] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<any>();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [enableCheckTrans, setEnableCheckTrans] = useState(false);
    const accounts: any = useAccountsAPI();
    let history = useHistory();

    const openAccountModal = (accounts: any) => {
        console.log('aacc', accounts)
        setSelectedAccount(accounts)
        setOpenModal(true);
        setStartDate(moment(endDate).subtract(1, "years").toDate());
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

    useEffect(()=>{
        const differenceDays =  Math.abs(moment(startDate).diff(moment(endDate),'days'));
        console.log('diff datqs', differenceDays);
        if(differenceDays<=365) {
            setEnableCheckTrans(true) 
        } else{setEnableCheckTrans(false)};
    },[startDate,endDate])

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
            <div className="modal">
                {fetchDate ?
                    <>
                        <div className="modalTitle">Please select date range:</div>
                        <div style={{padding: '10px 0px'}}>
                            <span style={{margin: '10px 0px'}}>
                                <label>Start Date</label>
                                <DatePicker value={startDate} onChange={setStartDate}
                                />
                            </span>
                            <span style={{margin: '10px'}}>
                                <label>End Date</label>
                                <DatePicker value={endDate} onChange={setEndDate} maxDate={new Date()} />
                            </span>
                        </div>
                        {!enableCheckTrans && <div className="hintMsg">Hint: The date interval should not exceed 365 days</div>}
                        <button className="submitBtn checkTransaction" style={{color: !enableCheckTrans? 'red': 'white', backgroundColor: !enableCheckTrans ? 'white' : 'rgba(223, 77, 215, 0.7)'}} disabled={!enableCheckTrans} onClick={checkTransactions}>Check transactions</button>
                    </>
                    : <div className='confirmTransaction'>
                        <span>Do you want to view transactions for the specified dates?</span>
                        <div>
                            <button className="submitBtn" onClick={() => setFetchDate(true)}>Yes</button>
                            <button className="submitBtn" onClick={fetchLastTrans}>No</button>
                        </div>
                    </div>}
            </div>
        </ModalComp>
    </AccountDetailsBlock>
}

export default Accounts;
