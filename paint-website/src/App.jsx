import './styles/general.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import News from './pages/News.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default App
