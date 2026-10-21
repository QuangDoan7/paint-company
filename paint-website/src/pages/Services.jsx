import '../styles/general.css'
import TatSon from '../assets/img/services/tat-son.png'
import Painting from '../assets/img/services/painting.png'
    
function Services() {
    return (
        <>
            <div className="services-container">
                <h1 className="gradient-text">Dịch vụ hết sảy con bà bảy</h1>
                <div className="service-item-container">
                    <div className="service-item">
                        <div>
                            <h3>Sơn tận nhà, ủa mà phải tới nhà em mới sơn được chứ.</h3>
                            <ul>
                                <li>Chúng tôi cung cấp dịch vụ sơn tận nhà với đội ngũ chuyên nghiệp và vật liệu chất lượng.</li>
                                <li>Chúng tôi cam kết mang đến dịch vụ tốt nhất cho khách hàng.</li>
                                <li>Liên hệ với chúng tôi để biết thêm chi tiết và đặt lịch dịch vụ.</li>
                            </ul>
                        </div>
                        <img src={Painting} alt="painting" />
                    </div>
                    <div className="service-item">
                        <img src={TatSon} alt="tat-son" />
                        <div>
                            <h3>Cung cấp sơn tạt nhà đối thủ.</h3>
                            <ul>
                                <li>Chúng tôi cung cấp dịch vụ sơn tạt nhà đối thủ với đội ngũ chuyên nghiệp và vật liệu chất lượng.</li>
                                <li>Chúng tôi cam kết mang đến dịch vụ tốt nhất cho khách hàng.</li>
                                <li>Và dịch vụ tệ nhất đối với đối thủ của quý khách.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services