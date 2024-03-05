import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './Pages/PageHome'
import About from './Pages/About'
import Contact from './Pages/Contact'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<About />} />
            <Route path='/food&drink' element={<About />} />
            <Route path='/spa&fitness' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
