import React, { useEffect, useState } from 'react';
import axios from "axios"
import {toast} from "react-toastify"
import './InventoryItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const InventoryItems = () => {
    const[inventories, setInventory] = useState([]);
    const [user] = useAuthState (auth);

     //Add data
     const handleSubmit = async (event) => {
        event.preventDefault();
        const inventory = {
          name: event.target.name.value,
          price: event.target.price.value,
          email: event.target.email.value,
          description: event.target.description.value,
          supplierName: event.target.supplierName.value,
          quantity: event.target.quantity.value,
          img: event.target.img.value,
        };
       const {data} = await axios.post('https://floating-sea-17167.herokuapp.com/inventoryitem', inventory);
      
       if (!data.success){
           toast('Successfully posted')
       }
      
      
      };





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

    return (
        <div className='inventory-bottom '>
           
            {
                inventories.slice(0,1).map( inventory => (
                      
                        <div className='d-flex justify-content-space-between mt-5 container'>
                            <div className='img'><img src={inventory.img} alt="" /></div>
                            <div className='text-box'>
                                <h3>{inventory.name}</h3>
                                <h3 className='price-text mt-4'>${inventory.price}</h3>

                                <p className='description mt-3'>{inventory.description}</p>
                                <div className='paragraph-text'>
                                    <span>Supplier name</span>
                                    <p>Ahmed Ahraf</p>
                                    <span>Quantity</span>
                                    <p> Picec {inventories.length} </p>
                                    <button onClick={() =>handleDelete(inventory._id)} className='btn btn-primary mt-5'>Delivery</button>
                                </div>

                            </div>
                        </div>
            
                ))}
         
        

         <div className='mother-container container  mb-5 '>
     <div className='form-container '>
         <h2 className='mt-3 mb-5'>Input Product</h2>
        <form className='' onSubmit={handleSubmit}>
             <div class="mb-3" className='text-start'>
             <label className='mb-2' for="text">Product Name</label>
                 <input type="text" name='name' class="form-control"   />
            </div>
           <div class="mb-3" className='text-start'>
           <label for="number" class="form-label text-start mt-3">Price</label>
                <input type="price" name='price' class="form-control" />
            </div>

            <div class="mb-3" className='text-start'>
           <label for="number" class="form-label text-start mt-3">Email</label>
                <input type="email" name='email' value={user.email} class="form-control" />
            </div>
        
        <div class="mb-3"className='text-start'>
                <label for="text" class="form-label text-start mt-3">Description</label>
                <input type="text" name='description' class="form-control" />
            </div>
         <div class="mb-3" className='text-start'>
          <label for="" class="form-label mt-3">Supplier Name</label>
                <input type="text" name='supplierName' class="form-control"  />
            </div>
            <div class="mb-3" className='text-start mb-4'>
               <label for="text" class="form-label mt-3">Quantity</label>
              <input type="number"  name='quantity' class="form-control"  />
          </div>
            <div class="mb-3" className='text-start mb-4'>
               <label for="text" class="form-label mt-0">Img</label>
              <input type="url" name='img' class="form-control"  />
          </div>
    
            <button type="submit" className='btn' class="btn btn-primary ">Submit</button>
        </form>
        </div>


        </div>
        </div>


    );
};


export default InventoryItems;