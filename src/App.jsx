import Error404 from './pages/404/Error404'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
