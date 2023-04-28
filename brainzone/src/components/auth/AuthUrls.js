import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './login/Login'
import { Register } from './register/Register'

const AuthUrls = () => {
  return (
    <Routes>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route>
    </Routes>
  )
}

export default AuthUrls