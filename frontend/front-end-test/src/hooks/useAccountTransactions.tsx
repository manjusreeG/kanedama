import axios from "axios";
import { useEffect, useState } from "react";

const useAccountTransactions = (accountId: string, startDate: string, endDate: string)=>{
    const [transactionInfo, setTransactionInfo] = useState([]);

    useEffect(()=>{
        axios.get(`https://kata.getmansa.com/accounts/${accountId}/transactions?from=${startDate}&to=${endDate}`)
        .then((data)=>{
            setTransactionInfo(data.data)})
        .catch((error)=>{
            // handle error
            console.log(error);
          })
    },[accountId,startDate,endDate])
    return [transactionInfo];
}

export default useAccountTransactions;