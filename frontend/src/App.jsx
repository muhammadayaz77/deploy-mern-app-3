import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Add from './pages/Add'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './config/global'
function App() {
  return (
    <>
    <div className='h-[100vh] bg-black flex justify-center'>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/add' element={<Add />} />
    </Routes>

    <ToastContainer 
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    >

    </ToastContainer>
    </div>
    
    </>
  )
}

export default App