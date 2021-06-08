import axios from "axios";
import { useEffect, useState } from "react";

const useRandomAPI = ()=>{
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?nat=fr')
        .then((data)=>{
        setUserData(data.data.results[0])})
        .catch((error)=>{
            // handle error
            console.log(error);
          })
    },[])
    return [userData];
}

export default useRandomAPI;