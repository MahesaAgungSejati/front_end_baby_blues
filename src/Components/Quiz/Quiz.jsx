import React from 'react'
import './Quiz.css'
import ambil_tes_image_3 from '../Assets/ambil_tes_image_3.jpg'
export const Quiz = () => {
  return (
    <div className='quiz'>
        <div className='quiz-left'>
        <h1>Ambil Tes</h1>
        <h1>Sindrom Baby Blues</h1>
        <p>PERIKSA CEPAT DAN DAPATKAN LANGSUNG HASILNYA</p>
        <button>Yuk, Mulai Tes!</button>
        </div>
        <div className="quiz-right">
            <img src={ambil_tes_image_3} alt='' />
        </div>
    </div>
  )
}

export default Quiz
