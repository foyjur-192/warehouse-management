import React from 'react';

const Footer = () => {
    return (
        <div >
             <footer className='footerColor   py-3 '>
        <div className='d-flex justify-content-between container wrapper '>
          <div className='footer-box1'>
            <h5 className='fo-headline'>Furniture-Stock-Website</h5>
            <p className='footer-text text-light'>
              We started this journey a <br></br>long ago,We are committed with <br></br>our supplier and buyer
            </p>
          </div>
          <div className='footer-box2'>
            <h5 className='fo-headline'>Links</h5>
            <a  className='footer-text'>Home</a><br></br>
            <a  className='footer-text'>My Item</a><br></br>
            <a  className='footer-text'>Blog</a><br></br>

          </div>

          <div className='footer-box3'>
            <h5 className='fo-headline'>Contact us</h5>
            <p className='text-light footer-text'>Address: 13th Street. 47 W 13th St,<br /> New York, NY 10011,</p>
            <p className='text-light footer-text'>Mobile: 012567875578</p>
          </div>


        </div>
        <p className='text-light mt-5'>All right Reserved © 2022 by FurnitureStockHub</p>
      </footer>

        </div>
    );
};

export default Footer;