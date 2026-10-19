import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import welcomeImage from '../assets/img/welcome-image.png'
import '../styles/general.css'
    
function Home() {
    return (
        <>
            <div className="home-container">
                <h1>Kính chào quý khách</h1>
                <p>Khám phá các loại sơn và dịch vụ của chúng tôi.</p>
                <img src={welcomeImage} alt="Welcome" />
            </div>
        </>
    )
}

export default Home