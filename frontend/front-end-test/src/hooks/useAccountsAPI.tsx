import axios from "axios";
import { useEffect, useState } from "react";

const useAccountsAPI = ()=>{
    const [accountsData, setAccountsData] = useState([]);

    useEffect(()=>{
        axios.get('https://kata.getmansa.com/accounts')
        .then((data)=>{
            console.log('accounts data',data)
            setAccountsData(data.data)})
        .catch((error)=>{
            // handle error
            console.log(error);
          })
    },[])
    return accountsData;
}

export default useAccountsAPI;