import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BedsHook from '../BedsHook/BedsHook';
import ChairHook from '../ChairHook/ChairHook';
import ComputerHook from '../ComputerHook/ComputerHook';
import Hook from '../Hook/Hook';
import SingleHook from '../SingleHook/SingleHook';
import TableHook from '../TableHook/TableHook';
import Img1 from '../../Image/livingroom.jpg'
import Img2 from '../../Image/newdesign.jpg'
import Img3 from '../../Image/sofa.jpg'
import Img4 from '../../Image/best deal.jpg'


import './Home.css';

const Home = () => {
  const [stocks, setStock] = Hook();
  const [chairs, setChair] = ChairHook();
  const [Beds, setBeds] = BedsHook();
  const [computers, setComputer] = ComputerHook();
  const [Singles, setSingle] = SingleHook();
  const [Tables, setTable] = TableHook();



  const navigate = useNavigate();
  return (
    <div>
      <div className='background col-12 col-sm-12'>

        <h1 className='Hero-text'>We supply Best ever Furniture<br></br> with Premium Quality</h1>
        <p className='text-light second-text'>We ensure Comfort and luxury of the Furniture,Our Suppliers are trustWorthy.You can believe them. We are started this business a<br></br>  decade  ago.We always maintain our supply chain so don't worry about supply  </p>
        <button className='LogButton'>About us</button>
      </div>
      <div className='' >
        <h1 className='mt-5 mb-5'>Our Furniture Stock Item</h1>
        <div className=' container'>
          <div className='stock-item mx-auto '>


            {
              stocks.slice(0, 1).map(stock =>
                <div className='background-color'>
                  <img className='image' src={stock.img} alt="" />
                  <div className='namePrice d-flex justify-content-between'>
                    <div className='box-1'>
                      <h4 className='heading'>{stock.name}</h4>
                    </div>
                    <div className='box-2'>
                      <h3 className='heading'>${stock.price}</h3>
                    </div>
                  </div>
                  <p className='text'>{stock.description}</p>

                  <div className='quantity-line d-flex justify-content-between mt-5 '>
                    <div>
                      <span className='text-dark third-span'>Spplier Name</span>
                      <p>Ahmed Ahraf</p>
                    </div>
                    <div>
                      <span className='text-dark third-span'>Quantity</span>
                      <p>{stocks.length} picec</p>
                    </div>
                    <div>
                      <button className=' LogButtonT mt-2' onClick={() => navigate('/inventoryItems')} > Update Stock</button>
                    </div>

                  </div>
                </div>

              )
            }


            {
              chairs.slice(0, 1).map(chair =>
                <div>
                  <div className='background-color'>
                    <img className='image' src={chair.img} alt="" />
                    <div className='namePrice d-flex justify-content-between'>
                      <div className='box-1'>
                        <h4 className='heading'>{chair.name}</h4>
                      </div>
                      <div className='box-2'>
                        <h4 className='heading'>${chair.price}</h4>
                      </div>
                    </div>
                    <p className='text'>{chair.description}</p>

                    <div className='quantity-line d-flex justify-content-between mt-5 '>
                      <div>
                        <span className='text-dark third-span'>Spplier Name</span>
                        <p>Ahmed Ahraf</p>
                      </div>
                      <div>
                        <span className='text-dark third-span'>Quantity</span>
                        <p>{chairs.length} picec</p>
                      </div>
                      <div>
                        <button className=' LogButtonT ' onClick={() => navigate('/chairInventory')} >Update Stock</button>
                      </div>

                    </div>
                  </div>
                </div>

              )
            }


            {
              Beds.slice(0, 1).map(Bed =>

                <div className='background-color'>
                  <img className='image' src={Bed.img} alt="" />
                  <div className='namePrice d-flex justify-content-between'>
                    <div className='box-1'>
                      <h4 className='heading'>{Bed.name}</h4>
                    </div>
                    <div className='box-2'>
                      <h4 className='heading'>${Bed.price}</h4>
                    </div>
                  </div>
                  <p className='text'>{Bed.description}</p>

                  <div className='quantity-line d-flex justify-content-between mt-5 '>
                    <div>
                      <span className='text-dark third-span'>Spplier Name</span>
                      <p>Ahmed Ahraf</p>
                    </div>
                    <div>
                      <span className='text-dark third-span' >Quantity</span>
                      <p>{Beds.length} picec</p>
                    </div>
                    <div>
                      <button className=' LogButtonT' onClick={() => navigate('/bedInventory')}>Update Stock</button>
                    </div>

                  </div>
                </div>

              )
            }
            {
              computers.slice(0, 1).map(computer =>
                <div className='background-color'>
                  <img className='image' src={computer.img} alt="" />
                  <div className='namePrice d-flex justify-content-between'>
                    <div className='box-1'>
                      <h4 className='heading'>{computer.name}</h4>
                    </div>
                    <div className='box-2'>
                      <h4 className='heading'>${computer.price}</h4>
                    </div>
                  </div>
                  <p className='text'>{computer.description}</p>

                  <div className='quantity-line d-flex justify-content-between mt-5 '>
                    <div>
                      <span className='text-dark third-span'>Spplier Name</span>
                      <p>Ahmed Ahraf</p>
                    </div>
                    <div>
                      <span className='text-dark third-span'>Quantity</span>
                      <p>{computers.length} picec</p>
                    </div>
                    <div>
                      <button className=' LogButtonT' onClick={() => navigate('/computerInventory')} >Update Stock</button>
                    </div>

                  </div>
                </div>

              )
            }
            {
              Singles.slice(0, 1).map(single =>
                <div className='background-color'>
                  <img className='image' src={single.img} alt="" />
                  <div className='namePrice d-flex justify-content-between'>
                    <div className='box-1'>
                      <h4 className='heading'>{single.name}</h4>
                    </div>
                    <div className='box-2'>
                      <h4 className='heading'>${single.price}</h4>
                    </div>
                  </div>
                  <p className='text'>{single.description}</p>

                  <div className='quantity-line d-flex justify-content-between mt-5 '>
                    <div>
                      <span className='text-dark third-span'>Spplier Name</span>
                      <p>Ahmed Ahraf</p>
                    </div>
                    <div>
                      <span className='text-dark third-span'>Quantity</span>
                      <p>{Singles.length} picec</p>
                    </div>
                    <div>
                      <button className=' LogButtonT' onClick={() => navigate('/singleInventory')}>Update Stock</button>
                    </div>

                  </div>
                </div>

              )
            }

            {
              Tables.slice(0, 1).map(table =>
                <div className='background-color'>
                  <img className='image' src={table.img} alt="" />
                  <div className='namePrice d-flex justify-content-between'>
                    <div className='box-1'>
                      <h4 className='heading'>{table.name}</h4>
                    </div>
                    <div className='box-2'>
                      <h4 className='heading'>${table.price}</h4>
                    </div>
                  </div>
                  <p className='text'>{table.description}</p>

                  <div className='quantity-line d-flex justify-content-between mt-5 '>
                    <div>
                      <span className='text-dark third-span'>Spplier Name</span>
                      <p>Ahmed Ahraf</p>
                    </div>
                    <div>
                      <span className='text-dark third-span'>Quantity</span>
                      <p>{Tables.length} picec</p>
                    </div>
                    <div>
                      <button className=' text-white LogButtonT' onClick={() => navigate('/tableInventory')} >Update Stock</button>
                    </div>

                  </div>
                </div>
              )}

          </div>
        </div>

        <button className='LogButtonT mt-5 ' onClick={() => navigate('/inventoryManagement')}>Manage Inventory</button>
      </div>

      <div>
        <div> <h1 className='mt-5 second-headline '>Upcoming Furniture stock</h1>
          <p className='mt-2 mb-5'>Our Next furniture stock is coming Next Month Modern and Stylist</p>
        </div>
        {/* Slider seciton */}
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section id='about' className='about-section-padding mt-5 mb-5'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 ps-lg-5 mt-5  text-left">
              <div className='about-text '>
                <h2 className='text-bold mb-3s'>Best Stock Deal of the day,<br />Closing soon</h2>
                <p>We trust our supplier and you can trust<br /> too.Best of the day so don't wast<br /> time buy now</p>
                <div className='d-flex pl-3'>
                  <div className='space' >
                    <span className='text-dark'>Quantity <p>50 picec</p></span>
                  </div>
                  <div className='ml-4'>
                    <span className='text-dark'>Supplier <p>Ajher Ali</p></span>
                  </div>
                </div>



                <button className='LogButtonT mt-3'>Buy Now </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 mt-5">
              <div className="about-img">
                <img src={Img4} alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;