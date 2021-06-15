import axios from "axios";
import { useEffect, useState } from "react";

export const randomAPIUrl = "https://randomuser.me/api/?nat=fr";
const useRandomAPI = (url: string) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(url)
            .then((data) => {
                console.log('user data', data)
                setUserData(data.data.results[0])
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, [url])
    return [userData];
}

export default useRandomAPI;