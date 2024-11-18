import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
let url = 'https://deploy-mern-app-3.vercel.app';
function Edit() {
  let navigate = useNavigate();
  let [user,setUser] = useState({
    fName : '',
    lName : '',
    email : ''
  })
  let {id} = useParams();

  let handleUpdate = (e) => {
    e.preventDefault();
    if(!user.fName || !user.lName || !user.email){
      window.toastify("Email,First and Last name are required","error")
    }
    else{
      let obj = {
        item : `${user.fName} ${user.lName}`,
        email : user.email
      }
      axios.put(`${url}/api/update/${id}`,obj)
      .then((response) => {
        window.toastify("Data has been updated","success")
          navigate("/")
          console.log(response);
          console.log("Done...")
      })
      .catch((error) => {
        window.toastify("Something went wrong while editing","error")
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
  useEffect(()=>{
    axios.get(`${url}/api/readOne/${id}`)
    .then((response)=>{
      let item = response.data.item;
      const [fName,lName] = item.split(' ',2);
      setUser({
        fName,
        lName,
        email : response.data.email
      });
      
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);
  return (
    <div className='bg-white w-[30%] h-fit mt-10 rounded-sm py-10 px-8'>
      <form 
      onSubmit={handleUpdate}
      className='w-full'>
        <Link to={'/'} className='text-blue-500 underline cursor-pointer hover:text-blue-700 hover:no-underline font-semibold inline-block'>Back</Link>
        <h2 className='text-lg font-semibold my-3'>Update User</h2>
        <div className='mb-3'>
          <p className='text-sm mb-1'>First Name</p>
          <input
          value={user.fName}
          name='fName'
          onChange={handleChange}
          className='px-2 text-sm rounded-sm focus:outline-none py-2 border-2 border-slate-400  w-full' type="text" />
        </div>
        <div className='mb-3'>
          <p className='text-sm mb-1'>Last Name</p>
          <input
          name='lName'
          value={user.lName}
          onChange={handleChange}
          className='px-2 text-sm rounded-sm focus:outline-none py-2 border-2 border-slate-400  w-full' type="text" />
        </div>
        <div className='mb-3'>
          <p className='text-sm mb-1'>Email</p>
          <input
          value={user.email}
          name='email'
          onChange={handleChange}
          className='px-2 text-sm rounded-sm focus:outline-none py-2 border-2 border-slate-400  w-full' type="text" />
        </div>
        <div>
          <button 
          type='submit'
          className='bg-purple-700 text-lg my-2 font-bold text-white focus:outline-none p-1 rounded-sm w-full'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Edit
