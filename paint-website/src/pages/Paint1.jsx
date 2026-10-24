import '../styles/general.css'

import Dulux from '../assets/img/paint1/dulux.png'

function Paint1() {
    return (
        <>
            <div className="paint-list-section">
                <h1 className="gradient-text">Dulux</h1>
                <div className="paint-list-container">
                    <div className="paint-content">
                        <h4>Dulux Weathershield</h4>
                        <p>Sơn ngoại thất bền màu, chống chịu thời tiết.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Dulux EasyClean</h4>
                        <p>Sơn dễ lau chùi, phù hợp cho nội thất.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Dulux Inspire Nội Thất</h4>
                        <p>Màu sắc bền đẹp, phù hợp không gian sống.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Dulux Weathershield Flexi</h4>
                        <p>Sơn ngoại thất đàn hồi, chống nứt.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Dulux Weathershield Powerflexx</h4>
                        <p>Sơn ngoại thất siêu bền, chống rêu mốc.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Dulux Ambiance</h4>
                        <p>Sơn nội thất cao cấp, màu sắc tinh tế.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Dulux EasyCare</h4>
                        <p>Sơn nội thất dễ lau chùi, bền màu.</p>
                        <img src={Dulux} alt="Sơn A" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paint1