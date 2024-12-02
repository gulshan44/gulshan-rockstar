import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './component/Gallery'
import Profile from './component/Profile'
import AllHomeComponent from './component/AllHomeComponent'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<AllHomeComponent />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App