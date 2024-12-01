import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './component/Gallery'
import Homepage from './component/Homepage'
import Profile from './component/Profile'
import ChoosePic from './component/ChoosePic'

const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/' element={<ChoosePic />} /> */}
          <Route path='gallery' element={<Gallery />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
        <ChoosePic/>
      </Router>

    </div>
  )
}

export default App