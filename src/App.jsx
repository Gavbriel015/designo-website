
import './App.css'
import About from './pages/About'
import Home from './pages/Home'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import WebDesign from './pages/WebDesign'

function App() {


  return (
    <Router>
      <div className='pb-40'>        
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/locations' element={<Locations/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/webdesign' element={<WebDesign/>} />
          </Routes>
      </div>

    </Router>
  )
}

export default App
