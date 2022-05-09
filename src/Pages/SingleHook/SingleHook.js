import { useEffect, useState } from "react"

const SingleHook = () => {
    const [Singles, setSingle] = useState([]);

    useEffect(() => {
    fetch('https://floating-sea-17167.herokuapp.com/singleInventory')
    .then(res => res.json())
    .then(data => setSingle(data));
    },[])
   
    return[Singles, setSingle];
};

export default SingleHook;