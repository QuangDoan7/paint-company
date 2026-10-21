import './styles/general.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
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
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 685);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Header 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobile={isMobile}
            />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={
                        <Products
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />}
                    />
                    <Route path="/services" element={
                        <Services 
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />}
                    />
                    <Route path="/news" element={<News 
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />}
                    />
                    <Route path="/about" element={<About 
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />} />
                    <Route path="/contact" element={<Contact 
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />} />
                    <Route path="/products/Paint1" element={
                        <Paint1
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />}
                    />
                    <Route path="/products/Paint2" element={
                        <Paint2
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />}
                    />
                    <Route path="/products/Paint3" element={
                        <Paint3
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                            isMobile={isMobile}
                        />}
                    />
                </Routes>
            </main>
            
            <Footer />
        </>
    )
}

export default App
