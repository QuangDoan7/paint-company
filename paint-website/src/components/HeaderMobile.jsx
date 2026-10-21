import { useLocation, Link } from 'react-router'
import { useEffect, useRef } from 'react'
import companyLogo from '../assets/img/company-logo.png'
import '../styles/general.css'

function HeaderMobile({ isMobileMenuOpen, setIsMobileMenuOpen }) {
    // Get the current location to determine which nav item is selected
    const location = useLocation();
    const selectedNav = location.pathname;

    const mobileMenuRef = useRef(null);
    useEffect(() => {
        function handleClickOutSide(event) {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);
    }, []);


    return (
        <>
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
                        ref={mobileMenuRef}
                    >
                        {isMobileMenuOpen ? "✖" : "☰"}
                    </button>
                    <nav className={`mobile-nav${isMobileMenuOpen ? " open" : ""}`}>
                        <ul>
                            <li className={selectedNav === "/products" ? "selected" : ""}>
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
        </>
    )
}

export default HeaderMobile