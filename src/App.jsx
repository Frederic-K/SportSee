import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeV2 from './pages/Home/HomeV2'
// import Home from './pages/Home/Home'
// import Dashboard from './pages/Dashboard/Dashboard'
import Error404 from './pages/404/Error404'

function App() {
  return (
    <BrowserRouter>
      {/* <BannerNavBar />
      <AsideNavBar /> */}
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/user/:id" element={<Dashboard />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
