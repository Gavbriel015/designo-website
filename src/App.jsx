
import './App.css'
import Home from './pages/Home'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className='pb-40'>        
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
      </div>

    </Router>
  )
}

export default App
