import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './UI/Home';
import Register from './UI/Register';
import Login from './UI/Login';
import ProtectedRoute from './Auth/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [isUser, setUserInfo] = useState(false)
  const UserInfo = useSelector((state) => state.userInfo);

  useEffect(() => {    
    setUserInfo(Boolean(false));
  }, [UserInfo]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route path='/' element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App