import { useEffect, useState } from "react"
const Hook = () => {
   
     const [stocks, setStock] = useState([]);

        useEffect(() => {
        fetch('https://floating-sea-17167.herokuapp.com/inventoryitem')
        .then(res => res.json())
        .then(data => setStock(data));
        },[])
       
        return[stocks, setStock];
    }

export default Hook;