import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './Pages/PageHome'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Room from './Pages/Rooms'
import Food from './Pages/Food'
import Login from './Pages/Login/login'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/rooms' element={<Room />} />
            <Route path='/services' element={<About />} />
            <Route path='/food&drink' element={<Food />} />
            <Route path='/spa&fitness' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/user' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
