import React,{useContext} from 'react';

import veg1 from './assests/vegtable1.png'

import './signuppage.css'
import 'bootstrap/dist/css/bootstrap.css';
import AuthContext from './context/AuthContext';

const Signup = () =>{
  let {loginUser} = useContext(AuthContext)
  return(
    <>

<div className='signupimg'>
    <img src={veg1} className='vegimg1'></img>

</div>
<div className='Leftside'>
  <form onSubmit={loginUser}>
    <span className='heading'>Sign up</span>
    <input type = "text" className='input1' name ="username" placeholder='     Email'></input>
    <input type = "password" className='input2'name ="password" placeholder='     Password'></input>  
    <input className='signup' type='submit' value='Sign Up' />
    </form>  
</div>
    </>
  )
}

export default Signup;