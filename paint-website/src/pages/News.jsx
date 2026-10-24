import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import '../styles/general.css'
import yellowBrush from '../assets/img/news/yellow-brush.png'
    
function News() {
    return (
        <>
            <div className="news-container">
                <h1 className="gradient-text">Tin Nóng Phỏng Tay</h1>
                <div className="news-item-container"> 
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{0: 1, 750: 2}}
                    >
                        <Masonry gutter="10px">
                            <div className="news-item">
                                <h3>Vàng hạ giá, tranh thủ bán sơn mua vàng</h3>
                                <p>Giá vàng đang giảm, đây là thời điểm tốt để bán sơn và mua vàng.</p>
                                <p>Hãy nhanh chóng tận dụng cơ hội này để tối đa hóa lợi nhuận.</p>
                                <p>Đừng bỏ lỡ cơ hội này!</p>
                                <p>Nhanh tay thì còn, chậm tay thì còn ít hơn!</p>
                            </div>
                            <div className="news-item">
                                <h3>Công ty chúng tôi 3 đời bán sơn, đời tôi là đời thứ nhất!</h3>
                                <p>Vì sơn là nghề truyền thống của gia đình chúng tôi, chúng tôi luôn đặt chất lượng lên hàng đầu. Với kinh nghiệm nhiều năm với ngành sau vài năm học hỏi và tích luỹ kinh nghiệm sau này, chúng tôi tự tin mang đến dịch vụ tốt nhất cho khách hàng.</p>
                                <p>Nhằm tri ân khách hàng...đầu tiên đến với chúng tôi, chúng tội mạnh bạo giảm giá sập sình:</p>
                                <ul>
                                    <li>Mua 1 thùng sơn, tặng 1 cây cậy nắp thùng sơn. Cậy 5 lần mới gãy.</li>
                                    <li>Mua 2 thùng sơn, cũng tặng 1 cây cậy nắp thùng sơn, nhưng cây này xịn hơn, cậy 10 lần mới gãy.</li>
                                    <li><strong>Đặc biệt: </strong> Nếu quý vị mua 5 thùng sơn, chúng tôi sẽ tặng cho quý vị 1 cây cọ vàng! (dạ nó màu vàng)</li>
                                </ul>
                                <img src={yellowBrush} alt="Cây cọ vàng" />
                            </div>
                            <div className="news-item">
                                <h3>"Có lời hay không, chúng tôi vẫn làm"</h3>
                                <p>Chúc tôi luôn mang đến những sản phẩm chất lượng và dịch vụ tốt nhất cho khách hàng, bất kể rằng "có lời" hay không.</p>
                                <ul>
                                    <li>Dù cho "có lời ít hay nhiều", chúng tôi vẫn cam kết mang đến sản phẩm và dịch vụ tốt nhất.</li>
                                    <li>Dù cho "có lời khen", chúng tôi vẫn khiêm tốn tiếp nhận và không ngừng cải thiện chất lượng sản phẩm và dịch vụ.</li>
                                    <li>Dù cho "có lời đồn thất thiệt", chúng tôi vẫn cam kết phục vụ khách hàng tận tâm và chu đáo để chứng minh giá trị của công ty, khiến cho "lời đồn" là vô căn cứ.</li>
                                    <li>Dù cho "có lời chê", chúng tôi sẽ lắng nghe, sám hối, sửa chữa và cải thiện để phục vụ khách hàng tốt hơn.</li>
                                    <li>Dù cho "có lời qua tiếng lại", khách hàng luôn là số 1 và được chúng tôi đặt lên hàng đầu. Sau khi hết công trình, cỏ lúa bằng nhau!</li>
                                </ul>
                            </div>
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </>
    )
}
    
export default News