import React from 'react'
import Footer from '../modules/Footer'
import DashboardRoutes from '../routes/DashboardRoutes'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
  return (
    <div>
        <Navbar/>
        <DashboardRoutes/>
        <Footer/>
    </div>
  )
}

export default DashboardLayout