import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import axios from 'axios'
import { Link } from 'react-router-dom';
let url = 'http://localhost:8080';

function Table() {
  let [data,setData] = useState([]);
  let fetchedData = () => {
    axios.get(`${url}/api/read`)
  .then(function (response) {
    // handle success
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  useEffect(()=>{
    fetchedData();
  },[])

  let handleDelete = (id) => {
    setData(data.filter(item=> id !== item._id));
    window.toastify("Deleted Successfully","success")
    axios.delete(`${url}/api/delete/${id}`)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      window.toastify("Something went wrong while deleting","error")
      console.log(err);
    })
  }
  return (
    <>
   

<div className="relative overflow-x-auto shadow-md sm:rounded-sm">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    S.No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-600">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody className='text-black'>
           {
            data.map((item,i) => {
              return <tr key={i} className="border-b ">
              <td scope="row" className="px-6 py-1 whitespace-nowrap ">
                  {i}
              </td>
              <td scope="row" className="px-6 py-1 font-medium whitespace-nowrap ">
                  {item.item}
              </td>
              <td className="px-6 py-4">
                 {item.email}
              </td>
              <td className="px-6 py-1 flex justify-center">
                <div className='h-[100%] mt-2'>
                <div
                 onClick={() => handleDelete(item._id)}
                className='text-lg px-1 py-1 rounded-md text-white bg-red-600 inline-block mr-2 cursor-pointer'>
                <MdDelete />
                </div>
                <Link
                to={`/edit/${item._id}`} 
                onClick={() => handleUpdate(item._id)}
                className='text-lg px-1 py-1 rounded-md text-white bg-green-600 inline-block cursor-pointer'>
                <FiEdit />
                </Link>
                </div>
              </td>
          </tr>
            })
           }
        </tbody>
    </table>
</div>

    </>
  )
}

export default Table
