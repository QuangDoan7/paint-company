import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Paint1 from '../components/Paint1.jsx'
import '../styles/general.css'

function Products({paintType}) {
    return (
        <>
            <Header />
            <div className="product-nav-container">
                <nav className="product-nav">
                    <ul>
                        <li><a href="/products/Paint1">Sơn 1</a></li>
                        <li><a href="/products/Paint2">Sơn 2</a></li>
                        <li><a href="/products/Paint3">Sơn 3</a></li>
                    </ul>
                </nav>
            </div>

            <div className="products-intro">
                <h1>Sản Phẩm Của Chúng Tôi</h1>
                <p>Khám phá các loại sơn và sản phẩm liên quan đa dạng của chúng tôi.</p>
            </div>

            <div>
                {paintType === "Paint1" && <Paint1 />}
                {paintType === "Paint2" && <Paint2 />}
                {paintType === "Paint3" && <Paint3 />}
            </div>

            <Footer />
        </>
    )
}

export default Products