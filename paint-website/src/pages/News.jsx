import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/general.css'
    
function News() {
    return (
        <>
            <Header />
            <div className="news-container">
                <h1>Tin tức hót hòn họt</h1>
            </div>
            <Footer />
        </>
    )
}
    
export default News