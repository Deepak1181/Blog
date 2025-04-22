import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

const CheckAuth = ({isAuthentication, user , children}) => {
 const location = useLocation()


 if (location.pathname === "/") {
    if (!isAuthentication) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }


  if ( !isAuthentication  && 
    !(
        location.pathname.includes('/login') || 
        location.pathname.includes('/register')
    )
    ){
   
    return  <Navigate to= "/auth/login"/>

  }

  if(isAuthentication&& (location.pathname.includes('/login')|| location.pathname.includes('/register'))){
    if(user?.role==="admin"){
        return <Navigate to= "/admin/dashboard"/>
      }
      else{
        return <Navigate to= "/shop/home"/>
    
      }
  }

  if(isAuthentication&& user?.role!=="admin" && location.pathname.includes("admin")){
    return <Navigate to= "/unauth-page"/>
  }
 
  if(isAuthentication&& user?.role==="admin" && location.pathname.includes("shop")){
    return <Navigate to= "/admin/dashboard"/>
  }
   return <>{children}</>
}

export default CheckAuth