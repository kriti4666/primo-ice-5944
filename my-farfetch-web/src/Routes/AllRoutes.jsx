import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import Kids from './Kids'
import Men from './Men'
import Womens from './Womens'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Womens/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/cartPage' element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes
