import React, { useContext } from 'react'
import AuthProviders, { AuthContext } from '../contexts/AuthProviders'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut }=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";
const handleLogout=()=>{
    logOut().then(() => {
    alert("Logout successfully!!!")
        navigate(from,{replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
}

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
        <button className="bg-red-700 px-8 py-2 text-white rounded" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout