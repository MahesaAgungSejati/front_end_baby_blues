import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PilihanQuiz.css'
import tes_satu from '../Assets/tes_satu.jpg';
import tes_dua from '../Assets/tes_dua.jpg';

export const PilihanQuiz = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className='pilihan-quiz'>
      <h1>Pilihan Tes</h1>
      <h2>Kenali diri bunda, pilih tes, dan lakukan yang terbaik</h2>
      <div className="pilihan-container">
      <div className="pilihan-quiz-satu">
        <img src={tes_satu} alt='' />
        <div className="quiz-satu-info">
          <h1>Tes Depresi</h1>
          <p>Tes Depresi dengan Edinburgh Postnatal Depression Scale (EPDS) ini digunakan untuk mengukur..........is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <button onClick={() => handleButtonClick('/QuizForm')}>
        Ambil Tes
      </button>
      </div>
      </div>
      <div className="pilihan-quiz-dua">
        <img src={tes_dua} alt='' />
        <div className="quiz-dua-info">
          <h1>Tes Sindrom Baby Blues Pasca Melahirkan</h1>
          <p>Tes Sindrom Baby Blues Pasca Melahirkan dengan Pengukuran Postpartum Blues Model Suryani ini digunakan untuk mengukur..........is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <button onClick={() => handleButtonClick('/QuizForm_2')}>
        Ambil Tes
      </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default PilihanQuiz;
