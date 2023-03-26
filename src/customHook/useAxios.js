import {useEffect, useState} from "react";
import axios from "axios";

const UseAxios = (url1, url2) => {

    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    useEffect(() => {
     const fetchData = async() => {
         const request1 = axios.get(url1);
         const request2 = axios.get(url2);

         axios.all([ request1, request2 ]).then(axios.spread((...responses) => {
             const response1 = responses[0]
             const response2 = responses[1]
             setData1(response1.data)
             setData2(response2.data)
         }))

        }
        fetchData()
    }, [url1, url2]);

    return [data1, data2];

}
export default UseAxios;