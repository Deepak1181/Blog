import React from 'react'
import { SidebarProvider } from '../ui/sidebar'
import { Outlet } from 'react-router-dom'
import AppSidebar from '../AppSidebar'
import Topbar from '../Topbar'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div>
        <SidebarProvider>
            <Topbar/>
            <AppSidebar/>
            <main className='w-full'>
            <div className='w-full min-h-[calc(100vh-45px)] py-28  px-10'>
                    <Outlet />
                </div>
                <Footer/>
            </main>
        </SidebarProvider>
    </div>
  )
}

export default Layout