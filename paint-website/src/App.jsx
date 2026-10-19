import './styles/general.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Paint1 from './pages/Paint1.jsx'
import Paint2 from './pages/Paint2.jsx'
import Paint3 from './pages/Paint3.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import News from './pages/News.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products/Paint1" element={<Paint1 />} />
                    <Route path="/products/Paint2" element={<Paint2 />} />
                    <Route path="/products/Paint3" element={<Paint3 />} />
                </Routes>
            </main>
            
            <Footer />
        </>
    )
}

export default App
