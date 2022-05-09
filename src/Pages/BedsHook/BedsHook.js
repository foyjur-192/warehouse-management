import { useEffect, useState } from "react"

const BedsHook = () => {
    const [Beds, setBeds] = useState([]);

    useEffect(() => {
    fetch('https://floating-sea-17167.herokuapp.com/bedInventory')
    .then(res => res.json())
    .then(data => setBeds(data));
    },[])
   
    return[Beds, setBeds];

};

export default BedsHook;