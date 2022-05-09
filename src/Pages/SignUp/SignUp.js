import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogIn from '../LogIn/SocialLogIn/SocialLogIn';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword (auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

     

      if (loading) {
        toast('Successfully  Sign up')
      }


     if(user){
       navigate('/home');
     }

  






      const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
      }



    return (
        <div className='margin-top '>
     <div> 
      <div className='logIn-container container mb-5'>
        <div className='container-forms mt-4 '>
            <h4 className='mt-3 mb-5'>Sign up to Furniture Stock</h4>
           <form className='' onSubmit={handleSignUp}>
                <div class="mb-3" className='text-start'>
                <label className='mb-2' for="text">Name</label>
                    <input type="text" name='name' class="form-control" required  />
                   
               </div>
                <div class="mb-3" className='text-start'>
                <label className='mb-2' for="text">Email</label>
                    <input type="email" name='email' class="form-control" required  />
                   
               </div>
              <div class="mb-3" className='text-start'>
              <label for="number" class="form-label text-start mt-3">Password</label>
                   <input type="text" name='password' class="form-control" required />
               </div>
               <div className='d-flex mt-5'>
               <button type="submit" className=' LogButton'  >Sign up</button>
               <button type="submit" className='SignButton  ml-4'  onClick={()=>navigate('/login')}>Log in</button>
               </div>
              <p className='mt-5'>Are you Forget the password?? <span>Reset</span> </p>
           </form>
            <SocialLogIn></SocialLogIn>
           </div>

          <div className='container-form'>
           



          </div>
           </div>
            
            
      </div> 
        </div>
    );
};

export default SignUp;