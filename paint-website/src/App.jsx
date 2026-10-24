import './styles/general.css'

import { Route, Routes, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
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

    const location = useLocation();
    const pagePath = location.pathname.startsWith('/products') ? '/products' : location.pathname;

    return (
        <>
            <Header 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobile={isMobile}
            />

                <main>
                    <AnimatePresence
                        mode="wait"
                    >
                        <motion.div
                            key={pagePath}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.75, ease: "easeInOut" }}
                        > 
                            <Routes location={location}>
                                <Route path="/" element={<Home />} />
                                <Route path="/products/*" element={
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
                                    />}
                                />
                                <Route path="/contact" element={<Contact 
                                        isMobileMenuOpen={isMobileMenuOpen}
                                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                                        isMobile={isMobile}
                                    />}
                                />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </main>
            
            <Footer />
        </>
    )
}

export default App
