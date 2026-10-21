import { useLocation, Link } from 'react-router'
import { useEffect } from 'react'
import companyLogo from '../assets/img/company-logo.png'
import contactUs from '../assets/img/contact-us.png'
import '../styles/general.css'

function Header({ isMobileMenuOpen, setIsMobileMenuOpen, isMobile }) {
    // Get the current location to determine which nav item is selected
    const location = useLocation();
    const selectedNav = location.pathname;

    /* click outside to close mobile menu */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.mobile-menu-container')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [setIsMobileMenuOpen]);
    

    return (
        <>
            {!isMobile && (
                <div className="header-container">
                    <div className="company-logo-container">
                        <Link to="/">
                            <img src={companyLogo} alt="Company Logo" />
                        </Link>
                    </div>
                    
                    <nav className="nav-menu">
                        <ul>
                            <li className={selectedNav === "/products" || selectedNav === "/products/paint1" || selectedNav === "/products/paint2" || selectedNav === "/products/paint3" ? "selected" : ""}>
                                <Link to="/products">Sản Phẩm</Link>
                            </li>
                            <li className={selectedNav === "/services" ? "selected" : ""}>
                                <Link to="/services">Dịch Vụ</Link>
                            </li>
                            <li className={selectedNav === "/news" ? "selected" : ""}>
                                <Link to="/news">Tin Tức</Link>
                            </li>
                            <li className={selectedNav === "/about" ? "selected" : ""}>
                                <Link to="/about">Giới Thiệu</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="contact-link">
                        <Link to="/contact">
                            <img src={contactUs} alt="Contact Us" />
                        </Link>
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="header-container">
                    <div className="company-logo-container">
                        <Link to="/">
                            <img src={companyLogo} alt="Company Logo" />
                        </Link>
                    </div>
                    <div className="mobile-menu-container">
                        <button
                            className={`mobile-menu-button${isMobileMenuOpen ? " open" : ""}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? "✖" : "☰"}
                        </button>
                        <nav className={`mobile-nav${isMobileMenuOpen ? " open" : ""}`}>
                            <ul>
                                <li className={selectedNav === "/products" || selectedNav === "/products/paint1" || selectedNav === "/products/paint2" || selectedNav === "/products/paint3" ? "selected" : ""}>
                                    <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Sản Phẩm</Link>
                                </li>
                                <li className={selectedNav === "/services" ? "selected" : ""}>
                                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Dịch Vụ</Link>
                                </li>
                                <li className={selectedNav === "/news" ? "selected" : ""}>
                                    <Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>Tin Tức</Link>
                                </li>
                                <li className={selectedNav === "/about" ? "selected" : ""}>
                                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Giới Thiệu</Link>
                                </li>
                                <li className={selectedNav === "/contact" ? "selected" : ""}>
                                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Liên Hệ</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header