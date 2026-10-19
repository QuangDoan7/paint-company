import { Link, useLocation } from 'react-router'

import '../styles/general.css'

function ProductsNav() {
    const location = useLocation();
    const selectedNav = location.pathname;
    
    return (
        <div className="product-nav-container">
            <nav className="product-nav">
                <ul>
                    <li className={selectedNav === "/products/paint1" ? "selected" : ""}><Link to="/products/paint1">Sơn 1</Link></li>
                    <li className={selectedNav === "/products/paint2" ? "selected" : ""}><Link to="/products/paint2">Sơn 2</Link></li>
                    <li className={selectedNav === "/products/paint3" ? "selected" : ""}><Link to="/products/paint3">Sơn 3</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default ProductsNav
