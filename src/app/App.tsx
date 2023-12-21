import React from 'react'
import { AppBarComponent, MenuComponent } from 'common'
import { Route, Routes } from 'react-router-dom'
import { PurchaseList } from '../common/components/purchase/purchaseList'

function App() {
  return (
    <div>
      <AppBarComponent/>
      <Routes>
        <Route path="/" element={<MenuComponent/>}/>
        <Route path="/Menu" element={<MenuComponent/>}/>
        <Route path="/Purchase" element={<PurchaseList/>}/>
      </Routes>
    </div>
  )
}

export default App
