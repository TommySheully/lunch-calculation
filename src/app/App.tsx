import React from 'react'
import { AppBarComponent, MenuComponent, PurchaseList } from 'common'
import { Route, Routes } from 'react-router-dom'

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
