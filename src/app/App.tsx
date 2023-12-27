import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from 'components'
import { Menu, PurchaseList } from 'pages'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Purchase" element={<PurchaseList/>}/>
      </Routes>
    </div>
  )
}

export default App
