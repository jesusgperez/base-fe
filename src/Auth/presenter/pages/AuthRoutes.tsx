import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "../contexts/Provider";

const AuthRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<h1>This is the home</h1>}/>
      </Routes>
    </AuthProvider>
  )
}

export { AuthRoutes }
