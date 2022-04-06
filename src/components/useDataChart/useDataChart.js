import { useEffect, useState } from "react"

const useDataChart =()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(value=>setData(value))

    },[])
    return [data,setData];
}
export default useDataChart;