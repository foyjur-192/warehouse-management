import { useEffect, useState } from "react"
const ChairHook = () => {
   
     const [chairs, setChair] = useState([]);

        useEffect(() => {
        fetch('https://floating-sea-17167.herokuapp.com/chairinventory')
        .then(res => res.json())
        .then(data => setChair(data));
        },[])
       
        return[chairs, setChair];
    }

export default ChairHook;