import ProductsNav from '../components/ProductsNav.jsx'
import '../styles/general.css'

import PaintPic from '../assets/img/company-logo.png'

function Paint2() {
    return (
        <>
            <ProductsNav />
            <div className="paint-list-section">
                <h3>Đây là danh sách sơn 2</h3>
                <div className="paint-list-container">
                    <div className="paint-content">
                        <h4>Tên: Đây là sơn A</h4>
                        <p>Mô tả: Mô tả về sơn A</p>
                        <img src={PaintPic} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Tên: Đây là sơn A</h4>
                        <p>Mô tả: Mô tả về sơn A</p>
                        <img src={PaintPic} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Tên: Đây là sơn A</h4>
                        <p>Mô tả: Mô tả về sơn A</p>
                        <img src={PaintPic} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Tên: Đây là sơn A</h4>
                        <p>Mô tả: Mô tả về sơn A</p>
                        <img src={PaintPic} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Tên: Đây là sơn A</h4>
                        <p>Mô tả: Mô tả về sơn A</p>
                        <img src={PaintPic} alt="Sơn A" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paint2