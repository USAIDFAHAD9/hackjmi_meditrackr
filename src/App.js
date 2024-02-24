import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between ">
     
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
