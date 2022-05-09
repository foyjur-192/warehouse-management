import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BedsHook from '../BedsHook/BedsHook';
import ChairHook from '../ChairHook/ChairHook';
import ComputerHook from '../ComputerHook/ComputerHook';
import SingleHook from '../SingleHook/SingleHook';
import TableHook from '../TableHook/TableHook';
import './InventoryManagement.css'

const InventoryManagement = () => {
 
    // const [chairs, setChair] = ChairHook();
    const [Beds, setBeds] = BedsHook();
    const [computers, setComputer] = ComputerHook();
    const [Singles , setSingle] = SingleHook();
    const [Tables, setTable] = TableHook();
    
    const[stocks, setStock] = useState([]);
    const[chairs, setChair] = ChairHook([])
    const navigate = useNavigate();

// // Popup Button Handler
// const [popup, setPopup] = useState(false);
// const handleClickOpen = () =>{
//     setPopup(!popup);

// }

// const closePopup = () => {
//     setPopup(false);
// }

//for chair





// End here


//Add data sofa



    // SofaItemDelete
    const handleDelete = id => {
        fetch(`https://floating-sea-17167.herokuapp.com/inventoryItem/${id}` ,{
            method:'DELETE'
        })
        .then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                const remaining = stocks.filter(stock => stock._id !== id);
                setStock(remaining);
            })
        })
       }
    
    
     
        useEffect (() => {
     const url = `https://floating-sea-17167.herokuapp.com/inventoryItem/`;
     fetch(url)
     .then(res => res.json())
     .then(data => setStock(data));
    
    },[])




       //Chair delete
          // SofaItemDelete

    return (
        <div className='inventory-bottom' >
            <div>
                <h3 className='mt-5  mb-5'>Management Inventories</h3>
            </div>
           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Sofa Set Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {stocks.length}</h5></div>
            <div className='box2'> <button className='btn btn-primary' onClick={()=>navigate('/inventory')}  >Add Item</button></div>
           </div>
           {
            stocks.map(stock => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={stock.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{stock.name}</p>
               <p className='Price-text'>${stock.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{stock.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary' onClick={() => handleDelete (stocks._id)}>Delete</button>
               </div>
     
                </div>
            )
           }
           </div>
           <br></br>
<br></br>
<br></br>


 


   {/* Chair */}

           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4> Chair Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {chairs.length}</h5></div>
            <div className='box2'> <button className='btn btn-primary' onClick={()=> navigate ('/chairInventory')}>Add Item</button></div>
           </div>

           {
            chairs.map(chair => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={chair.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{chair.name}</p>
               <p className='Price-text'>${chair.price}</p>
     
                </div>
                <div>
               <span className='text-dark'>Supplier Name</span>
                <p>{chair.supplierName}</p>
                </div>
               <div>
                   <button className='btn btn-primary'  >Delete</button>
               </div>
     
                </div>
            )
           }
           </div>

           <br></br>
<br></br>
<br></br>

 

   {/* Beds */}

           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Beds Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {Beds.length}</h5></div>
            <div className='box2'> <button className='btn btn-primary' onClick={()=> navigate ('/bedInventory')} >Add Item</button></div>
           </div>

           {
           Beds.map(Bed => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={Bed.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{Bed.name}</p>
               <p className='Price-text' >${Bed.price}</p>
     
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
           <br></br>
<br></br>
<br></br>

 



   {/* Computer Table */}

           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Computer Table Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {computers.length}</h5></div>
            <div className='box2'> <button className='btn btn-primary'  onClick={()=> navigate ('/computerInventory')}>Add Item</button></div>
           </div>

           {
            computers.map(computer => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={computer.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{computer.name}</p>
               <p className='Price-text' >${computer.price}</p>
     
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
           <br></br>
<br></br>
<br></br>


 
 {/* Single Sofa */}

           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Single Sofa set Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {Singles.length}</h5></div>
            <div className='box2'> <button className='btn btn-primary'  onClick={()=> navigate ('/singleInventory')} >Add Item</button></div>
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



 

 {/* Office Table */}
<br></br>
<br></br>
<br></br>

           <div className=''>
           <div className='d-flex justify-content-between container '>
            <div className='box1'><h4>Office Table Items Items</h4></div>
            <div className='box1'><h5>Total Item Quantity {Tables.length}</h5></div>
            <div className='box2'> <button className='btn btn-primary' onClick={()=> navigate ('/tableInventory')}>Add Item</button></div>
           </div>

           {
           Tables.map(Table => 

                <div className=' d-flex justify-content-between container background-vertical'>
                <div className='images'> <img src={Table.img} alt="" /> </div>
                <div className='text-left'>
               <p className='Name-text'>{Table.name}</p>
               <p className='Price-text' >${Table.price}</p>
     
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

export default InventoryManagement;