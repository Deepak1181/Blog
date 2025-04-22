import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/ui/auth/layout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/admin-view/products'
import AdminOrder from './pages/admin-view/order'
import AdminFeatures from './pages/admin-view/features'
import NotFound from './pages/not-found'
import ShoppingLayout from './components/shopping-view/layout'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingHome from './pages/shopping-view/home'
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth-page'

function App() {
  const isAuthentication = false
  const user = null
  // const user= {
  //   name: "John Doe",
  //   role: "admin"
  // }

  return (
   <div className='flex flex-col overflow-hidden bg-white'>
     {/* <h1>Header</h1> */}
     <Routes>
      <Route path='/auth' element={
        <CheckAuth isAuthentication={isAuthentication} user={user}>
          <AuthLayout/>
        </CheckAuth>
      } >
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      </Route>
      <Route path='/admin' element={
        <CheckAuth isAuthentication={isAuthentication} user={user}>
        <AdminLayout/>
      </CheckAuth>
      } >
      <Route path='dashboard' element={<AdminDashboard/>} />
      <Route path='products' element={<AdminProducts/>} />
      <Route path='order' element={<AdminOrder/>} />
      <Route path='features' element={<AdminFeatures/>} />
      </Route>

      <Route path='/shop' element={
        <CheckAuth isAuthentication={isAuthentication} user={user}>
        <ShoppingLayout/>
      </CheckAuth>
      } >
      <Route path='*' element={<NotFound/>} />
      <Route path='account' element={<ShoppingAccount/>} />
      <Route path='listing' element={<ShoppingListing/>} />
      <Route path='checkout' element={<ShoppingCheckout/>} />
      <Route path='home' element={<ShoppingHome/>} />
      </Route>
      <Route path='unauth-page' element={<UnauthPage/>} />
     </Routes>
   </div>
  )
}

export default App
