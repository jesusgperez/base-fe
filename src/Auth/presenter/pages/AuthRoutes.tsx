import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import RetrievePassword from "./RetrievePassword";
import Home from "./Home";
import AuthProvider from "../contexts/Provider";
import { AuthUrls as urls } from "./AuthUrls";


const AuthRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path={urls.login} element={<Login/>}/>
          <Route path={urls.signup} element={<Signup/>}/>
          <Route path={urls.retrievePassword} element={<RetrievePassword />}/>
          <Route path={urls.changePassword} element={<h1>Change your password</h1>}/>
          <Route path={urls.home} element={<Home />}/>
      </Routes>
    </AuthProvider>
  )
}

export { AuthRoutes }
