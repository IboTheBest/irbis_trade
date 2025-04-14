import axios from "axios"
import { useEffect, useState } from "react"

const getProducts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios(`http://localhost:3000/products`).then(res => setData(res.data))
    }, [])
    return data
}

export default getProducts