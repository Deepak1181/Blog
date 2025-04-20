import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Index from "./pages/index"
import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { RouteIndex } from './helpers/RouteName'

function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
 <Routes>
  <Route path={RouteIndex} element={<Layout />}>
  

  <Route index element={<Index />}/> 
  </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
