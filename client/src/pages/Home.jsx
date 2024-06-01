import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';


export const Home = () => {

  const[name,setName]=useState('');

  const navigate = useNavigate()

  async function getUserDetails(){
    let config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    }
    
      const res= await axios.get("https://node-jwt-authentication-rdik.onrender.com/api/user",config)
      const data=res.data
      setName(data.name)
    
   
  }

  useEffect(()=>{

    const token =localStorage.getItem('token')
    const myDecodedToken = decodeToken(token);

    if (token) {
      console.log(token);

      if(!myDecodedToken){
            navigate('/login')
      }else{
        getUserDetails()
      }
    }
    else{
      console.log(token)
      navigate('/login')
    }
  },[])


  return (

    <>
    <h3>{`hello ${name}`}</h3>
    <div className='center'><button onClick={()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }}>logout</button></div>
    </>
  )
}
