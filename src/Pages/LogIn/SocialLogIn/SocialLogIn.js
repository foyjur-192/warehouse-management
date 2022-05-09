import React from 'react';
import './SocialLogIn.css'
import google from '../../../Image/img.png'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle (auth);
    const navigate = useNavigate();
    let errorShow;
    
    
    if (error) {
     errorShow = <div>
            <p className='text-primary'>Error: {error.message}</p>
          </div>
     
      }
      if (loading) {
        return <p>Loading...</p>;
      }

      if (user) {
        navigate('/home')
      }
   
    return (
        <div>
            <button className='buttonG mb-3' onClick={() => signInWithGoogle()} > <img className='' src={google} alt="" /> Log in With Google</button>
           {errorShow}
        </div>
    );
};

export default SocialLogIn;