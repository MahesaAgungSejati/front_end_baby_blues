import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './QuizForm.css';

function QuizForm() {
  const [jawaban, setJawaban] = useState(Array(10).fill(null));
  const baseUrl = 'http://localhost:8080';
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const titleRef = useRef(null); // Referensi ke judul halaman

  useEffect(() => {
    // Tampilkan pop-up alert setelah 5 detik
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 1000);

    // Fokuskan pada judul halaman saat komponen dimuat
    titleRef.current.focus();

    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (group, value, event) => {
    const newJawaban = [...jawaban];
    newJawaban[group] = value;
    setJawaban(newJawaban);
    updateTotalScore(newJawaban);

    // Set style for clicked button
    event.currentTarget.style.backgroundColor = '#EC744A';
    event.currentTarget.style.color = 'white';

    // Set style for other buttons in the same group
    const buttonsInGroup = document.querySelectorAll(`.option-btn[data-group="${group}"]`);
    buttonsInGroup.forEach(button => {
      if (button !== event.currentTarget) {
        button.style.backgroundColor = '';
        button.style.color = '';
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }
    setShowConfirmation(false); // sembunyikan pop-up konfirmasi setelah menekan tombol
    try {
      if (jawaban.some(answer => answer === null)) {
        alert('Anda belum menjawab semua pertanyaan!');
        return;
      }

      const dataToSend = {
        jawaban: jawaban
      };

      await axios.post(`${baseUrl}/simpanHasil`, dataToSend);
      setJawaban(Array(10).fill(null));
      
      navigate('/HasilQuiz');
    } catch (error) {
      console.error('Gagal menyimpan jawaban:', error.message);
    }
  };

  const updateTotalScore = (newJawaban) => {
    let totalScore = newJawaban.reduce((acc, value) => acc + value, 0);
    console.log('Total Skor:', totalScore);
  };

  return (
    <div className='tes-sindrom'>
      <div className="tes-sindrom-nama">
        <h1 ref={titleRef} tabIndex={-1}>Tes Edinburgh Postnatal Depression Scale (EPDS)</h1>
        <h2>Ini adalah kesempatan bagi bunda untuk mengekspresikan isi hati dan perasaan Bunda dengan jujur. Oleh karena itu mohon isi kuisioner sesuai perasaan bunda</h2>
      </div>
      <div className="tes-sindrom-container">
        <div className="tes-sindrom-soal">
          <form onSubmit={handleSubmit}>
            {showAlert && (
              <div className="popup">
                <div className="popup-content">
                  <h1>PERHATIKAN</h1>
                  <h2>Tata Cara & Informasi Mengerjakan Quiz</h2>
                  <p>1. Bunda memilih dengan klik jawaban yang paling mendekati dengan apa yang ia rasakan selama tujuh hari sebelumnya.</p>
                  <p>2. Kesepuluh pertanyaan harus diisi dengan lengkap dan sesuai perasaan bunda sekarang.</p>
                  <p>3. Harus berhati-hati untuk menghindari kemungkinan bunda mendiskusikan jawabannya dengan orang lain.</p>
                  <p>4. Bunda harus mengisi sendiri skala ini, kecuali jika bunda memiliki keterbatasan mobilisasi atau kesulitan membaca.</p>
                  <p>5. Skala ini dapat digunakan pada enam hingga delapan minggu setelah kelahiran atau selama kehamilan.</p>
                  <button onClick={() => setShowAlert(false)}>Saya Mengerti</button>
                </div>
              </div>
            )}
            {showConfirmation && (
              <div className="popup-confirmation">
                <div className="popup-content-confirmation">
                  <h2>KONFIRMASI</h2>
                  <p>Apakah Anda yakin ingin menyelesaikan quiz?</p>
                  {/* <p>Anda bisa memeriksanya lagi jika belum yakin</p> */}
                  <div>
                    <button onClick={handleSubmit}>SUDAH</button>
                    <button onClick={() => setShowConfirmation(false)}>BELUM</button>
                  </div>
                </div>
              </div>
            )}
            {/* Pertanyaan 1 */}
            <p>1. Saya bisa tertawa dan melihat sisi lucu dari berbagai hal :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(0, 0, e)} data-group="0">Sebanyak yang saya bisa</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(0, 1, e)} data-group="0">Sekarang tidak terlalu banyak</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(0, 2, e)} data-group="0">Tidak banyak sekarang</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(0, 3, e)} data-group="0">Tidak sama sekali</button>

            {/* Pertanyaan 2 */}
            <p>2. Saya telah menantikan dengan senang hati berbagai hal :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(1, 0, e)} data-group="1">Sebanyak yang pernah saya lakukan</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(1, 1, e)} data-group="1">Agak lebih sedikit daripada yang saya lakukan dulu</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(1, 2, e)} data-group="1">Sedikit sekali daripada yang saya lakukan dulu</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(1, 3, e)} data-group="1">Hampir tidak sama sekali</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 3 */}
            <p>3. Saya telah menyalahkan diri saya sendiri secara tidak perlu ketika terjadi kesalahan :</p>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(2, 0, e)} data-group="2">Tidak, tidak pernah</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(2, 1, e)} data-group="2">Tidak terlalu sering</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(2, 2, e)} data-group="2">Ya, kadang-kadang</button>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(2, 3, e)} data-group="2">Ya, hampir setiap saat</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 4 */}
            <p>4. Saya merasa cemas atau khawatir tanpa alasan yang jelas :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(3, 0, e)} data-group="3">Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(3, 1, e)} data-group="3">Hampir tidak pernah</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(3, 2, e)} data-group="3">Ya, terkadang</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(3, 3, e)} data-group="3">Ya, sangat sering</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 5 */}
            <p>5. Saya merasa takut atau panik tanpa alasan yang jelas :</p>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(4, 0, e)} data-group="4">Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(4, 1, e)} data-group="4">Tidak, tidak banyak</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(4, 2, e)} data-group="4">Ya, terkadang</button>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(4, 3, e)} data-group="4">Ya, cukup banyak</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 6 */}
            <p>6. Banyak hal yang terjadi pada saya :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(5, 0, e)} data-group="5">Tidak, saya telah mengatasinya dengan baik seperti biasa</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(5, 1, e)} data-group="5">Tidak, sebagian besar waktu, saya telah mengatasinya dengan cukup baik</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(5, 2, e)} data-group="5">Ya, terkadang saya belum mengatasi sebaik biasanya</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(5, 3, e)} data-group="5">Ya, sebagian besar waktu, saya belum mampu mengatasinya sama sekali</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 7 */}
            <p>7. Saya sangat tidak bahagia sehingga saya mengalami kesulitan tidur :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(6, 0, e)} data-group="6">Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(6, 1, e)} data-group="6">Tidak, tidak terlalu sering</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(6, 2, e)} data-group="6">Ya, terkadang</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(6, 3, e)} data-group="6">Ya, sebagian besar waktu</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 8 */}
            <p>8. Saya merasa sedih atau menderita :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(7, 0, e)} data-group="7">Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(7, 1, e)} data-group="7">Tidak terlalu sering</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(7, 2, e)} data-group="7">Ya, cukup sering</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(7, 3, e)} data-group="7">Ya, sebagian besar waktu</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 9 */}
            <p>9. Saya sangat tidak bahagia sampai-sampai saya menangis :</p>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(8, 0, e)} data-group="8">Tidak pernah</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(8, 1, e)} data-group="8">Hanya sesekali</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(8, 2, e)} data-group="8">Ya, cukup sering</button>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(8, 3, e)} data-group="8">Ya, sebagian besar waktu</button>

            {/* Lanjutkan untuk pertanyaan berikutnya */}
            {/* Pertanyaan 10 */}
            <p>10. Pikiran untuk melukai diri sendiri pernah terlintas di benak saya :</p>
            <button type="button" className="option-btn" value="3" onClick={(e) => handleOptionClick(9, 0, e)} data-group="9">Tidak pernah</button>
            <button type="button" className="option-btn" value="2" onClick={(e) => handleOptionClick(9, 1, e)} data-group="9">Hampir tidak pernah</button>
            <button type="button" className="option-btn" value="1" onClick={(e) => handleOptionClick(9, 2, e)} data-group="9">Terkadang</button>
            <button type="button" className="option-btn" value="0" onClick={(e) => handleOptionClick(9, 3, e)} data-group="9">Cukup sering</button>
            {/* Buttons */}
            <div className="tes-sindrom-submit">
              <button type="submit">Selesai Mengerjakan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuizForm;
