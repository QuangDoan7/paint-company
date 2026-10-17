import { useLocation, Link } from 'react-router'
import companyLogo from '../assets/img/company-logo.png'
import contactUs from '../assets/img/contact-us.png'
import '../styles/general.css'

function Header() {
    const location = useLocation();
    const selectedNav = location.pathname;

    return (
        <div className="header-container">
            <div className="company-logo-container">
                <Link to="/">
                    <img src={companyLogo} alt="Company Logo" />
                </Link>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li className={selectedNav === "/products" ? "selected" : ""}>
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
                <img src={contactUs} alt="Contact Us" />
            </div>
        </div>
    )
}

export default Header