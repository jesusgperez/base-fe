import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import RetrievePassword from "./RetrievePassword";
import Home from "./Home";
import AuthProvider from "../contexts/Provider";

const AuthRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/retrieve-password' element={<RetrievePassword />}/>
          <Route path='/change-password' element={<h1>Change your password</h1>}/>
          <Route path='/home' element={<Home />}/>
      </Routes>
    </AuthProvider>
  )
}

export { AuthRoutes }
