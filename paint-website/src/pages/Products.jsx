import ProductsNav from '../components/ProductsNav.jsx'
import '../styles/general.css'

function Products() {
    return (
        <>
            <ProductsNav />

            <div className="products-container">
                <h1>Sản Phẩm Của Chúng Tôi</h1>
                <p>Khám phá các loại sơn và sản phẩm liên quan đa dạng của chúng tôi.</p>
            </div>
        </>
    )
}

export default Products