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
import ShoppingLayout from './pages/shopping-view/layout'
import NotFound from './pages/not-found'

function App() {
 

  return (
   <div className='flex flex-col overflow-hidden bg-white'>
     {/* <h1>Header</h1> */}
     <Routes>
      <Route path='/auth' element={<AuthLayout/>} >
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      </Route>
      <Route path='/admin' element={<AdminLayout/>} >
      <Route path='dashboard' element={<AdminDashboard/>} />
      <Route path='products' element={<AdminProducts/>} />
      <Route path='order' element={<AdminOrder/>} />
      <Route path='features' element={<AdminFeatures/>} />


      </Route>

      <Route path='/shop' element={<ShoppingLayout/>} >
      <Route path='*' element={<NotFound/>} />
      <Route path='products' element={<AdminProducts/>} />
      <Route path='order' element={<AdminOrder/>} />
      <Route path='features' element={<AdminFeatures/>} />


      </Route>
     </Routes>
   </div>
  )
}

export default App
