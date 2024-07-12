import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import RetrievePassword from "./RetrievePassword";
import Home from "./Home";
import AuthProvider from "../contexts/Provider";
import { AuthUrls } from "./AuthUrls";


const AuthRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path={AuthUrls.login} element={<Login/>}/>
          <Route path={AuthUrls.signup} element={<Signup/>}/>
          <Route path={AuthUrls.retrievePassword} element={<RetrievePassword />}/>
          <Route path={AuthUrls.changePassword} element={<h1>Change your password</h1>}/>
          <Route path={AuthUrls.home} element={<Home />}/>
      </Routes>
    </AuthProvider>
  )
}

export { AuthRoutes }
