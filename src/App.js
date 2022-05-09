import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Navbar from './Pages/Navbar/Navbar';
import ChairInventory from './Pages/ChairItem/ChairInventory/ChairInventory';
import ComputerInventory from './Pages/ComputerItem/ComputerInventory/ComputerInventory';
import BedInventory from './Pages/BedItem/BedInventory/BedInventory';
import TableInventory from './Pages/TableItem/TableInventory/TableInventory';
import SingleInventory from './Pages/SingleItem/SingleInventory/SingleInventory';
import InventoryManagement from './Pages/InventoryManagement/InventoryManagement';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Footer/Footer';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/inventoryItems' element={
       
       <RequireAuth> <InventoryItems></InventoryItems> </RequireAuth>
      }> </Route>


       <Route path='/login' element={ <LogIn></LogIn>}></Route>
       <Route path='/signup' element={ <SignUp></SignUp>}></Route>
       <Route path='/chairInventory' element={
       <RequireAuth><ChairInventory></ChairInventory> </RequireAuth>
       }></Route>
     
       <Route path='/computerInventory' element={
       <RequireAuth> <ComputerInventory></ComputerInventory></RequireAuth>
       }></Route>
       <Route path='/bedInventory' element={
       <RequireAuth><BedInventory ></BedInventory></RequireAuth>
        }></Route>
       <Route path='/tableInventory' element={
       <RequireAuth> <TableInventory></TableInventory></RequireAuth>
       }></Route>
       <Route path='/singleInventory' element={
       <RequireAuth><SingleInventory></SingleInventory></RequireAuth>
       
        }></Route>
       <Route path='/myItem' element={
         <RequireAuth> <MyItem></MyItem></RequireAuth>
          }></Route>
       <Route path='/inventoryManagement' element={
         <RequireAuth> <InventoryManagement></InventoryManagement></RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}> </Route>
        <Route path='*' element ={ <NotFound></NotFound>}> </Route>
    </Routes>
    <ToastContainer/>
    <Footer></Footer>
    </div>
  );
}
export default App;
