import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Bonuses from './pages/Bonuses'
import Leaderboards from './pages/Leaderboards'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bonuses" element={<Bonuses />} />
        <Route path="/store" element={<Store />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App




