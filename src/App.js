import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './component/Gallery'
import Homepage from './component/Homepage'
import Profile from './component/Profile'

const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App