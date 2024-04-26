import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PilihanQuiz.css';
import tes_satu from '../Assets/tes_satu.jpg';
import tes_dua from '../Assets/tes_dua.jpg';

export const PilihanQuiz = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null); // Referensi ke judul halaman
  const [showAlert, setShowAlert] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(''); // Menyimpan path tes yang dipilih

  useEffect(() => {
    // Tempatkan fokus pada judul halaman saat komponen dimuat
    titleRef.current.focus();
  }, []);

  const handleButtonClick = (path) => {
    // Menampilkan alert kedua sebelum menetapkan path tes yang dipilih
    setSelectedQuiz(path);
    setShowConfirmation(true);
  };

  const confirmNavigation = () => {
    setShowConfirmation(false);
    if (selectedQuiz) {
      navigate(selectedQuiz);
    }
  };

  return (
    <div className='pilihan-quiz'>
      <h1 ref={titleRef} tabIndex={-1}>Pilihan Tes</h1> {/* Tambahkan ref dan tabIndex */}
      <h2>Kenali diri ibu dan pilihlah tes yang sesuai.</h2>
      {showAlert && (
        <div className="popup-pilihan">
          <div className="popup-pilihan-first">
          <h1>PERHATIKAN!</h1>
          <h3>Tata Cara & Informasi Memilih Tes</h3>
          <p>Ini adalah peringatan penting. Mohon pastikan sebelum memilih tes.</p>
          <h2>Tes ini terdiri dari 2 tes yaitu, Tes sindrom baby blues pasca melahirkan dan Tes postpartum/depresi pasca melahirkan.</h2>
          <h2>kedua tes ini berbeda, kenali gejala pada bunda terlebih dahulu. Gejala baby blues umumnya muncul mulai dari 2 sampai 3 hari setelah melahirkan. Sementara postpartum depression biasanya muncul pada bulan kedua atau ketiga setelah melahirkan.</h2>
          <h2>Hal tersebut terjadi karena periode kehamilan merupakan periode yang sulit dijalani.
              setelah mengenali gejala dan paham bunda bisa memilih tes.</h2>
            <button onClick={() => setShowAlert(false)}>Saya Mengerti</button>
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="popup-tes">
          <div className="popup-pilihan-tes">
            <h1>KONFIRMASI</h1>
            <h2>1. Test ini TIDAK ditujukan untuk mendiagnosis gangguan psikologis, namun untuk membantu mengenali gambaran dirimu saat ini</h2>
            <h2>2. Apabila kamu mengalami gejala yang mengganggu, segeralah berkonsultasi ke psikolog/psikiater untuk mendapatkan penanganan yang tepat.</h2>
            <p>Apakah Anda yakin ingin mengambil tes ini?</p>
            <div>
              <button onClick={confirmNavigation}>Ya</button>
              <button onClick={() => setShowConfirmation(false)}>Tidak</button>
            </div>
          </div>
        </div>
      )}
      <div className="pilihan-container">
        <div className="pilihan-quiz-satu">
          <img src={tes_dua} alt='' />
          <div className="quiz-satu-info">
            <h1>Tes Sindrom Baby Blues Pasca Melahirkan</h1>
            <p>Tes Sindrom Baby Blues Pasca Melahirkan dengan Pengukuran Postpartum Blues Model Suryani ini digunakan untuk mendeteksi ibu mengalami postpartum dengan memberikan 32 pertanyaan yang harus dijawab.</p>
            <button onClick={() => handleButtonClick('/QuizForm_2')}>
              Ambil Tes
            </button>
          </div>
        </div>
        <div className="pilihan-quiz-dua">
          <img src={tes_satu} alt='' />
          <div className="quiz-dua-info">
            <h1>Tes Depresi Pasca Persalinan</h1>
            <p>Tes Depresi Pasca Persalinan dengan Edinburgh Postnatal Depression Scale (EPDS) untuk mengidentifikasi wanita yang mengalami depresi pascapersalinan. Item skala sesuai dengan berbagai gejala depresi klinis, seperti perasaan bersalah, gangguan tidur, energi rendah, anhedonia, dan ide bunuh diri.</p>
            <button onClick={() => handleButtonClick('/QuizForm')}>
              Ambil Tes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilihanQuiz;
