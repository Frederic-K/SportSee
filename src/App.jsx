import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Error404 from './pages/404/Error404'
import UnderConstruction from './pages/UnderConstruction/UnderConstruction'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/fake-profil" element={<UnderConstruction />} />
        <Route path="/fake-setting" element={<UnderConstruction />} />
        <Route path="/fake-community" element={<UnderConstruction />} />
        <Route path="/fake-user" element={<UnderConstruction />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
