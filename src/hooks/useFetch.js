import {useEffect, useState} from "react";
import {http} from "../api/http";

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, seLoading] = useState(false)

    useEffect(() => {
        (async () => {
            seLoading(true)
            try {
                const fetchApi = await http.get(url)
                return setData(fetchApi.data)
            } catch (error) {
                throw new Error(error)
            } finally {
                seLoading(false)
            }
        })()
    }, [])

    return {data, loading}
}