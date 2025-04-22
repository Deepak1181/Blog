import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from '../../components/shopping-view/header'

const ShoppingLayout = () => {
  return (
    <div className='flex flex-col gap-5 bg-white overflow-hidden'>
{/* header */}
<ShoppingHeader/>

<main className='flex flex-col w-full'>
<Outlet/>
</main>

    </div>
  )
}

export default ShoppingLayout