import React from 'react'
import {About_us, Contact, Home, News, Partnership, Products, ServicesPage} from "../pages"
import {PATH} from "../hooks/PATH"
import { Route, Routes } from 'react-router-dom'
const dashboardRoutesList = [
  {
    id:1,
    element: <Home/>,
    path: PATH.home,
    
  },
  {
    id:2,
    element: <About_us/>,
    path: PATH.about,
  },
  {
    id:3,
    element: <ServicesPage/>,
    path: PATH.services,
  },
  {
    id:4,
    element: <Partnership/>,
    path: PATH.partnership,
  },
  {
    id:5,
    element: <Products/>,
    path: PATH.products,
  },
  {
    id:6,
    element: <News/>,
    path: PATH.news,
  },
  {
    id:1,
    element: <Contact/>,
    path: PATH.contact,
  }
]

const DashboardRoutes = () => {
  return (
      <Routes>
        {dashboardRoutesList.map(item=>(
          <Route path={item?.path} element={item.element}/>
        ))}
      </Routes>
  )
}

export default DashboardRoutes