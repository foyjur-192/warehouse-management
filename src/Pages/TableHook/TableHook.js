import { useEffect, useState } from "react"

const TableHook = () => {
    const [Tables, setTable] = useState([]);

    useEffect(() => {
    fetch('https://floating-sea-17167.herokuapp.com/tableInventory')
    .then(res => res.json())
    .then(data => setTable(data));
    },[])
   
    return[Tables, setTable];
};

export default TableHook;