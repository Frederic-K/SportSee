import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeV2 from './pages/Home/HomeV2'
// import Home from './pages/Home/Home'
import HeaderNavBar from './components/Header/Header'
// import AsideNavBar from './components/AsideNavBar/AsideNavBar'
import Dashboard from './pages/Dashboard/Dashboard'
import Error404 from './pages/404/Error404'
import UnderConstruction from './pages/UnderConstruction/UnderConstruction'

function App() {
  return (
    <BrowserRouter>
      <HeaderNavBar />
      {/* <AsideNavBar /> */}
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/profil" element={<UnderConstruction />} />
        <Route path="/setting" element={<UnderConstruction />} />
        <Route path="/community" element={<UnderConstruction />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
