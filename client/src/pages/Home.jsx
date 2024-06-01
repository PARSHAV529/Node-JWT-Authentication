import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


async function getUserDetails() {
  let config = {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    }
  }

  const res = await axios.get("https://node-jwt-authentication-rdik.onrender.com/api/user", config)
  return res.data



}

const UserDetails = () => {
  const { data } = useQuery({
    queryFn: getUserDetails,
    queryKey: ['user'],
    suspense: true
  });
  return <h3>{`Hello ${data.name}`}</h3>;
};


export const Home = () => {



  const navigate = useNavigate()



  useEffect(() => {

    const token = localStorage.getItem('token')
    const myDecodedToken = decodeToken(token);

    if (token) {
      console.log(token);

      if (!myDecodedToken) {
        navigate('/login')
      } else {
        getUserDetails()
      }
    }
    else {
      console.log(token)
      navigate('/login')
    }
  }, [])


  return (

    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UserDetails />
        <div className='center'><button onClick={() => {
          localStorage.removeItem('token')
          navigate('/login')
        }}>logout</button></div>
      </Suspense>
    </>
  )
}
