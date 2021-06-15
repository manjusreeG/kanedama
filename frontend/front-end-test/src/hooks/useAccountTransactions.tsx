import axios from "axios";
import { useEffect, useState } from "react";

const useAccountTransactions = (accountId: string, startDate: string | null, endDate: string | null) => {
    const [transactionInfo, setTransactionInfo] = useState([]);

    const url = (startDate && endDate) ? `https://kata.getmansa.com/accounts/${accountId}/transactions?from=${startDate}&to=${endDate}` : `https://kata.getmansa.com/accounts/${accountId}/transactions`

    useEffect(() => {
        axios.get(url)
            .then((data: any) => {
                console.log('transactions data', data)
                setTransactionInfo(data.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, [url, accountId, startDate, endDate])
    return [transactionInfo];
}

export default useAccountTransactions;