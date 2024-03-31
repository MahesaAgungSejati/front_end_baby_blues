import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './QuizForm.css';

function QuizForm() {
  const [jawaban, setJawaban] = useState(Array(10).fill(0));
  const baseUrl = 'http://localhost:8080';
  const navigate = useNavigate();

  const handleOptionClick = (group, value) => {
    const newJawaban = [...jawaban];
    newJawaban[group] = value;
    setJawaban(newJawaban);
    updateTotalScore();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = {
        jawaban: jawaban
      };

      await axios.post(`${baseUrl}/simpanHasil`, dataToSend);
      setJawaban(Array(10).fill(0));
      
      navigate('/HasilQuiz');
    } catch (error) {
      console.error('Gagal menyimpan jawaban:', error.message);
    }
  };

  const updateTotalScore = () => {
    let totalScore = 0;
    jawaban.forEach(value => {
      totalScore += value;
    });
    console.log('Total Skor:', totalScore);
  };

  const handleButtonClick = event => {
    const currentValue = parseInt(event.currentTarget.dataset.value);
    const currentGroup = parseInt(event.currentTarget.dataset.group);
    const newJawaban = [...jawaban];
    newJawaban[currentGroup] = currentValue;
    setJawaban(newJawaban);
    updateTotalScore();

    // Set style for clicked button
    event.currentTarget.style.backgroundColor = '#EC744A';
    event.currentTarget.style.color = 'white';
    
    // Set style for other buttons in the same group
    const buttonsInGroup = document.querySelectorAll(`.option-btn[data-group="${currentGroup}"]`);
    buttonsInGroup.forEach(button => {
      if (button !== event.currentTarget) {
        button.style.backgroundColor = '';
        button.style.color = '';
      }
    });
  };

  return (
    <div className='tes-sindrom'>
      <div className="tes-sindrom-nama">
        <h1>Tes Edinburgh Postnatal Depression Scale (EPDS)</h1>
        <h2>Ini adalah kesempatan bagi bunda untuk mengekspresikan isi hati dan perasaan Bunda dengan jujur. Oleh karena itu mohon isi kuisioner sesuai perasaan bunda</h2>
      </div>
      <div className="tes-sindrom-container">
        <div className="tes-sindrom-soal">
          <form onSubmit={handleSubmit}>
            {/* Pertanyaan 1 */}
            <p>1. Saya bisa tertawa dan melihat sisi lucu dari berbagai hal :</p>
            <button type="button" className="option-btn" data-value="0" data-group="0" onClick={handleButtonClick}>Sebanyak yang saya bisa</button>
            <button type="button" className="option-btn" data-value="1" data-group="0" onClick={handleButtonClick}>Sekarang tidak terlalu banyak</button>
            <button type="button" className="option-btn" data-value="2" data-group="0" onClick={handleButtonClick}>Tidak banyak sekarang</button>
            <button type="button" className="option-btn" data-value="3" data-group="0" onClick={handleButtonClick}>Tidak sama sekali</button>

            {/* Pertanyaan 2 */}
            <p>2. Saya telah menantikan dengan senang hati berbagai hal :</p>
            <button type="button" className="option-btn" data-value="0" data-group="1" onClick={handleButtonClick}>Sebanyak yang pernah saya lakukan</button>
            <button type="button" className="option-btn" data-value="1" data-group="1" onClick={handleButtonClick}>Agak lebih sedikit daripada yang saya lakukan dulu</button>
            <button type="button" className="option-btn" data-value="2" data-group="1" onClick={handleButtonClick}>Sedikit sekali daripada yang saya lakukan dulu</button>
            <button type="button" className="option-btn" data-value="3" data-group="1" onClick={handleButtonClick}>Hampir tidak sama sekali</button>

            {/* Pertanyaan 3 */}
            <p>3. Saya telah menyalahkan diri saya sendiri secara tidak perlu ketika terjadi kesalahan :</p>
            <button type="button" className="option-btn" data-value="0" data-group="2" onClick={handleButtonClick}>Tidak, tidak pernah</button>
            <button type="button" className="option-btn" data-value="1" data-group="2" onClick={handleButtonClick}>Tidak terlalu sering</button>
            <button type="button" className="option-btn" data-value="2" data-group="2" onClick={handleButtonClick}>Ya, kadang-kadang</button>
            <button type="button" className="option-btn" data-value="3" data-group="2" onClick={handleButtonClick}>Ya, hampir setiap saat</button>

            {/* Pertanyaan 4 */}
            <p>4. Saya merasa cemas atau khawatir tanpa alasan yang jelas :</p>
            <button type="button" className="option-btn" data-value="0" data-group="3" onClick={handleButtonClick}>Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" data-value="1" data-group="3" onClick={handleButtonClick}>Hampir tidak pernah</button>
            <button type="button" className="option-btn" data-value="2" data-group="3" onClick={handleButtonClick}>Ya, terkadang</button>
            <button type="button" className="option-btn" data-value="3" data-group="3" onClick={handleButtonClick}>Ya, sangat sering</button>

            {/* Pertanyaan 5 */}
            <p>5. Saya merasa takut atau panik tanpa alasan yang jelas :</p>
            <button type="button" className="option-btn" data-value="0" data-group="4" onClick={handleButtonClick}>Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" data-value="1" data-group="4" onClick={handleButtonClick}>Tidak, tidak banyak</button>
            <button type="button" className="option-btn" data-value="2" data-group="4" onClick={handleButtonClick}>Ya, terkadang</button>
            <button type="button" className="option-btn" data-value="3" data-group="4" onClick={handleButtonClick}>Ya, cukup banyak</button>

            {/* Pertanyaan 6 */}
            <p>6. Banyak hal yang terjadi pada saya :</p>
            <button type="button" className="option-btn" data-value="0" data-group="5" onClick={handleButtonClick}>Tidak, saya telah mengatasinya dengan baik seperti biasa</button>
            <button type="button" className="option-btn" data-value="1" data-group="5" onClick={handleButtonClick}>Tidak, sebagian besar waktu, saya telah mengatasinya dengan cukup baik</button>
            <button type="button" className="option-btn" data-value="2" data-group="5" onClick={handleButtonClick}>Ya, terkadang saya belum mengatasi sebaik biasanya</button>
            <button type="button" className="option-btn" data-value="3" data-group="5" onClick={handleButtonClick}>Ya, sebagian besar waktu, saya belum mampu mengatasinya sama sekali</button>

            {/* Pertanyaan 7 */}
            <p>7. Saya sangat tidak bahagia sehingga saya mengalami kesulitan tidur :</p>
            <button type="button" className="option-btn" data-value="0" data-group="6" onClick={handleButtonClick}>Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" data-value="1" data-group="6" onClick={handleButtonClick}>Tidak, tidak terlalu sering</button>
            <button type="button" className="option-btn" data-value="2" data-group="6" onClick={handleButtonClick}>Ya, terkadang</button>
            <button type="button" className="option-btn" data-value="3" data-group="6" onClick={handleButtonClick}>Ya, sebagian besar waktu</button>

            {/* Pertanyaan 8 */}
            <p>8. Saya merasa sedih atau menderita :</p>
            <button type="button" className="option-btn" data-value="0" data-group="7" onClick={handleButtonClick}>Tidak, tidak sama sekali</button>
            <button type="button" className="option-btn" data-value="1" data-group="7" onClick={handleButtonClick}>Tidak terlalu sering</button>
            <button type="button" className="option-btn" data-value="2" data-group="7" onClick={handleButtonClick}>Ya, cukup sering</button>
            <button type="button" className="option-btn" data-value="3" data-group="7" onClick={handleButtonClick}>Ya, sebagian besar waktu</button>

            {/* Pertanyaan 9 */}
            <p>9. Saya sangat tidak bahagia sampai-sampai saya menangis :</p>
            <button type="button" className="option-btn" data-value="0" data-group="8" onClick={handleButtonClick}>Tidak pernah</button>
            <button type="button" className="option-btn" data-value="1" data-group="8" onClick={handleButtonClick}>Hanya sesekali</button>
            <button type="button" className="option-btn" data-value="2" data-group="8" onClick={handleButtonClick}>Ya, cukup sering</button>
            <button type="button" className="option-btn" data-value="3" data-group="8" onClick={handleButtonClick}>Ya, sebagian besar waktu</button>

            {/* Pertanyaan 10 */}
            <p>10. Pikiran untuk melukai diri sendiri pernah terlintas di benak saya :</p>
            <button type="button" className="option-btn" data-value="0" data-group="9" onClick={handleButtonClick}>Tidak pernah</button>
            <button type="button" className="option-btn" data-value="1" data-group="9" onClick={handleButtonClick}>Hampir tidak pernah</button>
            <button type="button" className="option-btn" data-value="2" data-group="9" onClick={handleButtonClick}>Terkadang</button>
            <button type="button" className="option-btn" data-value="3" data-group="9" onClick={handleButtonClick}>Cukup sering</button>

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
