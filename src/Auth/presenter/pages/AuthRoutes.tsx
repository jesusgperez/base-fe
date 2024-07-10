import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import AuthProvider from "../contexts/Provider";

const AuthRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot-password' element={<h1>Retrieve your password</h1>}/>
          <Route path='/change-password' element={<h1>Change your password</h1>}/>
          <Route path='/home' element={<Home />}/>
      </Routes>
    </AuthProvider>
  )
}

export { AuthRoutes }
