import ProductsNav from '../components/ProductsNav.jsx'
import '../styles/general.css'
import { AnimatePresence, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router'

import ProductsOverview from '../pages/ProductsOverview.jsx'
import Paint1 from '../pages/Paint1.jsx'
import Paint2 from '../pages/Paint2.jsx'
import Paint3 from '../pages/Paint3.jsx'

function Products({ isMobileMenuOpen, setIsMobileMenuOpen, isMobile }) {
    const location = useLocation()

    return (
        <>
            <ProductsNav 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobile={isMobile}
            />

            <div className="products-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname} 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                    >
                        <Routes location={location}>
                            <Route path="/" element={
                                <ProductsOverview
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                                    isMobile={isMobile}
                                />}
                            />
                            <Route path="/paint1" element={
                                <Paint1
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                                    isMobile={isMobile}
                                />}
                            />
                            <Route path="/paint2" element={
                                <Paint2
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                                    isMobile={isMobile}
                                />}
                            />
                            <Route path="/paint3" element={
                                <Paint3
                                    isMobileMenuOpen={isMobileMenuOpen}
                                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                                    isMobile={isMobile}
                                />}
                            />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default Products