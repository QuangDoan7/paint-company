import { Link, useLocation } from 'react-router'

import '../styles/general.css'

function ProductsNav({ isMobileMenuOpen, setIsMobileMenuOpen, isMobile }) {
    const location = useLocation();
    const selectedNav = location.pathname;
    
    return (
        <>
            {!isMobile && (
                <div className="product-nav-container">
                    <nav className="product-nav">
                        <ul>
                            <li className={selectedNav === "/products/paint1" ? "selected" : ""}><Link to="/products/paint1">Sơn 1</Link></li>
                            <li className={selectedNav === "/products/paint2" ? "selected" : ""}><Link to="/products/paint2">Sơn 2</Link></li>
                            <li className={selectedNav === "/products/paint3" ? "selected" : ""}><Link to="/products/paint3">Sơn 3</Link></li>
                        </ul>
                    </nav>
                </div>
            )}

            {isMobile && (
                <div className="product-nav-container">
                    <div className={`mobile-product-nav-arrow${isMobileMenuOpen ? " open" : ""}`}>
                        <p>▼</p>
                    </div>
                    <nav className={`mobile-product-nav${isMobileMenuOpen ? " open" : ""}`}>
                        <ul>
                            <li className={selectedNav === "/products/paint1" ? "selected" : ""}><Link to="/products/paint1" onClick={() => setIsMobileMenuOpen(false)}>Sơn 1</Link></li>
                            <li className={selectedNav === "/products/paint2" ? "selected" : ""}><Link to="/products/paint2" onClick={() => setIsMobileMenuOpen(false)}>Sơn 2</Link></li>
                            <li className={selectedNav === "/products/paint3" ? "selected" : ""}><Link to="/products/paint3" onClick={() => setIsMobileMenuOpen(false)}>Sơn 3</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    )
}

export default ProductsNav
