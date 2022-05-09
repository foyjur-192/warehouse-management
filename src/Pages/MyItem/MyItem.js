import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Hook from '../Hook/Hook';
import './MyItem.css'

const MyItem = () => {
        const [user] = useAuthState(auth);
        const [inventories, setInventory]= useState([]);
        const [chairs, setChair]= useState([]);
        const [Beds, setBed]= useState([]);
        const [computers, setComputer]= useState([]);
        const [Singles, setSingle]= useState([]);
        const [Tables, setTable]= useState([]);



     //Delete data
     //Handle Delete 
   const handleDelete = id => {
    fetch(`https://floating-sea-17167.herokuapp.com/inventoryitem/${id}` ,{
        method:'DELETE'
    })
    .then((result) => {
        result.json().then((resp) => {
            console.warn(resp)
            const remaining = inventories.filter(inventory => inventory._id !== id);
            setInventory(remaining);
        })
    })
   }


 
    useEffect(() => {
 const url = `https://floating-sea-17167.herokuapp.com/inventoryitem`;
 fetch(url)
 .then(res => res.json())
 .then(data => setInventory(data));

},[])
















        useEffect ( () => {
            const getInventories = async() => {
                const email = user.email;
                const url =`https://floating-sea-17167.herokuapp.com/myItem?email=${email}`;
                const {data} = await axios.get(url);
                setInventory(data);
            }
            getInventories();
        }, [user])

        //Chair
        useEffect ( () => {
            const getChair = async() => {
                const email = user.email;
                const url =`https://floating-sea-17167.herokuapp.com/chairItem?email=${email}`;
                const {data} = await axios.get(url);
                setChair(data);
            }
            getChair();
        }, [user])

        //Single bed
        useEffect ( () => {
            const getBed = async() => {
                const email = user.email;
                const url =`https://floating-sea-17167.herokuapp.com/bedItem?email=${email}`;
                const {data} = await axios.get(url);
                setBed(data);
            }
            getBed();
        }, [user])

        // computerTable
        useEffect ( () => {
            const getComputer = async() => {
                const email = user.email;
                const url =`https://floating-sea-17167.herokuapp.com/computerItem?email=${email}`;
                const {data} = await axios.get(url);
                setComputer(data);
            }
            getComputer();
        }, [user])

        // SingleSofa
        useEffect ( () => {
            const getSofa = async() => {
                const email = user.email;
                const url =`https://floating-sea-17167.herokuapp.com/singleItem?email=${email}`;
                const {data} = await axios.get(url);
                setSingle(data);
            }
            getSofa();
        }, [user])

        // office table
        useEffect ( () => {
            const getTable = async() => {
                const email = user.email;
                const url =`https://floating-sea-17167.herokuapp.com/tableItem?email=${email}`;
                const {data} = await axios.get(url);
                setTable(data);
            }
            getTable();
        }, [user])

    return (
        <div className='margin-top'>
       <div className='mt-5 margin-top'>
                <h3 className='mt-5  mb-5'>My Added Items</h3>
            </div>
           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Sofa Set Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {inventories.length}</h5></div>
           </div>
           {
            inventories.map(stock => 

                <div className=' d-flex justify-content-between container background-vertical text-align'>
                <div className='images'> <img src={stock.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{stock.name}</p>
               <p className='Price-text' >${stock.price}</p>
     
                </div>
                <div>
            
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{stock.supplierName}</p>
                </div>
               <div>
               <button onClick={() =>handleDelete(inventories._id)} className='btn btn-primary mt-5'>Delete</button>
               </div>
     
                </div>
            )
           }
           </div>

           {/* chair */}


           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4> Chair Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {chairs.length}</h5></div>
            
           </div>

           {
            chairs.map(chair => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={chair.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{chair.name}</p>
               <p  className='Price-text'>${chair.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{chair.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary' >Delete</button>
               </div>
     
                </div>
            )
           }
           </div>

        
         {/* Beds */}

         <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Beds Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {Beds.length}</h5></div>
            
           </div>

           {
           Beds.map(Bed => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={Bed.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{Bed.name}</p>
               <p className='Price-text'>${Bed.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{Bed.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary'>Delete</button>
               </div>
     
                </div>
            )
           }
           </div>

 {/* Computer Table */}

 <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Computer Table Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {computers.length}</h5></div>
           
           </div>

           {
            computers.map(computer => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={computer.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{computer.name}</p>
               <p  className='Price-text'>${computer.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{computer.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary'>Delete</button>
               </div>
     
                </div>
            )
           }
           </div>


{/* Single Sofa */}

<div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Single Sofa set Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {Singles.length}</h5></div>
           
           </div>

           {
            Singles.map(single => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={single.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{single.name}</p>
               <p className='Price-text' >${single.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{single.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary'>Delete</button>
               </div>
     
                </div>
            )
           }
           </div>



{/* office Table item */}
           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Office Table Items Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {Tables.length}</h5></div>
           
           </div>

           {
           Tables.map(Table => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={Table.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{Table.name}</p>
               <p className='Price-text'>${Table.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{Table.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary's>Delete</button>
               </div>
     
                </div>
            )
           }
           </div>













        </div>
    );
};

export default MyItem;