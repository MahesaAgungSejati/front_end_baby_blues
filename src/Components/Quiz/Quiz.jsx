import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import ambil_tes_image_6 from '../Assets/ambil_tes_image_6.png';

export const Quiz = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/PilihanQuiz');
  };

  return (
    <div className='quiz'>
      <div className="quiz-left">
        <img src={ambil_tes_image_6} alt='' />
      </div>

      <div className='quiz-right'>
        <h1>Ambil Tes</h1>
        <h1>Sindrom Baby Blues</h1>
        <h2>PERIKSA CEPAT DAN DAPATKAN LANGSUNG HASILNYA</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
          Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et.
          A in ullamcorper ipsum justo vestibulum sit cursus A risus donec eget enim</p>
        <button onClick={handleClick}>Yuk, Mulai Tes!</button>
      </div>
    </div>
  );
}

export default Quiz;
