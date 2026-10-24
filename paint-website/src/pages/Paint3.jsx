import '../styles/general.css'

import Jotun from '../assets/img/paint3/jotun.png'

function Paint3() {
    return (
        <>
            <div className="paint-list-section">
                <h1 className="gradient-text">Jotun</h1>
                <div className="paint-list-container">
                    <div className="paint-content">
                        <h4>Jotun Majestic Sang Trọng</h4>
                        <p>Sơn nội thất cao cấp, bề mặt láng mịn.</p>
                        <img src={Jotun} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Jotun Jotashield Bền Màu Toàn Diện</h4>
                        <p>Sơn ngoại thất bền màu, chống bám bẩn.</p>
                        <img src={Jotun} alt="Sơn A" />
                    </div>
                    <div className="paint-content">
                        <h4>Jotun Essence Dễ Lau Chùi</h4>
                        <p>Sơn nội thất nhẹ mùi, dễ vệ sinh.</p>
                        <img src={Jotun} alt="Sơn A" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paint3