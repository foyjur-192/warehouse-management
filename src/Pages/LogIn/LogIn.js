import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import './LogIn.css'
import SocialLogIn from './SocialLogIn/SocialLogIn';
import Loading from './Loading/Loading';
import axios from 'axios';

const LogIn = () => {
   const emailAddressRef = useRef('');
   const passwordRef = useRef('');
   const location = useLocation ();

   let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
   if (user) {
    navigate(from, { replace: true });
}
      
      const handleLogin = async event => {
        event.preventDefault();
        const email = emailAddressRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://floating-sea-17167.herokuapp.com/login', {email});
       localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
       
      }

      const resetPassword = async () => {
        const email = emailAddressRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast ('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }


    return (
        <div className='margin-top'> 
      <div className='logIn-container container mb-5'>
        <div className='container-forms mt-4 '>
            <h4 className='mt-3 mb-5'>Log in to Furniture Stock</h4>
           <form className='' onSubmit={handleLogin}>
                <div class="mb-3" className='text-start'>
                <label className='mb-2' for="text">Email</label>
                    <input type="email" ref={emailAddressRef} name='email' class="form-control" required  />
                   
               </div>
              <div class="mb-3" className='text-start'>
              <label for="number" class="form-label text-start mt-3">Password</label>
                   <input type="text" ref={passwordRef} name='password' class="form-control" required />
               </div>
               <div className='d-flex mt-5'>
               <button type="submit" className='LogButton text-bold' >Log in</button>
               <button type="submit" className='SignButton  ml-4'  onClick={()=>navigate('/signup')}>Sign up</button>
               </div>
             
           </form>
           {errorElement}
           <p className='mt-5'>Are you Forget the password?? <button className='resetP' onClick={resetPassword} >Reset</button> </p>
           <SocialLogIn></SocialLogIn>
           </div>

          <div className='container-form'>
           
          </div>
           </div>
            
            
      </div>
   
    );
};

export default LogIn;