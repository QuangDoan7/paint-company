import welcomeImage from '../assets/img/welcome.png'
import '../styles/general.css'
    
function Home() {
    return (
        <>
            <div className="home-container">
                <h1 className="gradient-text">Mang sắc màu đến với ngôi nhà thân yêu của bạn!</h1>
                <h3>Khám phá các sản phẩm sơn chất lượng và giải pháp phù hợp cho ngôi nhà, công trình và không gian của bạn.</h3>
                <img src={welcomeImage} alt="Welcome" />
            </div>
        </>
    )
}

export default Home