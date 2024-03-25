import { useEffect, useState } from "react";

const useData = () => {
    const [book,setbook] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(()=>{
          const fetchdata = async () =>{
          setloading(true)  
          const res = await fetch('/data.json')
          const data = await res.json()
          setbook(data)
          setloading(false)
          }
          fetchdata()
    },[])
    return {book,loading};
};

export default useData;