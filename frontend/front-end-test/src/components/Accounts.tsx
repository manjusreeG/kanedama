import React from 'react';
import styled from 'styled-components';

import useAccountsAPI from '../hooks/useAccountsAPI';


const Heading= styled.div`
    font-size: 1.5em;
`;

const Accounts=():JSX.Element=>{
    const accounts: any = useAccountsAPI();

    return <div>
    <Heading>Accounts: </Heading>
    {accounts.map((account:any)=>
        <div style={{display: 'inline-block', margin: '10px 10px 10px 0px', width:'30%', border:'1px solid pink', padding:'10px'}}>
            <div>Account Number: {account.account_number} </div>
            <div>Balance:{account.available} </div>
        </div>
    )}
 </div>
}

export default Accounts;
