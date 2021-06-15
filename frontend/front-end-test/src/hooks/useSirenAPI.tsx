import axios from "axios";
import { useEffect, useState } from "react";

const useSirenAPI = () => {
    const [companyData, setCompanyData] = useState({});

    useEffect(() => {
        axios.get('https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890')
            .then((data) => {
                console.log('company data', data)
                setCompanyData(data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return [companyData];
}

export default useSirenAPI;