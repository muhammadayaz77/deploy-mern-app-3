import React from 'react'
import Table from '../Table'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    
      <div className='bg-white w-[70%] h-fit mt-10 px-7 py-5'>
    <Link
    to={'/add'} 
    className='bg-purple-700 text-lg my-2 inline-block font-bold text-white focus:outline-none p-2 rounded-sm'>Add User</Link>
    <Table></Table>
      </div>
    
    
    </>
  )
}

export default Home