import '../styles/general.css'
import yellowBrush from '../assets/img/news/yellow-brush.png'
    
function News() {
    return (
        <>
            <div className="news-container">
                <h1 className="gradient-text">Tin Nóng Phỏng Tay</h1>
                <div className="news-item-container">
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
                </div>
            </div>
        </>
    )
}
    
export default News