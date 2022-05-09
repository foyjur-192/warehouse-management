import { useEffect, useState } from "react"

const ComputerHook = () => {
  
    const [computers, setComputer] = useState([]);

    useEffect(() => {
    fetch('https://floating-sea-17167.herokuapp.com/computerInventory')
    .then(res => res.json())
    .then(data => setComputer(data));
    },[])
    return[computers, setComputer];

};
export default ComputerHook;