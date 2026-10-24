import '../styles/general.css'

import Nippon from '../assets/img/paint2/nippon.png'

function Paint2() {
    return (
        <>
            <div className="paint-list-section">
                <h1 className="gradient-text">Nippon Paint</h1>
                <div className="paint-list-container">
                    <div className="paint-content">
                        <h4>Nippon WeatherGard</h4>
                        <p>Sơn ngoại thất bảo vệ bề mặt tường.</p>
                        <img src={Nippon} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Nippon Odour-less Spot-less</h4>
                        <p>Sơn nội thất nhẹ mùi, chống bám bẩn.</p>
                        <img src={Nippon} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Nippon Matex</h4>
                        <p>Sơn nội thất kinh tế, dễ thi công.</p>
                        <img src={Nippon} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Nippon WP 200</h4>
                        <p>Sơn chống thấm bảo vệ công trình.</p>
                        <img src={Nippon} alt="Sơn A" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paint2