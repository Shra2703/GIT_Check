import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    const getJoke = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        setLoading(true);
        getJoke();
    }, [])
    return {data, loading, error, getJoke}
        
    
}

export default useFetch;