import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';  
let url = 'https://deploy-mern-app-3.vercel.app';
function Add() {
  let navigate = useNavigate();
  let [user,setUser] = useState({
    fName : '',
    lName : '',
    email : ''
  })
  let handleAdd = (e) => {
    e.preventDefault();
    if(!user.fName || !user.lName || !user.email){
      console.log("input is required");
    }
    else{
      let obj = {
        item : `${user.fName} ${user.lName}`,
        email : user.email
      }
      axios.post(`${url}/api/post/`,obj)
      .then((response) => {
        window.toastify("Data has been added","success")
          navigate("/")
          console.log(response);
      })
      .catch((error) => {
        window.toastify('Internal Server Error','error')
  console.log(error)
      })
    }
  }
  let handleChange = (e) => {
    let {name,value} = e.target;
    setUser({
      ...user,
      [name] : value,
    });
    console.log(user);
  }
  return (
    <div className='bg-white w-[30%] h-fit mt-10 rounded-sm py-10 px-8'>
      <form 
      onSubmit={handleAdd}
      className='w-full'>
        <Link to={'/'} className='text-blue-500 underline cursor-pointer hover:text-blue-700 hover:no-underline font-semibold inline-block'>Back</Link>
        <h2 className='text-lg font-semibold my-3'>Add User</h2>
        <div className='mb-3'>
          <p className='text-sm mb-1'>First Name</p>
          <input
          name='fName'
          onChange={handleChange}
          className='px-2 text-sm rounded-sm focus:outline-none py-2 border-2 border-slate-400  w-full' type="text" />
        </div>
        <div className='mb-3'>
          <p className='text-sm mb-1'>Last Name</p>
          <input
          name='lName'
          onChange={handleChange}
          className='px-2 text-sm rounded-sm focus:outline-none py-2 border-2 border-slate-400  w-full' type="text" />
        </div>
        <div className='mb-3'>
          <p className='text-sm mb-1'>Email</p>
          <input
          name='email'
          onChange={handleChange}
          className='px-2 text-sm rounded-sm focus:outline-none py-2 border-2 border-slate-400  w-full' type="text" />
        </div>
        <div>
          <button 
          type='submit'
          className='bg-purple-700 text-lg my-2 font-bold text-white focus:outline-none p-1 rounded-sm w-full'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Add