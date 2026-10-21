import ProductsNav from '../components/ProductsNav.jsx'
import '../styles/general.css'

function Products({ isMobileMenuOpen, setIsMobileMenuOpen, isMobile }) {

    return (
        <>
            <ProductsNav 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobile={isMobile}
            />

            <div className="products-container">
                <h1 className="gradient-text">Những Sản Phẩm Được Phân Phối</h1>
                {isMobile && <h6>(Ấn vào "☰" để xem danh mục sản phẩm)</h6>}
                
                <div>
                    <h3>Đa dạng sản phẩm - Giải pháp sơn phù hợp cho mọi công trình</h3>
                    <p>
                        Chúng tôi cung cấp đa dạng các dòng sơn và sản phẩm liên quan, đáp ứng nhu cầu trang trí, bảo vệ và hoàn thiện bề mặt cho nhà ở, công trình dân dụng và thương mại.
                    </p>
                    <p>
                        Từ sơn nước, sơn dầu, sơn nội thất, ngoại thất đến các dòng sơn chống thấm và sơn chuyên dụng, mỗi loại sản phẩm đều có những đặc tính và ứng dụng riêng, phù hợp với từng nhu cầu sử dụng.
                    </p>
                </div>

                <h3>Các Dòng Sơn Phổ Biến</h3>

                <div>
                    <h4>Sơn Nước</h4>
                    <p>
                        Được sử dụng phổ biến trong trang trí nội thất và ngoại thất, sơn nước mang đến sự đa dạng về màu sắc, dễ thi công và phù hợp với nhiều không gian sống.
                    </p>
                    <h4>Sơn Dầu</h4>
                    <p>
                        Thường được sử dụng trên các bề mặt như gỗ và kim loại, sơn dầu giúp tạo lớp phủ hoàn thiện, tăng tính thẩm mỹ và hỗ trợ bảo vệ bề mặt trước các tác động từ môi trường.
                    </p>
                    <h4>Sơn Nội Thất & Ngoại Thất</h4>
                    <p>
                        Các dòng sơn dành riêng cho tường trong nhà và ngoài trời, đáp ứng những yêu cầu khác nhau về độ bền, khả năng chống chịu thời tiết và tính thẩm mỹ.
                    </p>
                    <h4>Sơn Chống Thấm</h4>
                    <p>
                        Giải pháp hỗ trợ bảo vệ các khu vực dễ tiếp xúc với nước và độ ẩm như tường ngoài, sân thượng, ban công và những vị trí cần tăng cường khả năng chống thấm.
                    </p>
                    <h4>Sơn Lót & Sơn Chuyên Dụng</h4>
                    <p>
                        Bao gồm các sản phẩm hỗ trợ xử lý và chuẩn bị bề mặt trước khi sơn phủ, góp phần tăng độ bám dính và nâng cao hiệu quả hoàn thiện công trình.
                    </p>
                    <h4>Lựa Chọn Sản Phẩm Phù Hợp</h4>
                    <p>
                        Mỗi công trình đều có những yêu cầu riêng về màu sắc, chất liệu và điều kiện sử dụng. Chúng tôi mong muốn mang đến những lựa chọn sản phẩm phù hợp, giúp khách hàng dễ dàng tìm kiếm giải pháp sơn đáp ứng nhu cầu của mình.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Products